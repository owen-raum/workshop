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
    <section className="relative bg-[#F1EFEB]">
      <div className="relative z-10 w-full min-h-[calc(100svh-70px)] md:min-h-[88vh] flex items-center">
        <div className="w-full max-w-[800px] mx-auto px-5 sm:px-6 py-12 sm:py-16 lg:py-24 text-center">
          
          {/* Date & Price Row — Mobile: always visible above fold */}
          <div className="flex items-center justify-center gap-3 mb-5 sm:mb-8">
            <span className="text-sm font-medium text-gray-600">
              15. Feb 2026 · 19:00
            </span>
            <span className="w-px h-4 bg-gray-300" />
            <span className="text-sm font-bold text-gray-900">
              {ticketsLoading ? '...' : `ab ${tier.price}€`}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[68px] font-bold leading-[1.1] tracking-[-0.02em] text-black mb-4 sm:mb-6">
            Mein AI-Agent Owen hat letzte Woche{' '}
            <span 
              className="relative inline-block font-extrabold"
              style={{
                background: 'linear-gradient(180deg, transparent 60%, #FFE066 60%, #FFE066 90%, transparent 90%)',
                padding: '0 4px',
              }}
            >
              14 Stunden
            </span>
            {' '}Arbeit übernommen. Ich zeige dir wie.
          </h1>

          {/* Subline */}
          <p className="text-base sm:text-lg leading-[1.6] text-[#525252] mb-6 sm:mb-10 max-w-[580px] mx-auto">
            90 Minuten Deep Dive in OpenClaw – mein echtes Agent-Setup. Du siehst mein Setup, die Prompts, die Fails. Am Ende weißt du genau, ob das für dein Business & Privatleben Sinn macht – oder eben nicht.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <button
              onClick={scrollToPricing}
              className="w-full sm:w-auto bg-black hover:bg-[#1a1a1a] text-white text-base font-semibold py-4 px-8 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
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

          {/* Ticket urgency */}
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
    </section>
  );
}
