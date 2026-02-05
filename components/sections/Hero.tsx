'use client';

import { useTickets, getCtaText } from '@/lib/useTickets';
import { BadgeCheck } from 'lucide-react';

export function Hero() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const { tier, loading: ticketsLoading } = useTickets();

  return (
    <section className="relative bg-[#F1EFEB]">
      <div className="relative z-10 w-full min-h-[85vh] flex items-center">
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 py-20 lg:py-28">
          
          <div className="grid lg:grid-cols-[1fr,1fr] gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div>
              {/* Tagline */}
              <p className="reveal text-base text-gray-500 mb-5">
                Der OpenClaw Production Deep Dive
              </p>

              {/* Headline */}
              <h1 className="reveal font-display text-[40px] md:text-[52px] lg:text-[58px] font-bold leading-[1.1] tracking-tight text-gray-900 mb-6">
                Ein AI-Agent, der wirklich{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">arbeitet</span>
                  <span className="absolute bottom-1 left-0 right-0 h-[0.35em] bg-[#bde0fe] -z-0" />
                </span>
                .
              </h1>

              {/* Subline */}
              <p className="reveal text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                Was passiert, wenn dein Agent nicht nur antwortet – sondern handelt. Kein Hype, nur ein echtes Production-Setup.
              </p>

              {/* CTA + Made by Badge Row */}
              <div className="reveal flex flex-wrap items-center gap-4 mb-5">
                <button
                  onClick={scrollToPricing}
                  className="bg-[#1a1a2e] hover:bg-[#16162a] text-white font-medium text-base py-3.5 px-7 rounded-lg transition-all"
                >
                  {getCtaText(tier, ticketsLoading)}
                </button>
                
                {/* Made by Badge */}
                <div className="flex items-center gap-2.5">
                  <img 
                    src="https://pbs.twimg.com/profile_images/1866609988105875456/HJm2D8qc_400x400.jpg" 
                    alt="Andy Steinberger"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-gray-500">Made by</span>
                    <span className="text-sm font-semibold text-gray-900">Andy</span>
                    <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-500" />
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="reveal flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  {ticketsLoading ? '...' : `${tier.price}€`}
                </span>
                <span className="text-sm text-gray-500">inkl. MwSt</span>
              </div>
            </div>

            {/* Right: Illustration Placeholder */}
            <div className="reveal hidden lg:flex justify-center items-center">
              <svg 
                viewBox="0 0 400 300" 
                className="w-full max-w-[420px] h-auto opacity-60"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
              >
                {/* Abstract tech/agent illustration */}
                <rect x="40" y="60" width="80" height="50" rx="4" className="text-gray-400" />
                <rect x="140" y="40" width="60" height="35" rx="4" className="text-gray-400" />
                <rect x="140" y="85" width="60" height="35" rx="4" className="text-gray-400" />
                <rect x="220" y="55" width="70" height="40" rx="4" className="text-gray-400" />
                <rect x="310" y="45" width="50" height="30" rx="4" className="text-gray-400" />
                <rect x="310" y="85" width="50" height="30" rx="4" className="text-gray-400" />
                
                {/* Connection lines */}
                <path d="M120 85 L140 75" className="text-gray-300" />
                <path d="M120 85 L140 100" className="text-gray-300" />
                <path d="M200 57 L220 70" className="text-gray-300" />
                <path d="M200 102 L220 85" className="text-gray-300" />
                <path d="M290 75 L310 60" className="text-gray-300" />
                <path d="M290 75 L310 100" className="text-gray-300" />
                
                {/* Circles */}
                <circle cx="80" cy="180" r="28" className="text-gray-400" />
                <circle cx="160" cy="190" r="24" className="text-gray-400" />
                <circle cx="230" cy="185" r="26" className="text-gray-400" />
                
                {/* More abstract shapes */}
                <rect x="280" y="160" width="70" height="45" rx="6" className="text-gray-400" />
                <path d="M350 182 Q 380 160, 370 200" className="text-gray-300" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
