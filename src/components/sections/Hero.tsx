import { useEffect, useState } from 'react';
import { Button } from '../ui/Button';

export function Hero() {
  const registeredCount = 6;
  const maxSeats = 100;

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Countdown Timer
  const eventDate = new Date('2026-02-15T11:00:00+02:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-32 bg-stone-50">
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Live Counter Badge - Clean & Static */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-stone-200 mb-12">
          <span className="relative flex h-2.5 w-2.5">
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-warm-500"></span>
          </span>
          <span className="text-stone-700 font-medium text-sm">
            <strong className="text-stone-900">{registeredCount}</strong> von {maxSeats} Plätzen gebucht
          </span>
        </div>

        {/* Eyebrow */}
        <p className="text-warm-600 font-semibold text-sm md:text-base mb-6 tracking-wide uppercase">
          Live-Workshop · Sonntag, 15. Februar 2026
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-3 md:gap-4 mb-10">
          <div className="bg-white border border-stone-200 rounded-xl px-4 py-3 min-w-[70px]">
            <div className="text-2xl md:text-3xl font-bold text-stone-900">{timeLeft.days}</div>
            <div className="text-xs text-stone-600 uppercase tracking-wide">Tage</div>
          </div>
          <div className="bg-white border border-stone-200 rounded-xl px-4 py-3 min-w-[70px]">
            <div className="text-2xl md:text-3xl font-bold text-stone-900">{timeLeft.hours}</div>
            <div className="text-xs text-stone-600 uppercase tracking-wide">Std</div>
          </div>
          <div className="bg-white border border-stone-200 rounded-xl px-4 py-3 min-w-[70px]">
            <div className="text-2xl md:text-3xl font-bold text-stone-900">{timeLeft.minutes}</div>
            <div className="text-xs text-stone-600 uppercase tracking-wide">Min</div>
          </div>
          <div className="bg-white border border-stone-200 rounded-xl px-4 py-3 min-w-[70px]">
            <div className="text-2xl md:text-3xl font-bold text-stone-900">{timeLeft.seconds}</div>
            <div className="text-xs text-stone-600 uppercase tracking-wide">Sek</div>
          </div>
        </div>

        {/* Main Headline - HUGE */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-stone-900 mb-10 leading-[1.05] tracking-tight">
          Dein AI-Agent.
          <br />
          Kein Spielzeug.
        </h1>

        {/* Subline */}
        <p className="text-xl md:text-2xl text-stone-600 mb-16 max-w-3xl mx-auto leading-relaxed">
          ChatGPT kann reden. Dein OpenClaw-Agent kann <em>handeln</em>: Mails beantworten, 
          Termine koordinieren, Code deployen. In 90 Minuten zeige ich dir, wie das funktioniert — 
          und wie du es für dein Business aufsetzt.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <Button
            variant="primary"
            size="large"
            onClick={scrollToPricing}
          >
            Jetzt Platz sichern
          </Button>
          <Button
            variant="outline"
            size="large"
            onClick={() => document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Was du lernst ↓
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="inline-flex flex-wrap justify-center gap-8 md:gap-12 text-sm md:text-base">
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-stone-700">Kein Vorwissen nötig</span>
          </div>
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-stone-700">Live mit Andy Steinberger</span>
          </div>
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-stone-700">Echte Praxisbeispiele</span>
          </div>
        </div>
      </div>
    </section>
  );
}
