import { promises as fs } from 'fs';
import path from 'path';
import crypto from 'crypto';

const OUTPUT_PATH = path.join(process.cwd(), 'data', 'golden-codes.json');
const CODE_COUNT = 20;
const PREFIX = 'GT-';
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const generateCode = () => {
  const bytes = crypto.randomBytes(8);
  let code = '';
  for (let i = 0; i < 8; i += 1) {
    code += CHARS[bytes[i] % CHARS.length];
  }
  return `${PREFIX}${code}`;
};

const generateCodes = () => {
  const codes = new Set<string>();
  while (codes.size < CODE_COUNT) {
    codes.add(generateCode());
  }
  return Array.from(codes).map((code) => ({
    code,
    used: false,
    usedBy: null,
    usedAt: null,
  }));
};

const run = async () => {
  const payload = generateCodes();
  await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await fs.writeFile(OUTPUT_PATH, JSON.stringify(payload, null, 2), 'utf-8');
  console.log(`Generated ${payload.length} codes at ${OUTPUT_PATH}`);
};

run().catch((error) => {
  console.error('Failed to generate codes:', error);
  process.exit(1);
});
