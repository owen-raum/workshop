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
      <div className="bg-[#F1EFEB]/95 border-t border-[rgba(34,34,34,0.12)] backdrop-blur-md shadow-[0_-12px_40px_-20px_rgba(17,17,17,0.4)]">
        <div className="max-w-[1300px] mx-auto px-4 md:px-16 lg:px-24 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            {ticketsLoading ? (
              <p className="text-sm text-gray-500">Lade...</p>
            ) : (
              <>
                <p className="text-sm sm:text-base font-semibold text-gray-900">
                  Noch {tier.spotsLeft} {tier.label}-Tickets
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  {tier.price}€ inkl. MwSt
                </p>
              </>
            )}
          </div>
          <Button variant="primary" size="medium" onClick={scrollToPricing}>
            Jetzt sichern
          </Button>
        </div>
      </div>
    </div>
  );
}
