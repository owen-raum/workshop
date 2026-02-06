'use client';

import { useEffect, useState } from 'react';
import { useTickets } from '@/lib/useTickets';
import { Sparkles } from 'lucide-react';

export function StickyCTABar() {
  const [isVisible, setIsVisible] = useState(false);
  const { tier, loading: ticketsLoading } = useTickets();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      const pricingSection = document.getElementById('pricing');

      if (!heroSection) return;

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight;

      const isPastHero = window.scrollY > heroBottom;

      let isPricingVisible = false;
      if (pricingSection) {
        const pricingTop = pricingSection.offsetTop;
        const pricingBottom = pricingTop + pricingSection.offsetHeight;
        isPricingVisible =
          scrollPosition > pricingTop - 100 && window.scrollY < pricingBottom;
      }

      setIsVisible(isPastHero && !isPricingVisible);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="glass-strong border-t border-white/10 backdrop-blur-2xl shadow-[0_-20px_60px_-20px_rgba(59,130,246,0.4)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            {ticketsLoading ? (
              <p className="text-sm text-gray-500 shimmer">Lade...</p>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <p className="text-sm font-bold text-white">
                    Noch {tier.spotsLeft} {tier.label}-Tickets verfügbar
                  </p>
                </div>
                <p className="text-sm text-gray-400">
                  <span className="text-white font-bold">{tier.price}€</span> inkl. MwSt
                </p>
              </>
            )}
          </div>
          <button
            onClick={scrollToPricing}
            className="px-8 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)'
            }}
          >
            <Sparkles className="w-4 h-4" />
            Jetzt sichern
          </button>
        </div>
      </div>
    </div>
  );
}
