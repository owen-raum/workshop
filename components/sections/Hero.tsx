'use client';

import { useTickets, getCtaText } from '@/lib/useTickets';
import { getNextTiers } from '@/lib/tiers';
import { BadgeCheck } from 'lucide-react';

export function Hero() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const { tier, loading: ticketsLoading } = useTickets();
  const nextTiers = getNextTiers(tier.name);

  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Prism wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.65]"
        style={{ backgroundImage: 'var(--prism-gradient)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(167,139,250,0.22), transparent 55%), radial-gradient(circle at 70% 40%, rgba(103,232,249,0.18), transparent 60%), radial-gradient(circle at 55% 70%, rgba(251,191,36,0.18), transparent 62%)',
        }}
      />

      <div className="relative z-10 w-full min-h-[88vh] flex items-center">
        <div className="w-full max-w-[860px] mx-auto px-6 pt-28 pb-20 md:pt-32 lg:pt-36 lg:pb-24 text-center">
          
          {/* Date & Time */}
          <p className="text-sm font-medium text-gray-600 mb-8">
            Sonntag, 15. Februar 2026 · 19:00 Uhr (CET)
          </p>

          {/* Headline */}
          <h1 className="font-display text-[44px] sm:text-[52px] md:text-[62px] lg:text-[68px] font-bold leading-[1.05] tracking-[-0.04em] text-black mb-6">
            Mein AI-Agent Owen hat letzte Woche{' '}
            <span className="prism-underline font-extrabold">14 Stunden</span>
            {' '}Arbeit übernommen. Ich zeige dir wie.
          </h1>

          {/* Subline */}
          <p className="text-lg leading-[1.6] text-[#525252] mb-10 max-w-[580px] mx-auto">
            90 Minuten Deep Dive in OpenClaw – mein echtes Agent-Setup. Du siehst mein Setup, die Prompts, die Fails. Am Ende weißt du genau, ob das für dein Business & Privatleben Sinn macht – oder eben nicht.
          </p>

          {/* CTA + Badge Row */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-6">
            <button
              onClick={scrollToPricing}
              className="prism-button bg-black hover:bg-[#1a1a1a] text-white text-base font-semibold py-4 px-8 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-18px_rgba(17,17,17,0.55)] shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
            >
              {getCtaText(tier, ticketsLoading)}
            </button>
            
            {/* Made by Badge */}
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="/andy.jpg" 
                alt="Andy Steinberger" 
                className="w-5 h-5 rounded-full border border-[#e5e5e5] object-cover"
              />
              <div className="flex items-center gap-1">
                <span className="text-sm text-[#525252]">Hosted by</span>
                <span className="text-sm font-semibold text-black">Andy</span>
                <BadgeCheck className="w-3.5 h-3.5 text-[#1d9bf0]" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Price + Ticket Info */}
          <div className="space-y-2 text-center">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-xl font-bold text-gray-900">
                {ticketsLoading ? '...' : `${tier.price}€`}
              </span>
              <span className="text-sm text-gray-500">inkl. MwSt</span>
            </div>
            {!ticketsLoading && (
              <div className="text-sm">
                <span className="font-semibold text-red-600">Noch {tier.spotsLeft} {tier.label} Tickets</span>
                {nextTiers.length > 0 && (
                  <span className="text-gray-500"> – danach {nextTiers[0].price}€</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
