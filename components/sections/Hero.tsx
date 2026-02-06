'use client';

import { useTickets, getCtaText } from '@/lib/useTickets';
import { getNextTiers } from '@/lib/tiers';
import { BadgeCheck } from 'lucide-react';

export function Hero() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const { tier, loading: ticketsLoading } = useTickets();
  const nextTiers = getNextTiers(tier.name);

  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Prism wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.75]"
        style={{ backgroundImage: 'var(--prism-gradient)' }}
      />

      {/* Big daylight blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-44 left-[55%] h-[780px] w-[780px] -translate-x-1/2 rounded-full blur-3xl opacity-90"
        style={{
          background:
            'radial-gradient(circle at 28% 28%, rgba(167,139,250,0.26), transparent 58%), radial-gradient(circle at 72% 38%, rgba(103,232,249,0.22), transparent 62%), radial-gradient(circle at 56% 72%, rgba(251,191,36,0.22), transparent 64%)',
        }}
      />

      {/* Left beam behind headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-12%] top-[22%] h-[320px] w-[640px] rotate-[-12deg] rounded-[999px] blur-2xl opacity-70"
        style={{
          background:
            'linear-gradient(90deg, rgba(245,158,11,0.00), rgba(245,158,11,0.36), rgba(6,182,212,0.28), rgba(124,58,237,0.28), rgba(124,58,237,0.00))',
        }}
      />

      <div className="relative z-10 w-full min-h-[92vh] flex items-center">
        <div className="w-full max-w-7xl mx-auto page-x pt-28 pb-20 md:pt-32 lg:pt-36 lg:pb-24">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-start">
            {/* Editorial left column */}
            <div className="max-w-[46rem]">
              <p className="text-sm font-semibold text-gray-700 mb-8">
                Sonntag, 15. Februar 2026 · 19:00 Uhr (CET)
              </p>

              <h1 className="font-display leading-[0.95] tracking-[-0.05em] text-black mb-8 text-[64px] sm:text-[78px] md:text-[92px] lg:text-[124px]">
                <span className="font-light">Mein </span>
                <span className="font-extrabold">AI-Agent</span>
                <span className="font-light"> Owen</span>
                <span className="font-extrabold"> hat</span>
                <span className="font-light"> letzte Woche </span>
                <span className="prism-underline prism-underline--hero font-extrabold">14 Stunden</span>
                <span className="font-light"> Arbeit übernommen. </span>
                <span className="font-extrabold">Ich</span>
                <span className="font-light"> zeige dir wie.</span>
              </h1>

              <p className="text-lg md:text-xl leading-[1.7] text-[#525252] mb-10 max-w-[42rem]">
                90 Minuten Deep Dive in OpenClaw – mein echtes Agent-Setup. Du siehst mein Setup, die Prompts, die Fails. Am Ende weißt du genau, ob das für dein Business & Privatleben Sinn macht – oder eben nicht.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-start gap-4">
                <button
                  onClick={scrollToPricing}
                  className="prism-button bg-black hover:bg-[#1a1a1a] text-white text-base font-semibold py-4 px-8 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_52px_-38px_rgba(17,17,17,0.75)] shadow-[0_2px_10px_rgba(0,0,0,0.10)]"
                >
                  {getCtaText(tier, ticketsLoading)}
                </button>

                {/* Hosted by Badge */}
                <div className="flex items-center gap-2 prism-card rounded-full py-2.5 px-4 shadow-sm">
                  <img
                    src="/andy.jpg"
                    alt="Andy Steinberger"
                    className="w-6 h-6 rounded-full border border-[rgba(34,34,34,0.10)] object-cover"
                  />
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-[#525252]">Hosted by</span>
                    <span className="text-sm font-semibold text-black">Andy</span>
                    <BadgeCheck className="w-3.5 h-3.5 text-[#1d9bf0]" strokeWidth={2} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right column (asym price block) */}
            <div className="lg:pt-10">
              <div className="prism-card prism-border-animated rounded-3xl p-7 md:p-8 lg:p-9 shadow-[0_60px_180px_-140px_rgba(17,17,17,0.75)]">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-5xl md:text-6xl font-extrabold tracking-[-0.04em] text-gray-900">
                    {ticketsLoading ? '...' : `${tier.price}€`}
                  </span>
                  <span className="text-sm text-gray-500">inkl. MwSt</span>
                </div>

                {!ticketsLoading && (
                  <div className="mt-5 text-sm">
                    <span className="font-semibold text-red-600">Noch {tier.spotsLeft} {tier.label} Tickets</span>
                    {nextTiers.length > 0 && (
                      <span className="text-gray-500"> – danach {nextTiers[0].price}€</span>
                    )}
                  </div>
                )}

                <button
                  onClick={scrollToPricing}
                  className="prism-button mt-7 w-full bg-[#111111] hover:bg-[#1a1a1a] text-white font-semibold py-4 rounded-2xl transition-all hover:-translate-y-0.5"
                >
                  {getCtaText(tier, ticketsLoading)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
