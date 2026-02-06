'use client';

import { useState, useEffect } from 'react';

export function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after 1.5s
    const fadeTimer = setTimeout(() => setFadeOut(true), 1500);
    // Remove loader after fade animation (0.5s)
    const removeTimer = setTimeout(() => setLoading(false), 2000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {loading && (
        <div
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--bg-primary)] transition-opacity duration-500 ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage:
                'linear-gradient(rgba(17,17,17,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.06) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Prism wash */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-[0.55]"
            style={{ backgroundImage: 'var(--prism-gradient)' }}
          />

          <div className="relative flex flex-col items-center animate-fade-in">
            {/* Profile Image */}
            <div className="w-20 h-20 rounded-full overflow-hidden border border-[rgba(34,34,34,0.12)] shadow-2xl mb-6">
              <img
                src="/andy.jpg"
                alt="Andy Steinberger"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h1 className="font-display text-xl font-bold text-gray-900 tracking-tight mb-1">
              OpenClaw Deep Dive
            </h1>
            <p className="text-gray-500 text-xs font-mono tracking-wider uppercase">
              Andy Steinberger
            </p>

            {/* Loading bar */}
            <div className="mt-8 h-[2px] w-32 bg-black/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full shimmer"
                style={{
                  animation: 'loading-bar 1.5s ease-in-out',
                  animationFillMode: 'forwards',
                }}
              />
            </div>
          </div>
        </div>
      )}
      {children}
    </>
  );
}
