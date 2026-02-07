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

      if (typeof window !== 'undefined') {
        const w = window as typeof window & { fbq?: (...args: unknown[]) => void };
        w.fbq?.('track', 'InitiateCheckout', {
          value: tier.price,
          currency: 'EUR',
          content_name: tier.label,
          content_category: 'ticket',
        });
      }

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
    <section id="pricing" className="w-full py-16 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24 bg-[#F1EFEB]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="reveal font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-black mb-3 md:mb-6">
            Dein Platz im Deep Dive
          </h2>
          <p className="reveal text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Live am 15. Feb · 90 Minuten · Ein Ticket.
          </p>
        </div>

        <div className="reveal bg-[#FDFCFA] rounded-3xl p-6 sm:p-8 md:p-12 mb-8 relative border border-[rgba(34,34,34,0.12)] shadow-[0_35px_120px_-80px_rgba(17,17,17,0.4)]">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white font-semibold text-xs px-4 py-2 rounded-full shadow-md whitespace-nowrap z-10">
            {badgeText}
          </div>

          <div className="mt-8 mb-10">
            <div className="relative">
              <div
                className="hidden sm:block absolute left-6 right-6 top-5 h-px bg-black/10"
                aria-hidden="true"
              />

              <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-0">
                {TIERS.map((stepTier, index) => {
                  const isPast = index < currentTierIndex;
                  const isCurrent = index === currentTierIndex;

                  const labelClass = isCurrent
                    ? 'text-black font-semibold'
                    : isPast
                      ? 'text-gray-500 font-medium'
                      : 'text-gray-400 font-medium';

                  return (
                    <div
                      key={stepTier.name}
                      className={`relative sm:flex-1 sm:px-3 transition-transform ${
                        isCurrent ? 'sm:scale-[1.02]' : ''
                      }`}
                    >
                      <div className="flex items-start gap-4 sm:flex-col sm:items-center sm:gap-3">
                        <div className="flex flex-col items-center">
                          <span
                            className={`flex h-10 w-10 items-center justify-center rounded-full border shadow-sm transition-colors ${
                              isCurrent
                                ? 'border-black/30 bg-black/5'
                                : isPast
                                  ? 'border-black/10 bg-white'
                                  : 'border-black/10 bg-white'
                            }`}
                          >
                            <span
                              className={`h-2.5 w-2.5 rounded-full ${
                                isCurrent ? 'bg-black' : isPast ? 'bg-gray-400' : 'bg-gray-300'
                              }`}
                            />
                          </span>

                          {index !== TIERS.length - 1 && (
                            <span className="mt-2 h-10 w-px bg-black/10 sm:hidden" aria-hidden="true" />
                          )}
                        </div>

                        <div className="flex-1 sm:flex-none sm:text-center">
                          <div className={`flex items-baseline justify-between gap-4 sm:justify-center ${labelClass}`}>
                            <div className="flex items-center gap-2">
                              <span className={`text-sm ${isCurrent ? 'text-black' : 'text-gray-500'}`}>
                                {TIER_ICONS[stepTier.name]}
                              </span>
                              <span className="text-sm sm:text-[15px]">{stepTier.label}</span>
                            </div>

                            <span
                              className={`text-sm sm:text-[15px] tabular-nums ${
                                isPast
                                  ? 'text-gray-400 line-through'
                                  : isCurrent
                                    ? 'text-black'
                                    : 'text-gray-400'
                              }`}
                            >
                              {stepTier.price}€
                            </span>
                          </div>

                          {(isPast || isCurrent) && (
                            <div className={`mt-1 text-xs ${isCurrent ? 'text-gray-600' : 'text-gray-500'}`}>
                              {isPast && <span>(ausgebucht)</span>}
                              {isCurrent && <span>(aktuell)</span>}
                            </div>
                          )}
                          {stepTier.name === 'regular' && (
                            <div className="mt-1.5 text-xs text-gray-500 max-w-[200px] mx-auto leading-snug">
                              Solange verfügbar — bei Ausverkauf gilt der Final-Preis.
                            </div>
                          )}
                          {stepTier.name === 'final' && (
                            <div className="mt-1.5 text-xs text-gray-400 max-w-[220px] mx-auto leading-snug">
                              Greift automatisch, sobald die Regular-Tickets vergriffen sind.
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="text-center mb-10">
            <p className="text-gray-500 text-sm mb-3">
              Anmeldeschluss: 13. Februar 2026
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
                `Bereits ${soldCount} Teilnehmer:innen dabei`
              )}
            </div>
            <div className="w-full bg-black/10 rounded-full h-3">
              <div
                className="h-3 rounded-full bg-gradient-to-r from-gray-800 via-gray-900 to-black transition-all duration-500"
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
