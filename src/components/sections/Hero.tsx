import { Button } from '../ui/Button';

export function Hero() {
  const registeredCount = 24;
  const maxSeats = 100;

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-32 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-animate" />
      
      {/* Floating Shapes with Animation */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }} />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-gold-400/10 to-amber-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s', animationDuration: '10s' }} />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Live Counter Badge - Gold Accent with Pulse */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-gold-300 shadow-xl shadow-gold-500/20 mb-12 animate-glow-pulse">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-gold-500"></span>
          </span>
          <span className="text-slate-900 font-semibold text-base">
            <strong className="text-gold-700">{registeredCount}</strong> von {maxSeats} Plätzen gebucht
          </span>
        </div>

        {/* Eyebrow - Premium Typography */}
        <p className="font-display text-emerald-600 font-bold text-xl md:text-2xl mb-6 tracking-wide uppercase">
          Live-Workshop · Donnerstag, 13. Februar 2026
        </p>

        {/* Main Headline - HUGE & Premium */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
          Dein AI-Agent.
          <br />
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Kein Spielzeug.
          </span>
        </h1>

        {/* Subline - Better Readability */}
        <p className="text-xl md:text-2xl text-slate-600 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
          ChatGPT kann reden. Dein OpenClaw-Agent kann <em>handeln</em>: Mails beantworten, 
          Termine koordinieren, Code deployen. In 90 Minuten zeige ich dir, wie das funktioniert — 
          und wie du es für dein Business aufsetzt.
        </p>

        {/* CTAs - Enhanced Hover Effects */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <Button
            variant="primary"
            size="large"
            onClick={scrollToPricing}
            className="hover-lift shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50"
          >
            Jetzt Platz sichern
          </Button>
          <Button
            variant="outline"
            size="large"
            onClick={() => document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })}
            className="hover-lift"
          >
            Was du lernst ↓
          </Button>
        </div>

        {/* Trust Indicators - Premium Glassmorphism */}
        <div className="inline-flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base glass rounded-2xl px-8 py-6 shadow-xl border border-white/50">
          <div className="flex items-center gap-2.5">
            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium text-slate-700">Kein Vorwissen nötig</span>
          </div>
          <div className="flex items-center gap-2.5">
            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium text-slate-700">Live mit Andy Steinberger</span>
          </div>
          <div className="flex items-center gap-2.5">
            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium text-slate-700">Echte Praxisbeispiele</span>
          </div>
        </div>
      </div>
    </section>
  );
}
