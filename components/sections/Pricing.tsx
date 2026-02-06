'use client';

import { useState } from 'react';
import { formatLaterPrices } from '@/lib/tiers';
import { useTickets, getCtaText } from '@/lib/useTickets';
import { Check, Shield, Video, Sparkles, TrendingUp } from 'lucide-react';

export function Pricing() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { tier, loading: ticketsLoading } = useTickets();
  const laterPrices = formatLaterPrices(tier.name);

  const features = [
    { text: 'Live-Teilnahme am Deep Dive (90 Min)', icon: Sparkles },
    { text: 'Komplette Aufzeichnung zum Nachschauen', icon: Video },
    { text: 'Alle Slides und Ressourcen', icon: Check },
    { text: 'Fragen stellen während des Deep Dives', icon: Check },
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
    <section id="pricing" className="relative w-full section-padding bg-[#050505] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
      
      <div className="relative z-10 container-custom">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">Was kostet das</span>
            <span className="gradient-text-2">?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
            Ein Ticket. Der Preis steigt mit der Nachfrage.
          </p>
        </div>

        {/* Pricing Card - Gradient Border */}
        <div className="reveal-scale max-w-2xl mx-auto">
          <div className="gradient-border p-[2px] rounded-3xl relative overflow-hidden">
            <div className="relative bg-[#111111] rounded-3xl p-10 md:p-14">
              {/* Floating Badge */}
              {ticketsLoading ? (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 glass-strong px-6 py-3 rounded-full z-20 shimmer">
                  <span className="text-sm font-bold text-white">Lädt...</span>
                </div>
              ) : (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full z-20 shadow-2xl" style={{
                  background: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)'
                }}>
                  <span className="text-sm font-bold text-white">{tier.badge}</span>
                </div>
              )}

              {/* Progress Bar */}
              <div className="mt-8 mb-10">
                <div className="flex justify-between items-center mb-3 text-sm">
                  <span className="text-gray-400">
                    {ticketsLoading ? (
                      <span className="inline-block w-32 h-4 rounded shimmer" />
                    ) : (
                      `${Math.round(tier.progressPercent)}% dieser Stufe vergeben`
                    )}
                  </span>
                  <span className="text-gray-500">
                    {ticketsLoading ? (
                      <span className="inline-block w-40 h-4 rounded shimmer" />
                    ) : (
                      `${tier.spotsLeft} von ${tier.spotsInTier} verfügbar`
                    )}
                  </span>
                </div>
                
                {/* Animated Progress Bar */}
                <div className="relative w-full h-3 bg-gray-900 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: ticketsLoading ? '0%' : `${tier.progressPercent}%`,
                      background: 'linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)'
                    }}
                  />
                </div>
                
                <p className="text-center text-sm text-gray-500 mt-3">
                  {ticketsLoading ? (
                    <span className="shimmer inline-block w-56 h-4 rounded" />
                  ) : (
                    <>
                      <span className="text-white font-bold">{tier.soldInTier}</span> von {tier.spotsInTier} {tier.label}-Tickets verkauft
                    </>
                  )}
                </p>
              </div>

              {/* Price Section */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-red-500" />
                  <span className="text-red-400 font-bold text-sm">Anmeldung endet am 10. Februar</span>
                </div>
                
                {ticketsLoading ? (
                  <div className="h-32 flex items-center justify-center">
                    <span className="inline-block w-56 h-24 rounded-2xl shimmer" />
                  </div>
                ) : (
                  <div className="relative inline-block">
                    <div className="text-7xl md:text-8xl font-black gradient-text mb-2">
                      {tier.price}€
                    </div>
                    <div className="text-gray-500 text-sm">einmalig, inkl. MwSt.</div>
                  </div>
                )}
                
                {!ticketsLoading && laterPrices && (
                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <p className="text-sm text-gray-400">
                      Ab Stufe 2: <span className="text-white font-bold">{laterPrices}</span>
                    </p>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <li key={index} className="flex items-start gap-4 text-gray-300">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                        <Icon className="w-5 h-5 text-blue-400" strokeWidth={2} />
                      </div>
                      <span className="text-lg pt-1">{feature.text}</span>
                    </li>
                  );
                })}
              </ul>

              {/* Error */}
              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm text-center">
                  {error}
                </div>
              )}

              {/* CTA Button */}
              <button
                onClick={handleBook}
                disabled={loading || ticketsLoading}
                className={`w-full text-xl font-black py-6 px-10 rounded-2xl transition-all duration-300 ${
                  loading || ticketsLoading
                    ? 'bg-gray-700 text-gray-500 cursor-wait'
                    : 'text-white hover:scale-[1.02] hover:shadow-2xl pulse-glow'
                }`}
                style={{
                  background: loading || ticketsLoading ? undefined : 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)'
                }}
              >
                {ticketsLoading ? 'Lade Preise...' : getButtonText()}
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="reveal flex flex-wrap justify-center gap-8 mt-12 text-sm text-gray-500">
          <div className="flex items-center gap-3 glass px-6 py-3 rounded-full">
            <Shield className="w-5 h-5 text-green-400" />
            <span>Sichere Zahlung via Stripe</span>
          </div>
          <div className="flex items-center gap-3 glass px-6 py-3 rounded-full">
            <Video className="w-5 h-5 text-blue-400" />
            <span>Inkl. Aufzeichnung</span>
          </div>
        </div>
      </div>
    </section>
  );
}
