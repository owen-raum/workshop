import { useEffect, useState } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-transparent'
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
          <span className="font-display text-lg font-bold text-slate-900">Andy Steinberger</span>
          <span className="text-slate-400 text-sm font-medium hidden sm:inline">× OpenClaw Deep Dive</span>
        </a>

        {/* CTA Button */}
        <button
          onClick={scrollToPricing}
          className="px-5 py-2.5 text-sm font-display font-semibold bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors"
        >
          Early Bird sichern
        </button>
      </div>
    </header>
  );
}
