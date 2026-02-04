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
          Ein Workshop von Andy Steinberger · Sonntag, 15. Februar 2026
        </p>

        {/* Countdown Timer */}
        {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && eventDate < new Date().getTime() ? (
          <div className="mb-10">
            <p className="text-3xl md:text-4xl font-bold text-warm-700 bg-warm-50 border-2 border-warm-300 rounded-xl px-8 py-6 inline-block">
              🎉 Der Workshop hat begonnen!
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
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-stone-800 font-semibold mb-6 max-w-4xl mx-auto leading-tight">
          Wie ein AI-Agent dir 20+ Stunden pro Woche zurückgibt (ohne dass du coden musst)
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Mein AI-Agent Owen managed Mails, Termine, Code und WhatsApp seit 2+ Jahren im Produktiveinsatz. 
          In 90 Minuten zeige ich dir wie das Setup funktioniert, was schief gehen kann, 
          und ob das für dein Business Sinn macht.
        </p>

        {/* Social Proof - direkt unter Hero */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 text-base md:text-lg">
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-sage-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-stone-700"><strong className="text-stone-900">50.000+ echte Tasks</strong> erledigt — kein Demo, echtes System</span>
          </div>
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-warm-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-stone-700">Noch <strong className="text-warm-700">4 Early Bird Tickets</strong> (149€) — danach 199€</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-4 justify-center items-center mb-20">
          <button
            onClick={scrollToPricing}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xl py-5 px-12 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all"
          >
            Early Bird für 149€ sichern
          </button>
          <p className="text-orange-600 font-semibold text-lg flex items-center gap-2">
            ⚠️ Nur noch {10 - 6} von 10 Early Bird Plätzen
          </p>
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
