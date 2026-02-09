import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import crypto from 'crypto';
import { getStripe } from '@/lib/stripe';

export const runtime = 'nodejs';

const PIXEL_ID = '639641088589650';
const META_ENDPOINT = `https://graph.facebook.com/v21.0/${PIXEL_ID}/events`;

function hashEmail(email?: string | null): string | null {
  if (!email) return null;
  const normalized = email.trim().toLowerCase();
  if (!normalized) return null;
  return crypto.createHash('sha256').update(normalized).digest('hex');
}

async function sendMetaPurchase(params: {
  eventId: string;
  eventTime: number;
  emailHash?: string | null;
  value: number;
  currency: string;
  clientIp?: string;
  clientUserAgent?: string;
  fbc?: string;
  fbp?: string;
}): Promise<void> {
  const token = process.env.META_CAPI_TOKEN;
  if (!token) {
    console.warn('[Meta CAPI] META_CAPI_TOKEN missing');
    return;
  }

  const userData: Record<string, unknown> = {};

  if (params.emailHash) userData.em = [params.emailHash];
  if (params.clientIp) userData.client_ip_address = params.clientIp;
  if (params.clientUserAgent) userData.client_user_agent = params.clientUserAgent;
  if (params.fbc) userData.fbc = params.fbc;
  if (params.fbp) userData.fbp = params.fbp;

  const payload = {
    data: [
      {
        event_name: 'Purchase',
        event_time: params.eventTime,
        event_id: params.eventId,
        event_source_url: 'https://agents.andy.cy/danke',
        action_source: 'website',
        user_data: userData,
        custom_data: {
          value: params.value,
          currency: params.currency,
          content_name: 'OpenClaw Deep Dive',
          content_ids: ['openclaw-deep-dive'],
          content_type: 'product',
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
}

export async function POST(request: Request) {
  const signature = request.headers.get('stripe-signature');
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !secret) {
    return NextResponse.json({ error: 'Missing webhook signature/secret' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    const payload = await request.text();
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(payload, signature, secret);
  } catch (error) {
    console.error('[Stripe webhook] signature verification failed', error);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type !== 'checkout.session.completed') {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (session.payment_status !== 'paid') {
    return NextResponse.json({ received: true });
  }

  const amountTotal = session.amount_total;
  const currency = session.currency?.toUpperCase() || 'EUR';

  if (typeof amountTotal !== 'number') {
    return NextResponse.json({ received: true });
  }

  const metadata = session.metadata ?? {};
  const email = session.customer_details?.email || session.customer_email || undefined;
  const emailHash = hashEmail(email);

  const completedAt = (session as { completed_at?: number }).completed_at;
  const eventTime = typeof completedAt === 'number'
    ? completedAt
    : Math.floor(Date.now() / 1000);

  const clientIp = metadata.client_ip || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const clientUserAgent = metadata.client_ua || request.headers.get('user-agent') || undefined;

  await sendMetaPurchase({
    eventId: session.id,
    eventTime,
    emailHash,
    value: amountTotal / 100,
    currency,
    clientIp,
    clientUserAgent,
    fbc: metadata.fbc || undefined,
    fbp: metadata.fbp || undefined,
  });

  return NextResponse.json({ received: true });
}
