'use client';

import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { getNextTiers } from '@/lib/tiers';
import { useTickets, getCtaText } from '@/lib/useTickets';

export function Hero() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Ticket data – zentralisiert
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
  const timerBoxClass = 'bg-white/80 backdrop-blur-sm border border-[rgba(34,34,34,0.12)] rounded-2xl px-6 py-4 min-w-[100px] shadow-[0_8px_24px_-8px_rgba(17,17,17,0.12)]';
  const timerLabelClass = 'text-[11px] text-gray-500 uppercase tracking-[0.2em]';

  // Start with null to avoid SSR/client hydration mismatch
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    setTimeLeft(calcTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <section className="relative bg-[#F1EFEB]">
      <div className="relative z-10 w-full min-h-[85vh] flex flex-col justify-center items-center">
        <div className="w-full grid lg:grid-cols-[1.05fr,0.95fr] items-center gap-16 lg:gap-20 px-8 md:px-16 lg:px-24 pt-16 lg:pt-28 pb-24 md:py-16 max-w-[1200px]">
          <div className="w-full flex flex-col items-center lg:items-start">
            <p className="reveal text-xl mb-3 font-medium text-gray-600 text-center lg:text-left">
              OpenClaw Production Deep Dive · Mit Andy Steinberger · Sonntag, 15. Februar 2026
            </p>

            {timeLeft === null ? (
              <div className="reveal flex flex-wrap gap-3 mb-10">
                {['Tage', 'Std', 'Min', 'Sek'].map((label) => (
                  <div key={label} className={timerBoxClass}>
                    <div className="text-4xl font-bold text-gray-900">–</div>
                    <div className={timerLabelClass}>{label}</div>
                  </div>
                ))}
              </div>
            ) : timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && eventDate < Date.now() ? (
              <div className="reveal mb-10">
                <p className="text-2xl md:text-3xl font-bold text-gray-900 bg-white/80 backdrop-blur-sm border border-[rgba(34,34,34,0.12)] rounded-2xl px-6 py-4 inline-block shadow-[0_10px_30px_-22px_rgba(17,17,17,0.4)]">
                  🎉 Der Deep Dive hat begonnen!
                </p>
              </div>
            ) : (
              <div className="reveal flex flex-wrap gap-3 mb-10">
                <div className={timerBoxClass}>
                  <div className="text-4xl font-bold text-gray-900">{timeLeft.days}</div>
                  <div className={timerLabelClass}>Tage</div>
                </div>
                <div className={timerBoxClass}>
                  <div className="text-4xl font-bold text-gray-900">{timeLeft.hours}</div>
                  <div className={timerLabelClass}>Std</div>
                </div>
                <div className={timerBoxClass}>
                  <div className="text-4xl font-bold text-gray-900">{timeLeft.minutes}</div>
                  <div className={timerLabelClass}>Min</div>
                </div>
                <div className={timerBoxClass}>
                  <div className="text-4xl font-bold text-gray-900">{timeLeft.seconds}</div>
                  <div className={timerLabelClass}>Sek</div>
                </div>
              </div>
            )}

            <h1 className="reveal font-display text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.1] tracking-tight text-gray-900 mb-8 text-center lg:text-left">
              Ein AI-Agent, der{' '}
              <span className="relative inline-block">
                wirklich arbeitet
                <span className="absolute -bottom-1 left-0 right-0 h-[6px] bg-[#85c4ff] opacity-40 -rotate-1 rounded-full -z-10" />
              </span>{' '}
              – nicht nur chattet.
            </h1>

            <p className="reveal text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-10 text-center lg:text-left">
              Was passiert, wenn dein Agent nicht nur antwortet – sondern handelt. Kein Hype, nur ein echtes Production-Setup.
            </p>

            <div className="reveal flex flex-col sm:flex-row sm:items-center gap-4 w-full lg:w-auto">
              <button
                onClick={scrollToPricing}
                className="bg-[#111111] hover:bg-[#1a1a1a] text-white font-semibold text-lg py-5 px-10 rounded-2xl transition-colors hover:shadow-lg"
              >
                {getCtaText(tier, ticketsLoading)}
              </button>
              <p className="text-gray-600 text-sm text-center sm:text-left">
                {ticketsLoading ? (
                  <span className="text-gray-500">Lade Verfügbarkeit...</span>
                ) : (
                  <>
                    Noch <strong className="text-gray-900">{tier.spotsLeft} {tier.label} Tickets</strong> ({tier.price}€ inkl. MwSt)
                    {nextTiers.length > 0 && <> – danach {nextTiers[0].price}€ inkl. MwSt</>}
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="reveal w-full mt-12 lg:mt-0 flex justify-center lg:justify-end items-center">
            <div className="w-full max-w-[520px] bg-white rounded-3xl border border-[rgba(34,34,34,0.12)] p-10 md:p-12 shadow-[0_20px_60px_-12px_rgba(17,17,17,0.15)]">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Live Setup</p>
                <span className="text-xs px-3 py-1 rounded-full border border-[rgba(34,34,34,0.12)] text-gray-600">Production</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Andys echtes OpenClaw-System</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Kein Demo-Lab. Owen läuft seit Monaten auf einem Mac Mini M4 in Zypern – mit echten Aufgaben, echten Fehlern und echten Learnings.
              </p>
              <ul className="space-y-3 text-gray-700 text-sm">
                {[
                  'Live-Workflows: Mails, Kalender, Code, Messaging',
                  'Ehrliche Grenzen & Risiken',
                  'Setup-Insights für deinen eigenen Agenten',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500" strokeWidth={1.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-[rgba(34,34,34,0.12)] px-5 py-4 bg-[#F9FAFB]">
                  <div className="text-xl font-semibold text-gray-900">90 Min</div>
                  <div className="text-xs text-gray-500">Deep Dive</div>
                </div>
                <div className="rounded-2xl border border-[rgba(34,34,34,0.12)] px-5 py-4 bg-[#F9FAFB]">
                  <div className="text-xl font-semibold text-gray-900">15 Feb</div>
                  <div className="text-xs text-gray-500">Live Session</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
