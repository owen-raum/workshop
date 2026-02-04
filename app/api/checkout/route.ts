import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getTierInfo } from '@/lib/tiers';

const TOTAL_TICKETS = 100;

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2026-01-28.clover',
  });
}

async function getSoldCount(stripe: Stripe): Promise<number> {
  const sessions = await stripe.checkout.sessions.list({
    limit: 100,
    expand: ['data.line_items'],
  });

  return sessions.data.filter(
    (session) =>
      session.payment_status === 'paid' &&
      session.line_items?.data.some((item) =>
        item.description?.includes('OpenClaw Deep Dive')
      )
  ).length;
}

export async function POST(request: Request) {
  try {
    const stripe = getStripe();
    const body = await request.json().catch(() => ({}));
    const origin = request.headers.get('origin') || 'https://agents.andy.cy';

    // Dynamischer Preis basierend auf aktuellem Verkaufsstand
    const sold = await getSoldCount(stripe);
    
    if (sold >= TOTAL_TICKETS) {
      return NextResponse.json(
        { error: 'Ausverkauft – keine Tickets mehr verfügbar' },
        { status: 400 }
      );
    }

    const tier = getTierInfo(sold);

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      customer_email: body.email || undefined,
      line_items: [
        {
          price_data: {
            currency: 'eur',
            unit_amount: tier.priceCents,
            product_data: {
              name: 'OpenClaw Deep Dive – Live-Webinar',
              description: `${tier.label}-Ticket: Live-Teilnahme am 15. Februar 2026 + Aufzeichnung + Alle Materialien`,
            },
          },
          quantity: 1,
        },
      ],
      customer_creation: 'always',
      success_url: `${origin}/danke?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#pricing`,
      metadata: {
        tier: tier.name,
        price: String(tier.priceCents),
        sold_at_checkout: String(sold),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Checkout konnte nicht erstellt werden' },
      { status: 500 }
    );
  }
}
