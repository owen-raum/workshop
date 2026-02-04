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
 * Zählt verkaufte "OpenClaw Deep Dive" Tickets aus bezahlten Stripe Checkout Sessions
 */
export async function getSoldTicketsCount(stripe: Stripe): Promise<number> {
  const sessions = await stripe.checkout.sessions.list({
    limit: 100,
    payment_status: 'paid',
    expand: ['data.line_items'],
  });

  return sessions.data.filter((session) =>
    session.line_items?.data.some((item) =>
      item.description?.includes('OpenClaw Deep Dive')
    )
  ).length;
}
