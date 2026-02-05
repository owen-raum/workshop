'use client';

import { useEffect, useState } from 'react';
import { useTickets, getCtaText } from '@/lib/useTickets';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { tier, loading: ticketsLoading } = useTickets();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f1efeb]/95 backdrop-blur-md border-b border-[rgba(34,34,34,0.12)]'
          : 'bg-[#f1efeb]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Text */}
        <a
          href="#"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="font-display text-lg font-semibold text-gray-900">Andy Steinberger</span>
          <span className="text-gray-600 text-sm font-medium hidden sm:inline">× OpenClaw Deep Dive</span>
        </a>

        {/* CTA Button */}
        <button
          onClick={scrollToPricing}
          className="px-5 py-2.5 text-sm font-display font-semibold bg-[#111111] hover:bg-[#1a1a1a] text-white rounded-lg transition-colors"
        >
          {getCtaText(tier, ticketsLoading)}
        </button>
      </div>
    </header>
  );
}
