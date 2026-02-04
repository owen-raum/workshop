'use client';

import { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { useTickets } from '@/lib/useTickets';

export function StickyCTABar() {
  const [isVisible, setIsVisible] = useState(false);

  // Ticket data – zentralisiert
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
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="bg-navy-800 border-t border-navy-600 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white text-base sm:text-lg font-medium">
            {ticketsLoading ? (
              <span className="text-navy-300">Lade...</span>
            ) : (
              <>
                Noch <strong className="text-orange-400">{tier.spotsLeft} {tier.label}-Tickets</strong> ({tier.price}€)
              </>
            )}
          </p>
          <Button variant="primary" size="medium" onClick={scrollToPricing}>
            Jetzt sichern
          </Button>
        </div>
      </div>
    </div>
  );
}
