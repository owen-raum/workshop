'use client';

import { useState, useEffect } from 'react';
import { getTierInfo, type TierInfo } from './tiers';

interface TicketsState {
  soldCount: number;
  tier: TierInfo;
  loading: boolean;
  error: Error | null;
}

// Singleton cache für alle Komponenten
const globalCache: {
  soldCount: number | null;
  timestamp: number;
  promise: Promise<number> | null;
} = {
  soldCount: null,
  timestamp: 0,
  promise: null,
};

const CACHE_TTL = 30_000; // 30 Sekunden

async function fetchTickets(): Promise<number> {
  const now = Date.now();
  
  // Return cached value if fresh
  if (globalCache.soldCount !== null && now - globalCache.timestamp < CACHE_TTL) {
    return globalCache.soldCount;
  }
  
  // Deduplicate concurrent requests
  if (globalCache.promise) {
    return globalCache.promise;
  }
  
  globalCache.promise = fetch('/api/tickets')
    .then((res) => res.json())
    .then((data) => {
      const sold = data.sold ?? 0;
      globalCache.soldCount = sold;
      globalCache.timestamp = Date.now();
      globalCache.promise = null;
      return sold;
    })
    .catch((err) => {
      globalCache.promise = null;
      throw err;
    });
  
  return globalCache.promise;
}

export function useTickets(): TicketsState {
  const [soldCount, setSoldCount] = useState<number>(globalCache.soldCount ?? 0);
  const [loading, setLoading] = useState<boolean>(globalCache.soldCount === null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    
    fetchTickets()
      .then((count) => {
        if (mounted) {
          setSoldCount(count);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err);
          setLoading(false);
        }
      });
    
    return () => {
      mounted = false;
    };
  }, []);

  const tier = getTierInfo(soldCount);

  return { soldCount, tier, loading, error };
}

// Helper für CTA Button Text
export function getCtaText(tier: TierInfo, loading: boolean): string {
  if (loading) return 'Ticket sichern';
  if (tier.name === 'early_frog') return `Early Frog für ${tier.price}€ sichern`;
  if (tier.name === 'regular') return `Jetzt für ${tier.price}€ sichern`;
  return `Letzten Platz für ${tier.price}€ sichern`;
}
