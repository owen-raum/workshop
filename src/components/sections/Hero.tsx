import { Button } from '../ui/Button';

export function Hero() {
  // TODO: Replace with real live counter from Stripe/API
  const registeredCount = 24;
  const maxSeats = 100;

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-white">
      {/* Background Pattern (subtle) */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Live Counter Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
          </span>
          <span>
            <strong>{registeredCount}</strong> von {maxSeats} Plätzen bereits gebucht
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Baue deinen eigenen{' '}
          <span className="text-green-600 inline-block">AI-Assistenten</span>
        </h1>

        {/* Subline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Live-Workshop mit Andy Steinberger am{' '}
          <strong className="text-gray-900">13. Februar 2026</strong>.
          <br />
          Lerne in 90 Minuten, wie du OpenClaw für dein Business nutzt.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            variant="primary"
            size="large"
            onClick={scrollToPricing}
          >
            Jetzt Platz sichern →
          </Button>
          <Button
            variant="secondary"
            size="large"
            onClick={() => document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Mehr erfahren
          </Button>
        </div>

        {/* Key Facts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 border-t border-gray-200">
          <div>
            <div className="text-3xl font-bold text-green-600 mb-1">90 Min</div>
            <div className="text-sm text-gray-600">Kompakt & praxisnah</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-1">Live Q&A</div>
            <div className="text-sm text-gray-600">Alle Fragen beantwortet</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-1">100 Plätze</div>
            <div className="text-sm text-gray-600">Begrenzte Teilnehmerzahl</div>
          </div>
        </div>
      </div>
    </section>
  );
}
