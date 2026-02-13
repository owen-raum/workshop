import { NextResponse } from 'next/server';
import { cookies, headers } from 'next/headers';
import { getStripe, getSoldTicketsCount, TOTAL_TICKETS } from '@/lib/stripe';
import { getTierInfo } from '@/lib/tiers';
import { isRegistrationClosed } from '@/lib/deadline';

export async function POST(request: Request) {
  try {
    if (isRegistrationClosed()) {
      return NextResponse.json(
        { error: 'Anmeldeschluss vorbei – Buchung ist nicht mehr möglich' },
        { status: 400 }
      );
    }

    const stripe = getStripe();
    const body = await request.json().catch(() => ({}));
    const origin = request.headers.get('origin') || 'https://agents.andy.cy';

    const headerList = await headers();
    const cookieStore = await cookies();
    const fbp = cookieStore.get('_fbp')?.value;
    const fbc = cookieStore.get('_fbc')?.value;
    const clientIp = headerList.get('x-forwarded-for')?.split(',')[0]?.trim();
    const clientUa = headerList.get('user-agent') || undefined;

    // Dynamischer Preis basierend auf aktuellem Verkaufsstand
    const sold = await getSoldTicketsCount(stripe);
    
    if (sold >= TOTAL_TICKETS) {
      return NextResponse.json(
        { error: 'Ausverkauft – keine Tickets mehr verfügbar' },
        { status: 400 }
      );
    }

    const tier = getTierInfo(sold);

    const metadata: Record<string, string> = {
      tier: tier.name,
      price: String(tier.priceCents),
      sold_at_checkout: String(sold),
      utm_source: body.utm_source || '',
      utm_medium: body.utm_medium || '',
      utm_campaign: body.utm_campaign || '',
      utm_content: body.utm_content || '',
    };

    if (fbp) metadata.fbp = fbp;
    if (fbc) metadata.fbc = fbc;
    if (clientIp) metadata.client_ip = clientIp;
    if (clientUa) metadata.client_ua = clientUa;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      customer_email: body.email || undefined,
      line_items: [
        {
          price_data: {
            currency: 'eur',
            unit_amount: tier.priceCents,
            tax_behavior: 'inclusive',
            product_data: {
              name: 'OpenClaw Deep Dive',
              description: `${tier.label}-Ticket: Live-Teilnahme am 15. Februar 2026 + Aufzeichung + Alle Materialien`,
            },
          },
          quantity: 1,
        },
      ],
      customer_creation: 'always',
      billing_address_collection: 'required',
      automatic_tax: { enabled: true },
      tax_id_collection: { enabled: true },
      invoice_creation: {
        enabled: true,
      },
      success_url: `${origin}/danke?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#pricing`,
      metadata,
      payment_intent_data: {
        metadata,
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
