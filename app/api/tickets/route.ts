import { NextResponse } from 'next/server';
import { getStripe, getSoldTicketsCount } from '@/lib/stripe';
import { getTierInfo } from '@/lib/tiers';

export async function GET() {
  try {
    const stripe = getStripe();
    const sold = await getSoldTicketsCount(stripe);
    const tier = getTierInfo(sold);

    return NextResponse.json(
      { price: tier.price, label: tier.label },
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
      { price: 199, label: 'Early Frog' },
      { status: 200 }
    );
  }
}
