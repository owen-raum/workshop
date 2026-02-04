import { useEffect, useState } from 'react';

export function Hero() {
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
        {/* Eyebrow */}
        <p className="text-warm-600 font-semibold text-sm md:text-base mb-6 tracking-wide uppercase">
          OpenClaw Production Deep Dive · Mit Andy Steinberger · Sonntag, 15. Februar 2026
        </p>

        {/* Countdown Timer */}
        {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && eventDate < new Date().getTime() ? (
          <div className="mb-10">
            <p className="text-3xl md:text-4xl font-bold text-warm-700 bg-warm-50 border-2 border-warm-300 rounded-xl px-8 py-6 inline-block">
              🎉 Der Deep Dive hat begonnen!
            </p>
          </div>
        ) : (
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
        )}

        {/* Main Headline - HUGE */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-stone-900 mb-8 leading-[1.05] tracking-tight">
          70% deiner Routine-Arbeit — erledigt.
        </h1>

        {/* Subheadline */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-stone-800 font-semibold mb-10 max-w-4xl mx-auto leading-tight">
          Production Setup. Real Use Cases. Zero Bullshit.
        </h2>

        {/* CTA */}
        <div className="flex flex-col gap-3 justify-center items-center">
          <button
            onClick={scrollToPricing}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xl py-5 px-12 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all"
          >
            Early Bird für 149€ sichern
          </button>
          <p className="text-stone-600 text-base">
            Noch <strong className="text-warm-700">4 Early Bird Tickets</strong> (149€) — danach 199€
          </p>
        </div>
      </div>
    </section>
  );
}
