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
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
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
    <section id="pricing" className="py-32 lg:py-40 px-4 bg-navy-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
            Was kostet das?
          </h2>
          <p className="text-xl md:text-2xl text-navy-700 leading-relaxed">
            Ein Ticket. Der Preis steigt mit der Nachfrage.
          </p>
        </div>

        {/* Single Pricing Card */}
        <div className="bg-white rounded-2xl p-8 md:p-14 mb-10 relative mt-8 border-2 border-orange-400 shadow-2xl shadow-orange-200/50">
          {/* Badge – dynamisch */}
          {ticketsLoading ? (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-navy-300 text-white font-bold text-sm px-5 py-2 rounded-full shadow-lg whitespace-nowrap z-10 animate-pulse">
              Lädt...
            </div>
          ) : (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-sm px-5 py-2 rounded-full shadow-lg whitespace-nowrap z-10">
              {tier.badge}
            </div>
          )}

          {/* Current Price – PROMINENT */}
          <div className="text-center mb-4 mt-4">
            <p className="text-orange-600 font-bold text-lg mb-4 flex items-center justify-center gap-2">
              🔥 Anmeldung endet am 10. Februar
            </p>
            {ticketsLoading ? (
              <div className="h-24 flex items-center justify-center">
                <span className="inline-block w-40 h-20 bg-navy-200 rounded animate-pulse" />
              </div>
            ) : (
              <div className="font-display text-7xl md:text-8xl font-bold text-navy-900">
                {tier.price}€
              </div>
            )}
            <div className="text-navy-600 mt-2 mb-4">einmalig, inkl. MwSt.</div>
            {/* Later prices – dynamisch */}
            {!ticketsLoading && laterPrices && (
              <div className="text-sm text-navy-500">Später: {laterPrices}</div>
            )}
          </div>

          {/* Features */}
          <ul className="space-y-4 mb-10">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-navy-800">
                <svg
                  className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0"
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
                <span className="text-lg">{feature}</span>
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
            className={`w-full font-bold text-lg py-4 px-8 rounded-xl transition-all ${
              loading || ticketsLoading
                ? 'bg-navy-400 text-white cursor-wait'
                : 'bg-navy-600 hover:bg-navy-700 text-white shadow-lg hover:shadow-xl'
            }`}
          >
            {ticketsLoading ? 'Lade Preise...' : getButtonText()}
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-navy-700">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-orange-600"
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
              className="w-5 h-5 text-orange-600"
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
