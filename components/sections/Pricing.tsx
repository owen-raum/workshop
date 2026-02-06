'use client';

import { useState } from 'react';
import { formatLaterPrices } from '@/lib/tiers';
import { useTickets, getCtaText } from '@/lib/useTickets';

export function Pricing() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Ticket data – zentralisiert
  const { tier, loading: ticketsLoading } = useTickets();
  const laterPrices = formatLaterPrices(tier.name);

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
      // UTM-Parameter aus URL lesen
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

  // Button Text dynamisch
  const getButtonText = () => {
    if (loading) return 'Wird geladen...';
    return getCtaText(tier, false);
  };

  return (
    <section id="pricing" className="w-full py-20 md:py-24 px-8 md:px-16 lg:px-24 bg-[#F1EFEB]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-[52px] font-bold text-gray-900 mb-4 md:mb-6">
            Was kostet das?
          </h2>
          <p className="reveal text-lg md:text-xl text-gray-600 leading-relaxed">
            Ein Ticket. Der Preis steigt mit der Nachfrage.
          </p>
        </div>

        {/* Single Pricing Card */}
        <div className="reveal bg-white rounded-3xl p-8 md:p-12 mb-8 relative border border-[rgba(34,34,34,0.12)] shadow-[0_35px_120px_-80px_rgba(17,17,17,0.4)]">
          {/* Badge – dynamisch */}
          {ticketsLoading ? (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#111111] text-white font-semibold text-xs px-4 py-2 rounded-full shadow-lg whitespace-nowrap z-10 shimmer">
              Lädt...
            </div>
          ) : (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#111111] text-white font-semibold text-xs px-4 py-2 rounded-full shadow-lg whitespace-nowrap z-10">
              {tier.badge}
            </div>
          )}

          {/* Progress Indicator */}
          <div className="mb-10 mt-6">
            <div className="flex flex-wrap justify-between items-center gap-2 mb-3 text-sm text-gray-600">
              <span className="font-medium">
                {ticketsLoading ? (
                  <span className="inline-block w-32 h-4 rounded shimmer" />
                ) : (
                  `${Math.round(tier.progressPercent)}% dieser Stufe vergeben`
                )}
              </span>
              <span>
                {ticketsLoading ? (
                  <span className="inline-block w-40 h-4 rounded shimmer" />
                ) : (
                  `Noch ${tier.spotsLeft} von ${tier.spotsInTier} verfügbar`
                )}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="h-3 rounded-full bg-gradient-to-r from-gray-800 via-gray-900 to-black transition-all duration-500"
                style={{ width: ticketsLoading ? '0%' : `${tier.progressPercent}%` }}
              />
            </div>
            <p className="text-center text-sm text-gray-600 mt-3">
              {ticketsLoading ? (
                <span className="text-gray-500">Lade Verkaufszahlen...</span>
              ) : (
                <strong className="text-gray-900">
                  {tier.soldInTier} von {tier.spotsInTier} {tier.label}-Tickets verkauft
                </strong>
              )}
            </p>
          </div>

          {/* Current Price – PROMINENT */}
          <div className="text-center mb-6">
            <p className="text-gray-700 font-semibold text-sm md:text-base mb-4">
              🔥 Anmeldung endet am 10. Februar
            </p>
            {ticketsLoading ? (
              <div className="h-24 flex items-center justify-center">
                <span className="inline-block w-44 h-20 rounded shimmer" />
              </div>
            ) : (
              <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
                {tier.price}€
              </div>
            )}
            <div className="text-gray-500 mt-2 mb-4">einmalig, inkl. MwSt.</div>
            {/* Later prices – dynamisch */}
            {!ticketsLoading && laterPrices && (
              <div className="mt-3 pt-3 border-t border-[rgba(34,34,34,0.08)]">
                <p className="text-sm text-gray-600">
                  Ab Stufe 2: <span className="font-semibold text-gray-900">{laterPrices}</span>
                </p>
              </div>
            )}
          </div>

          {/* Features */}
          <ul className="space-y-4 mb-10">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <svg
                  className="w-5 h-5 text-gray-800 mt-0.5 flex-shrink-0"
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

          {/* Error */}
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm text-center">
              {error}
            </div>
          )}

          {/* CTA */}
          <button
            onClick={handleBook}
            disabled={loading || ticketsLoading}
            className={`w-full font-semibold text-lg py-4 px-8 rounded-xl transition-all ${
              loading || ticketsLoading
                ? 'bg-gray-400 text-white cursor-wait'
                : 'bg-[#111111] hover:bg-[#1a1a1a] text-white'
            }`}
          >
            {ticketsLoading ? 'Lade Preise...' : getButtonText()}
          </button>
        </div>

        {/* Trust Badges */}
        <div className="reveal flex flex-wrap justify-center gap-12 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span>Sichere Zahlung via Stripe</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span>Inkl. Aufzeichnung</span>
          </div>
        </div>
      </div>
    </section>
  );
}
