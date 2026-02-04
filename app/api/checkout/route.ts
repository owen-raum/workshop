import { NextResponse } from 'next/server';
import Stripe from 'stripe';

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2026-01-28.clover',
  });
}

export async function POST(request: Request) {
  try {
    const stripe = getStripe();
    const body = await request.json().catch(() => ({}));
    const origin = request.headers.get('origin') || 'https://agents.andy.cy';

    const tier = 'early_bird';
    const price = 14900; // 149€ in cents

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      customer_email: body.email || undefined,
      line_items: [
        {
          price_data: {
            currency: 'eur',
            unit_amount: price,
            product_data: {
              name: 'OpenClaw Deep Dive – Live-Webinar',
              description: 'Live-Teilnahme am 15. Februar 2026 + Aufzeichnung + Alle Materialien',
            },
          },
          quantity: 1,
        },
      ],
      customer_creation: 'always',
      success_url: `${origin}/danke?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#pricing`,
      metadata: {
        tier,
        price: String(price),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
