import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

interface UsedBy {
  firstName: string;
  lastName: string;
  email: string;
}

interface GoldenCode {
  code: string;
  used: boolean;
  usedBy: UsedBy | null;
  usedAt: string | null;
}

const CODES_PATH = path.join(process.cwd(), 'data', 'golden-codes.json');

const loadCodes = async (): Promise<GoldenCode[]> => {
  const raw = await fs.readFile(CODES_PATH, 'utf-8');
  return JSON.parse(raw) as GoldenCode[];
};

const saveCodes = async (codes: GoldenCode[]) => {
  await fs.writeFile(CODES_PATH, JSON.stringify(codes, null, 2), 'utf-8');
};

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const sendToTally = async (payload: {
  firstName: string;
  lastName: string;
  email: string;
  code: string;
}) => {
  const formId = process.env.TALLY_GOLDEN_FORM_ID;
  if (!formId) return;

  const params = new URLSearchParams({
    vorname: payload.firstName,
    nachname: payload.lastName,
    email: payload.email,
    code: payload.code,
    firstName: payload.firstName,
    lastName: payload.lastName,
    name: `${payload.firstName} ${payload.lastName}`,
  });

  try {
    const response = await fetch(`https://tally.so/r/${formId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!response.ok) {
      console.error('Tally submission failed:', response.status, await response.text());
    }
  } catch (error) {
    console.error('Tally submission error:', error);
  }
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const firstName = String(body.firstName ?? '').trim();
    const lastName = String(body.lastName ?? '').trim();
    const email = String(body.email ?? '').trim();
    const rawCode = String(body.code ?? '').trim();

    if (!firstName || !lastName || !email || !rawCode) {
      return NextResponse.json({ error: 'Bitte alle Felder ausfüllen.' }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Bitte eine gültige E-Mail angeben.' }, { status: 400 });
    }

    const codeValue = rawCode.toUpperCase();
    const codes = await loadCodes();
    const matchIndex = codes.findIndex((entry) => entry.code.toUpperCase() === codeValue);

    if (matchIndex === -1) {
      return NextResponse.json({ error: 'Ungültiger Code' }, { status: 400 });
    }

    const entry = codes[matchIndex];
    if (entry.used) {
      return NextResponse.json({ error: 'Code bereits verwendet' }, { status: 409 });
    }

    const updatedEntry: GoldenCode = {
      ...entry,
      used: true,
      usedBy: { firstName, lastName, email },
      usedAt: new Date().toISOString(),
    };

    codes[matchIndex] = updatedEntry;
    await saveCodes(codes);

    await sendToTally({ firstName, lastName, email, code: entry.code });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Golden ticket API error:', error);
    return NextResponse.json({ error: 'Serverfehler. Bitte später nochmal versuchen.' }, { status: 500 });
  }
}
