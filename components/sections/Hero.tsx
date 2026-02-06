'use client';

import { useTickets, getCtaText } from '@/lib/useTickets';
import { getNextTiers } from '@/lib/tiers';
import { BadgeCheck, Sparkles, Calendar } from 'lucide-react';

export function Hero() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const { tier, loading: ticketsLoading } = useTickets();
  const nextTiers = getNextTiers(tier.name);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient-bg">
      {/* Floating Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl floating" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl floating" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full opacity-5 blur-3xl floating" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-32 text-center">
        
        {/* Date Badge */}
        <div className="reveal inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8">
          <Calendar className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium text-gray-300">
            Sonntag, 15. Februar 2026 · 19:00 Uhr (CET)
          </span>
        </div>

        {/* Main Headline - Massive & Gradient */}
        <h1 className="reveal text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tighter mb-8">
          <span className="block text-white mb-2">Mein AI-Agent Owen</span>
          <span className="block text-white mb-2">hat letzte Woche</span>
          <span className="block gradient-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            14 Stunden
          </span>
          <span className="block text-white mt-2">Arbeit übernommen.</span>
          <span className="block text-gray-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 font-bold">
            Ich zeige dir wie.
          </span>
        </h1>

        {/* Subline */}
        <p className="reveal text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 mb-12 max-w-[800px] mx-auto">
          90 Minuten Deep Dive in OpenClaw – mein echtes Agent-Setup. Du siehst mein Setup, die Prompts, die Fails. 
          Am Ende weißt du genau, ob das für dein Business & Privatleben Sinn macht – oder eben nicht.
        </p>

        {/* CTA + Badge Row */}
        <div className="reveal flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 mb-10">
          {/* Primary CTA - Gradient Button */}
          <button
            onClick={scrollToPricing}
            className="group relative px-10 py-5 text-lg font-bold text-white rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl pulse-glow"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)'
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              {getCtaText(tier, ticketsLoading)}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          {/* Host Badge - Glassmorphism */}
          <div className="glass-strong flex items-center gap-3 rounded-2xl py-3 px-6 hover:scale-105 transition-transform duration-300">
            <img 
              src="/andy.jpg" 
              alt="Andy Steinberger" 
              className="w-10 h-10 rounded-full border-2 border-blue-400/50 object-cover"
            />
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Hosted by</span>
              <span className="text-sm font-bold text-white">Andy Steinberger</span>
              <BadgeCheck className="w-4 h-4 text-blue-400" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Price Card - Glassmorphism */}
        <div className="reveal-scale glass-strong max-w-md mx-auto rounded-3xl p-8 backdrop-blur-xl">
          <div className="flex flex-col items-center gap-3">
            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black gradient-text">
                {ticketsLoading ? '...' : `${tier.price}€`}
              </span>
              <span className="text-sm text-gray-500">inkl. MwSt</span>
            </div>
            
            {/* Ticket Info */}
            {!ticketsLoading && (
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full mb-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-red-400">
                    Noch {tier.spotsLeft} {tier.label} Tickets
                  </span>
                </div>
                {nextTiers.length > 0 && (
                  <p className="text-sm text-gray-500">
                    danach <span className="text-white font-semibold">{nextTiers[0].price}€</span>
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
          <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gray-600 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
