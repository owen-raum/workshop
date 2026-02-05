'use client';

import { useTickets, getCtaText } from '@/lib/useTickets';
import { BadgeCheck } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const { tier, loading: ticketsLoading } = useTickets();

  return (
    <section className="relative bg-[#F1EFEB] overflow-hidden">
      <div className="relative z-10 w-full min-h-[85vh] flex items-center">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 lg:px-16 py-16 lg:py-20">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="max-w-[520px]">
              {/* Tagline */}
              <p className="text-[15px] text-[#666] mb-4">
                Der OpenClaw Production Deep Dive
              </p>

              {/* Headline */}
              <h1 className="text-[36px] sm:text-[42px] md:text-[48px] font-bold leading-[1.12] tracking-[-0.02em] text-[#111] mb-5">
                Ein AI-Agent, der wirklich{' '}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10">arbeitet</span>
                  <svg 
                    className="absolute -bottom-0.5 left-0 w-full h-[0.35em] -z-10" 
                    viewBox="0 0 200 12" 
                    preserveAspectRatio="none"
                  >
                    <rect x="0" y="2" width="200" height="10" rx="2" fill="#b8d4e8" fillOpacity="0.7" />
                  </svg>
                </span>
                .
              </h1>

              {/* Subline */}
              <p className="text-[17px] leading-[1.7] text-[#555] mb-8">
                Was passiert, wenn dein Agent nicht nur antwortet – sondern handelt. Kein Hype, nur ein echtes Production-Setup.
              </p>

              {/* CTA + Badge Row */}
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <button
                  onClick={scrollToPricing}
                  className="bg-[#1a1a2e] hover:bg-[#12121f] text-white text-[15px] font-medium py-3.5 px-7 rounded-lg transition-colors shadow-sm"
                >
                  {getCtaText(tier, ticketsLoading)}
                </button>
                
                {/* Made by Badge */}
                <div className="flex items-center gap-2.5 pl-1">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center shadow-sm">
                    <span className="text-white text-sm font-semibold">AS</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[14px] text-[#666]">Made by</span>
                    <span className="text-[14px] font-semibold text-[#111]">Andy</span>
                    <BadgeCheck className="w-4 h-4 text-[#1d9bf0]" strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-[24px] font-bold text-[#111]">
                  {ticketsLoading ? '...' : `${tier.price}€`}
                </span>
                <span className="text-[14px] text-[#888]">inkl. MwSt</span>
              </div>
            </div>

            {/* Right: Product Screenshot */}
            <div className="hidden lg:block">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[rgba(0,0,0,0.08)]">
                <Image
                  src="/owen-demo.jpg"
                  alt="OpenClaw in Aktion"
                  width={580}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
