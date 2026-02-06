'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-6 bg-[#111111] text-white p-3 rounded-full shadow-lg hover:bg-[#1a1a1a] transition-all hover:-translate-y-1 z-40"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" strokeWidth={2} />
    </button>
  );
}
