import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const TOTAL_TICKETS = 100;

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2026-01-28.clover',
  });
}

export async function GET() {
  try {
    const stripe = getStripe();
    
    // Fetch only paid checkout sessions with line items
    const sessions = await stripe.checkout.sessions.list({
      limit: 100,
      payment_status: 'paid',
      expand: ['data.line_items'],
    });
    
    // Count only sessions for our product
    const sold = sessions.data.filter((session) =>
      session.line_items?.data.some((item) =>
        item.description?.includes('OpenClaw Deep Dive')
      )
    ).length;

    return NextResponse.json(
      { sold, total: TOTAL_TICKETS },
      {
        headers: {
          'Cache-Control': 's-maxage=60, stale-while-revalidate=300',
        },
      }
    );
  } catch (error) {
    console.error('Tickets API error:', error);
    
    // Graceful fallback
    return NextResponse.json(
      { sold: 0, total: TOTAL_TICKETS },
      { status: 200 } // Still 200 to not break the frontend
    );
  }
}
