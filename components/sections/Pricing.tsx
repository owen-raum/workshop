'use client';

import { useState } from 'react';
import { TIERS, type TierName } from '@/lib/tiers';
import { useTickets, getCtaText } from '@/lib/useTickets';

const TOTAL_TICKETS = 100;

const TIER_ICONS: Record<TierName, string> = {
  early_frog: '🐸',
  regular: '⚡',
  final: '🎯',
};

export function Pricing() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { tier, soldCount, loading: ticketsLoading } = useTickets();

  const finalTier = TIERS.find((t) => t.name === 'final') ?? TIERS[TIERS.length - 1];
  const savings = !ticketsLoading && finalTier ? Math.max(finalTier.price - tier.price, 0) : 0;
  const progressPercent = ticketsLoading
    ? 0
    : Math.min((soldCount / TOTAL_TICKETS) * 100, 100);

  const currentTierIndex = TIERS.findIndex((t) => t.name === tier.name);

  const badgeText = ticketsLoading
    ? 'Lädt...'
    : tier.name === 'early_frog'
      ? 'Early Frog ist live'
      : tier.name === 'regular'
        ? 'Regular-Preis ist live'
        : 'Letzte Phase';

  const features = [
    'Live-Teilnahme am Deep Dive (90 Min)',
    'Komplette Aufzeichnung zum Nachschauen',
    'Alle Slides und Ressourcen',
    'Fragen stellen während des Deep Dives',
  ];

  const handleBook = async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams(window.location.search);
      const utmParams = {
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
        utm_content: params.get('utm_content') || '',
      };

      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(utmParams),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Checkout konnte nicht erstellt werden');
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Etwas ist schiefgelaufen');
      setLoading(false);
    }
  };

  const getButtonText = () => {
    if (loading) return 'Wird geladen...';
    return getCtaText(tier, false);
  };

  return (
    <section id="pricing" className="w-full py-20 md:py-24 px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-[52px] font-bold text-black mb-4 md:mb-6">
            Dein Platz im Deep Dive
          </h2>
          <p className="reveal text-lg md:text-xl text-gray-600 leading-relaxed">
            Live am 15. Feb · 90 Minuten · Ein Ticket.
          </p>
        </div>

        <div className="reveal bg-white rounded-3xl p-8 md:p-12 mb-8 relative border border-black/10 shadow-[0_30px_90px_-70px_rgba(0,0,0,0.35)]">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white font-semibold text-xs px-4 py-2 rounded-full shadow-md whitespace-nowrap z-10">
            {badgeText}
          </div>

          <div className="mt-6 mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
              {TIERS.map((stepTier, index) => {
                const isPast = index < currentTierIndex;
                const isCurrent = index === currentTierIndex;

                return (
                  <div
                    key={stepTier.name}
                    className={`flex items-center gap-2 ${
                      isCurrent ? 'text-black font-semibold' : 'text-gray-400'
                    }`}
                  >
                    <span className="text-base">{TIER_ICONS[stepTier.name]}</span>
                    <span>{stepTier.label}</span>
                    <span className={isPast ? 'line-through' : ''}>{stepTier.price}€</span>
                    {isPast && <span className="text-xs">(ausgebucht)</span>}
                    {isCurrent && <span className="text-xs">(aktuell)</span>}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mb-10">
            <p className="text-gray-600 font-semibold text-sm md:text-base mb-3">
              🔥 Anmeldung endet am 10. Februar
            </p>
            {ticketsLoading ? (
              <div className="h-20 flex items-center justify-center">
                <span className="inline-block w-44 h-16 rounded shimmer" />
              </div>
            ) : (
              <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-black">
                {tier.price}€
              </div>
            )}
            <div className="text-gray-500 mt-2">einmalig, inkl. MwSt.</div>

            {!ticketsLoading && savings > 0 && (
              <p className="text-sm text-gray-700 mt-3">
                {savings}€ günstiger als der Final-Preis
              </p>
            )}
          </div>

          <div className="mb-10">
            <div className="text-sm text-gray-600 mb-3">
              {ticketsLoading ? (
                <span className="inline-block w-48 h-4 rounded shimmer" />
              ) : (
                `Bereits ${soldCount} Unternehmer:innen dabei`
              )}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-black transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="text-xs text-gray-500 mt-2">{TOTAL_TICKETS} Plätze insgesamt</div>
          </div>

          <ul className="space-y-4 mb-10">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <svg
                  className="w-5 h-5 text-black mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base md:text-lg">{feature}</span>
              </li>
            ))}
          </ul>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm text-center">
              {error}
            </div>
          )}

          <button
            onClick={handleBook}
            disabled={loading || ticketsLoading}
            className={`w-full font-semibold text-lg py-4 px-8 rounded-xl transition-all ${
              loading || ticketsLoading
                ? 'bg-gray-400 text-white cursor-wait'
                : 'bg-black hover:bg-neutral-800 text-white'
            }`}
          >
            {ticketsLoading ? 'Lade Preise...' : getButtonText()}
          </button>

          <div className="mt-4 text-xs text-gray-500 text-center">
            Sichere Zahlung via Stripe · Sofortige Bestätigung · Inkl. Aufzeichnung
          </div>
        </div>
      </div>
    </section>
  );
}
