import { NextResponse } from 'next/server';
import { getStripe, getSoldTicketsCount, TOTAL_TICKETS } from '@/lib/stripe';
import { getTierInfo } from '@/lib/tiers';

export async function GET() {
  try {
    const stripe = getStripe();
    const sold = await getSoldTicketsCount(stripe);
    const tier = getTierInfo(sold);

    return NextResponse.json(
      { sold, total: TOTAL_TICKETS, price: tier.price, label: tier.label },
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
