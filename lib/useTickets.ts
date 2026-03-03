'use client';

import { useState, useEffect } from 'react';
import { TIERS, type TierInfo, type TierName } from './tiers';

interface TicketsState {
  tier: TierInfo;
  loading: boolean;
  error: Error | null;
}

// Singleton cache für alle Komponenten
const globalCache: {
  tier: { price: number; label: string } | null;
  timestamp: number;
  promise: Promise<{ price: number; label: string }> | null;
} = {
  tier: null,
  timestamp: 0,
  promise: null,
};

const CACHE_TTL = 30_000; // 30 Sekunden

async function fetchTier(): Promise<{ price: number; label: string }> {
  const now = Date.now();
  
  // Return cached value if fresh
  if (globalCache.tier !== null && now - globalCache.timestamp < CACHE_TTL) {
    return globalCache.tier;
  }
  
  // Deduplicate concurrent requests
  if (globalCache.promise) {
    return globalCache.promise;
  }
  
  globalCache.promise = fetch('/api/tickets')
    .then((res) => res.json())
    .then((data) => {
      const tier = { price: data.price ?? 199, label: data.label ?? 'Early Frog' };
      globalCache.tier = tier;
      globalCache.timestamp = Date.now();
      globalCache.promise = null;
      return tier;
    })
    .catch((err) => {
      globalCache.promise = null;
      throw err;
    });
  
  return globalCache.promise;
}

function buildTierInfo(apiTier: { price: number; label: string }): TierInfo {
  // Find matching tier from TIERS config
  const tier = TIERS.find((t) => t.price === apiTier.price) ?? TIERS[0];
  
  return {
    name: tier.name,
    label: tier.label,
    badge: tier.badge,
    price: tier.price,
    priceCents: tier.priceCents,
    originalPrice: tier.originalPrice,
    skipped: tier.skipped,
    spotsInTier: tier.end - tier.start,
    spotsLeft: 5, // Placeholder - not exposed
    soldInTier: 0, // Not exposed
    progressPercent: 50, // Placeholder
    tierStart: tier.start,
    tierEnd: tier.end,
  };
}

const defaultTier = buildTierInfo({ price: 199, label: 'Early Frog' });

export function useTickets(): TicketsState {
  const [tier, setTier] = useState<TierInfo>(
    globalCache.tier ? buildTierInfo(globalCache.tier) : defaultTier
  );
  const [loading, setLoading] = useState<boolean>(globalCache.tier === null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    
    fetchTier()
      .then((apiTier) => {
        if (mounted) {
          setTier(buildTierInfo(apiTier));
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

  return { tier, loading, error };
}

// Helper für CTA Button Text
export function getCtaText(tier: TierInfo, loading: boolean): string {
  if (loading) return 'Jetzt Platz sichern';
  return 'Jetzt Platz sichern';
}
