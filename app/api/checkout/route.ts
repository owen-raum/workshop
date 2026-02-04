import { NextResponse } from 'next/server';
import { getStripe, getSoldTicketsCount, TOTAL_TICKETS } from '@/lib/stripe';
import { getTierInfo } from '@/lib/tiers';

export async function POST(request: Request) {
  try {
    const stripe = getStripe();
    const body = await request.json().catch(() => ({}));
    const origin = request.headers.get('origin') || 'https://agents.andy.cy';

    // Dynamischer Preis basierend auf aktuellem Verkaufsstand
    const sold = await getSoldTicketsCount(stripe);
    
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
