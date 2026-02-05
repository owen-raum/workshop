'use client';

import { useEffect, useState } from 'react';
import { useTickets, getCtaText } from '@/lib/useTickets';
import { getNextTiers } from '@/lib/tiers';
import { BadgeCheck, Calendar, Clock, Video } from 'lucide-react';

export function Hero() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const { tier, loading: ticketsLoading } = useTickets();
  const nextTiers = getNextTiers(tier.name);

  // Countdown
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
    const interval = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, [eventDate]);

  const eventStarted = timeLeft && timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && eventDate < Date.now();

  return (
    <section className="relative bg-[#F1EFEB]">
      <div className="relative z-10 w-full min-h-[90vh] flex items-center">
        <div className="w-full max-w-[1140px] mx-auto px-6 md:px-10 lg:px-16 py-20 lg:py-24">
          
          <div className="grid lg:grid-cols-[1.15fr,0.85fr] gap-12 lg:gap-20 items-start">
            
            {/* Left Content */}
            <div>
              {/* Tagline */}
              <p className="text-[15px] text-[#666] mb-5">
                Der OpenClaw Production Deep Dive
              </p>

              {/* Headline */}
              <h1 className="text-[36px] sm:text-[44px] md:text-[52px] font-bold leading-[1.08] tracking-[-0.02em] text-[#111] mb-6">
                Ein AI-Agent, der wirklich{' '}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10">arbeitet</span>
                  <span 
                    className="absolute left-0 right-0 bottom-[0.08em] h-[0.3em] bg-[#a8d4f0] opacity-60 -z-10 rounded-sm"
                    style={{ transform: 'rotate(-0.5deg)' }}
                  />
                </span>
                .
              </h1>

              {/* Subline */}
              <p className="text-[17px] leading-[1.7] text-[#555] mb-8 max-w-[480px]">
                Was passiert, wenn dein Agent nicht nur antwortet – sondern handelt. Kein Hype, nur ein echtes Production-Setup.
              </p>

              {/* CTA + Badge Row */}
              <div className="flex flex-wrap items-center gap-4 mb-5">
                <button
                  onClick={scrollToPricing}
                  className="bg-[#111] hover:bg-[#222] text-white text-[15px] font-medium py-3.5 px-7 rounded-lg transition-all hover:shadow-lg"
                >
                  {getCtaText(tier, ticketsLoading)}
                </button>
                
                {/* Made by Badge */}
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-[rgba(0,0,0,0.08)] shadow-sm">
                    <img 
                      src="/andy.jpg" 
                      alt="Andy Steinberger" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[14px] text-[#666]">Made by</span>
                    <span className="text-[14px] font-semibold text-[#111]">Andy</span>
                    <BadgeCheck className="w-4 h-4 text-[#1d9bf0]" strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              {/* Price + Ticket Info */}
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-[26px] font-bold text-[#111]">
                  {ticketsLoading ? '...' : `${tier.price}€`}
                </span>
                <span className="text-[14px] text-[#888]">inkl. MwSt</span>
                {!ticketsLoading && (
                  <span className="text-[13px] text-[#666]">
                    · Noch {tier.spotsLeft} {tier.label} Tickets
                    {nextTiers.length > 0 && <span className="text-[#999]"> – danach {nextTiers[0].price}€</span>}
                  </span>
                )}
              </div>
            </div>

            {/* Right: Event Info Card */}
            <div className="lg:mt-8">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.1)] border border-[rgba(0,0,0,0.04)]">
                
                {/* Countdown */}
                {!eventStarted && timeLeft && (
                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <p className="text-[11px] uppercase tracking-[0.15em] text-[#999] mb-3 font-medium">Startet in</p>
                    <div className="flex justify-between">
                      {[
                        { value: timeLeft.days, label: 'Tage' },
                        { value: timeLeft.hours, label: 'Std' },
                        { value: timeLeft.minutes, label: 'Min' },
                        { value: timeLeft.seconds, label: 'Sek' },
                      ].map((item) => (
                        <div key={item.label} className="text-center">
                          <div className="text-[28px] md:text-[32px] font-bold text-[#111] tabular-nums leading-none">{item.value}</div>
                          <div className="text-[10px] uppercase tracking-wider text-[#999] mt-1.5">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {eventStarted && (
                  <div className="mb-6 pb-6 border-b border-gray-100 text-center">
                    <p className="text-xl font-bold text-[#111]">🎉 Der Deep Dive hat begonnen!</p>
                  </div>
                )}

                {/* Event Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#f5f5f5] flex items-center justify-center">
                      <Calendar className="w-[18px] h-[18px] text-[#666]" />
                    </div>
                    <div>
                      <p className="text-[15px] font-medium text-[#111]">Sonntag, 15. Februar 2026</p>
                      <p className="text-[13px] text-[#888]">19:00 Uhr (CET)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#f5f5f5] flex items-center justify-center">
                      <Clock className="w-[18px] h-[18px] text-[#666]" />
                    </div>
                    <div>
                      <p className="text-[15px] font-medium text-[#111]">90 Minuten</p>
                      <p className="text-[13px] text-[#888]">Deep Dive + Q&A</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#f5f5f5] flex items-center justify-center">
                      <Video className="w-[18px] h-[18px] text-[#666]" />
                    </div>
                    <div>
                      <p className="text-[15px] font-medium text-[#111]">Live via Zoom</p>
                      <p className="text-[13px] text-[#888]">Aufzeichnung inklusive</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
