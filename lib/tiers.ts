// Tier-Konfiguration – einzige Quelle der Wahrheit
export const TIERS = [
  { name: 'early_frog', label: 'Early Frog', badge: '🐸 EARLY FROG', price: 149, priceCents: 14900, start: 0, end: 10 },
  { name: 'regular', label: 'Regular', badge: '⚡ REGULAR', price: 199, priceCents: 19900, start: 10, end: 50 },
  { name: 'final', label: 'Final', badge: '🎯 FINAL TICKETS', price: 249, priceCents: 24900, start: 50, end: 100 },
] as const;

export type TierName = (typeof TIERS)[number]['name'];

export interface TierInfo {
  name: TierName;
  label: string;
  badge: string;
  price: number;
  priceCents: number;
  spotsInTier: number;
  spotsLeft: number;
  soldInTier: number;
  progressPercent: number;
  tierStart: number;
  tierEnd: number;
}

export function getTierInfo(sold: number): TierInfo {
  // Finde aktuelle Tier
  const tier = TIERS.find((t) => sold >= t.start && sold < t.end) ?? TIERS[TIERS.length - 1];
  
  const spotsInTier = tier.end - tier.start;
  const soldInTier = Math.max(0, Math.min(sold - tier.start, spotsInTier));
  const spotsLeft = Math.max(0, tier.end - sold);
  const progressPercent = Math.min((soldInTier / spotsInTier) * 100, 100);

  return {
    name: tier.name,
    label: tier.label,
    badge: tier.badge,
    price: tier.price,
    priceCents: tier.priceCents,
    spotsInTier,
    spotsLeft,
    soldInTier,
    progressPercent,
    tierStart: tier.start,
    tierEnd: tier.end,
  };
}

export function getNextTiers(currentTierName: TierName): typeof TIERS[number][] {
  const currentIndex = TIERS.findIndex((t) => t.name === currentTierName);
  return TIERS.slice(currentIndex + 1);
}

export function formatLaterPrices(currentTierName: TierName): string {
  const next = getNextTiers(currentTierName);
  if (next.length === 0) return '';
  
  return next
    .map((t) => `${t.price}€ inkl. MwSt (Platz ${t.start + 1}–${t.end})`)
    .join(' / ');
}
