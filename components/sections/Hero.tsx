'use client';

import { useEffect, useState } from 'react';
import { Calendar, Clock, Zap } from 'lucide-react';
import { getNextTiers } from '@/lib/tiers';
import { useTickets, getCtaText } from '@/lib/useTickets';

export function Hero() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Ticket data
  const { tier, loading: ticketsLoading } = useTickets();
  const nextTiers = getNextTiers(tier.name);

  // Countdown Timer
  const eventDate = new Date('2026-02-15T19:00:00+02:00').getTime();
  const calcTimeLeft = () => {
    const distance = eventDate - Date.now();
    if (distance < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    setTimeLeft(calcTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, [eventDate]);

  const eventStarted = timeLeft && timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && eventDate < Date.now();

  return (
    <section className="relative bg-[#F1EFEB]">
      <div className="relative z-10 w-full min-h-[90vh] flex flex-col justify-center">
        <div className="w-full max-w-[1100px] mx-auto px-6 md:px-12 lg:px-16 pt-20 lg:pt-28 pb-20">
          
          {/* Tagline */}
          <p className="reveal text-sm uppercase tracking-[0.15em] text-gray-500 mb-6">
            OpenClaw Production Deep Dive
          </p>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-16 items-start">
            
            {/* Left: Headline + CTA */}
            <div>
              <h1 className="reveal font-display text-[42px] md:text-[56px] lg:text-[64px] font-bold leading-[1.08] tracking-tight text-gray-900 mb-6">
                Ein AI-Agent, der{' '}
                <span className="relative inline-block">
                  wirklich arbeitet
                  <span className="absolute -bottom-1 left-0 right-0 h-[5px] bg-[#85c4ff] opacity-50 -rotate-1 rounded-full" />
                </span>
                .
              </h1>

              <p className="reveal text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                Was passiert, wenn dein Agent nicht nur antwortet – sondern handelt. Kein Hype, nur ein echtes Production-Setup.
              </p>

              {/* CTA + Price Row */}
              <div className="reveal flex flex-wrap items-center gap-4 mb-8">
                <button
                  onClick={scrollToPricing}
                  className="bg-[#111111] hover:bg-[#222222] text-white font-semibold text-base py-4 px-8 rounded-xl transition-all hover:shadow-xl hover:-translate-y-0.5"
                >
                  {getCtaText(tier, ticketsLoading)}
                </button>
                
                <div className="flex flex-col">
                  {ticketsLoading ? (
                    <span className="text-gray-400 text-sm">Lädt...</span>
                  ) : (
                    <>
                      <span className="text-2xl font-bold text-gray-900">{tier.price}€</span>
                      <span className="text-xs text-gray-500">inkl. MwSt · {tier.spotsLeft} {tier.label} Tickets</span>
                    </>
                  )}
                </div>
              </div>

              {/* Made by Andy Badge */}
              <div className="reveal flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold text-sm">
                  AS
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Hosted by</span>{' '}
                  <span className="font-semibold text-gray-900">Andy Steinberger</span>
                </div>
              </div>
            </div>

            {/* Right: Event Info Card */}
            <div className="reveal">
              <div className="bg-white rounded-2xl border border-[rgba(34,34,34,0.08)] p-6 md:p-8 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)]">
                
                {/* Countdown or Event Started */}
                {eventStarted ? (
                  <div className="text-center py-4">
                    <p className="text-xl font-bold text-gray-900">🎉 Der Deep Dive hat begonnen!</p>
                  </div>
                ) : timeLeft && (
                  <div className="flex justify-between mb-6">
                    {[
                      { value: timeLeft.days, label: 'Tage' },
                      { value: timeLeft.hours, label: 'Std' },
                      { value: timeLeft.minutes, label: 'Min' },
                      { value: timeLeft.seconds, label: 'Sek' },
                    ].map((item) => (
                      <div key={item.label} className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-gray-900 tabular-nums">{item.value}</div>
                        <div className="text-[10px] uppercase tracking-wider text-gray-400 mt-1">{item.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="border-t border-gray-100 pt-6 space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span>Sonntag, 15. Februar 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span>19:00 Uhr · 90 Minuten</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Zap className="w-5 h-5 text-gray-400" />
                    <span>Live via Zoom · Aufzeichnung inklusive</span>
                  </div>
                </div>

                {nextTiers.length > 0 && !ticketsLoading && (
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 text-center">
                      Nach {tier.label}: {nextTiers[0].price}€
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
