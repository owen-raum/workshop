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
      <div className="relative z-10 w-full min-h-[88vh] flex items-center">
        <div className="w-full max-w-[800px] mx-auto px-6 py-20 lg:py-24 text-center">
          
          {/* Date & Time */}
          <p className="text-[14px] font-medium text-[#737373] mb-2">
            Sonntag, 15. Februar 2026 · 19:00 Uhr (CET)
          </p>

          {/* Tagline */}
          <p className="text-[12px] text-[#a3a3a3] mb-12">
            Der OpenClaw Production Deep Dive
          </p>

          {/* Headline */}
          <h1 className="text-[40px] sm:text-[50px] md:text-[62px] font-bold leading-[1.1] tracking-[-0.02em] text-black mb-6">
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
          <p className="text-[19px] leading-[1.6] text-[#525252] mb-10 max-w-[580px] mx-auto">
            90 Minuten Deep Dive in OpenClaw – mein echtes Agent-Setup. Du siehst mein Setup, die Prompts, die Fails. Am Ende weißt du genau, ob das für dein Business & Privatleben Sinn macht – oder eben nicht.
          </p>

          {/* CTA + Badge Row */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-6">
            <button
              onClick={scrollToPricing}
              className="bg-black hover:bg-[#1a1a1a] text-white text-[16px] font-semibold py-4 px-8 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
            >
              {getCtaText(tier, ticketsLoading)}
            </button>
            
            {/* Made by Badge */}
            <div className="flex items-center gap-2 bg-[#FAFAFA] border border-[#e5e5e5] rounded-full py-1.5 px-3">
              <img 
                src="/andy.jpg" 
                alt="Andy Steinberger" 
                className="w-5 h-5 rounded-full border border-[#e5e5e5] object-cover"
              />
              <div className="flex items-center gap-1">
                <span className="text-[13px] text-[#525252]">Hosted by</span>
                <span className="text-[13px] font-semibold text-black">Andy</span>
                <BadgeCheck className="w-3.5 h-3.5 text-[#1d9bf0]" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Price + Ticket Info */}
          <div className="flex flex-wrap justify-center items-baseline gap-x-2">
            <span className="text-[16px] font-bold text-black">
              {ticketsLoading ? '...' : `${tier.price}€`}
            </span>
            <span className="text-[13px] text-[#a3a3a3]">inkl. MwSt</span>
            {!ticketsLoading && (
              <>
                <span className="text-[13px] text-[#d4d4d4] mx-1">·</span>
                <span className="text-[13px] font-semibold text-[#DC2626]">
                  Noch {tier.spotsLeft} {tier.label} Tickets
                </span>
                {nextTiers.length > 0 && (
                  <span className="text-[13px] text-[#a3a3a3]">– danach {nextTiers[0].price}€</span>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
