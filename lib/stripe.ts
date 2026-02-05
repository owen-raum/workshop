import Stripe from 'stripe';

export const TOTAL_TICKETS = 100;

export function getStripe(): Stripe {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2026-01-28.clover',
  });
}

/**
 * Zählt verkaufte "OpenClaw Deep Dive" Tickets aus bezahlten Stripe Checkout Sessions.
 * Filtert ab Workshop-Launch (2026-02-04) um nicht alle historischen Sessions zu laden.
 */
export async function getSoldTicketsCount(stripe: Stripe): Promise<number> {
  const SOLD_OFFSET = 2;
  // Workshop launched 2026-02-04 — nur danach erstellte Sessions prüfen
  const WORKSHOP_LAUNCH = Math.floor(new Date('2026-02-04T00:00:00Z').getTime() / 1000);
  
  const sessions = await stripe.checkout.sessions
    .list({ 
      status: 'complete', 
      created: { gte: WORKSHOP_LAUNCH },
      expand: ['data.line_items'],
    })
    .autoPagingToArray({ limit: 1000 });

  const count = sessions.filter((session) =>
    session.payment_status === 'paid' &&
    session.line_items?.data.some((item) =>
      item.description?.includes('OpenClaw Deep Dive')
    )
  ).length;
  
  return count + SOLD_OFFSET;
}
