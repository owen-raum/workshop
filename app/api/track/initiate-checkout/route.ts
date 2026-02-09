import { NextResponse } from 'next/server';
import { cookies, headers } from 'next/headers';

export const runtime = 'nodejs';

const PIXEL_ID = '639641088589650';
const META_ENDPOINT = `https://graph.facebook.com/v21.0/${PIXEL_ID}/events`;

type InitiateCheckoutPayload = {
  eventId?: string;
  value?: number | string;
  currency?: string;
  content_name?: string;
  content_category?: string;
};

export async function POST(request: Request) {
  const token = process.env.META_CAPI_TOKEN;
  if (!token) {
    console.warn('[Meta CAPI] META_CAPI_TOKEN missing');
    return NextResponse.json({ ok: false }, { status: 200 });
  }

  const body = (await request.json().catch(() => ({}))) as InitiateCheckoutPayload;
  const eventId = typeof body.eventId === 'string' ? body.eventId : undefined;

  if (!eventId) {
    return NextResponse.json({ error: 'Missing eventId' }, { status: 400 });
  }

  const parsedValue = Number(body.value);
  const value = Number.isFinite(parsedValue) ? parsedValue : undefined;
  const currency = body.currency || 'EUR';
  const contentName = body.content_name || 'OpenClaw Deep Dive';
  const contentCategory = body.content_category || 'ticket';

  const headerList = await headers();
  const cookieStore = await cookies();
  const clientIp = headerList.get('x-forwarded-for')?.split(',')[0]?.trim();
  const clientUserAgent = headerList.get('user-agent') || undefined;
  const fbp = cookieStore.get('_fbp')?.value;
  const fbc = cookieStore.get('_fbc')?.value;
  const eventSourceUrl = headerList.get('referer') || headerList.get('origin') || 'https://agents.andy.cy';

  const userData: Record<string, unknown> = {};
  if (clientIp) userData.client_ip_address = clientIp;
  if (clientUserAgent) userData.client_user_agent = clientUserAgent;
  if (fbp) userData.fbp = fbp;
  if (fbc) userData.fbc = fbc;

  const payload = {
    data: [
      {
        event_name: 'InitiateCheckout',
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: eventSourceUrl,
        action_source: 'website',
        user_data: userData,
        custom_data: {
          value,
          currency,
          content_name: contentName,
          content_category: contentCategory,
        },
      },
    ],
    access_token: token,
  };

  try {
    const response = await fetch(META_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => '');
      console.error('[Meta CAPI] request failed', response.status, text);
    }
  } catch (error) {
    console.error('[Meta CAPI] request error', error);
  }

  return NextResponse.json({ ok: true });
}
