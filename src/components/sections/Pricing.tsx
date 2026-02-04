import { PricingCard } from '../ui/PricingCard';

export function Pricing() {
  const tiers = [
    {
      tier: 'Solo',
      price: '149€',
      originalPrice: '249€',
      availableSeats: 15,
      features: [
        'Live-Teilnahme am Workshop',
        'Zugriff auf Aufzeichnung',
        'Slides & Ressourcen',
        'Q&A während des Workshops',
        '30 Tage Zugriff auf Community',
      ],
    },
    {
      tier: 'Professional',
      price: '199€',
      originalPrice: '349€',
      availableSeats: 8,
      highlighted: true,
      features: [
        'Alles aus Solo',
        '1:1 Follow-up Call (30 Min)',
        'OpenClaw Setup-Support',
        'Use Case Review',
        '90 Tage Community-Zugriff',
        'Direkte Frage-Hotline',
      ],
    },
    {
      tier: 'Team',
      price: '249€',
      originalPrice: '449€',
      availableSeats: 3,
      features: [
        'Alles aus Professional',
        'Team-Workshop für 3-5 Personen',
        'Custom Use Case Workshop',
        'Implementation Support',
        'Lifetime Community-Zugriff',
        'Priority Support',
      ],
    },
  ];

  const handleSelect = (tier: string) => {
    // Placeholder - wird später mit Stripe verknüpft
    alert(`Buchung für ${tier} — Stripe Integration kommt bald!`);
  };

  return (
    <section id="pricing" className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-emerald-50" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Sichere dir deinen <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Platz</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Early-Bird-Preise nur für die ersten 30 Teilnehmer. 
            <br className="hidden md:block" />
            Danach steigt der Preis auf den regulären Tarif.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, index) => (
            <PricingCard
              key={index}
              tier={tier.tier}
              price={tier.price}
              originalPrice={tier.originalPrice}
              features={tier.features}
              highlighted={tier.highlighted}
              availableSeats={tier.availableSeats}
              onSelect={() => handleSelect(tier.tier)}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Sichere Zahlung via Stripe</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              <span>14 Tage Geld-zurück-Garantie</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Inkl. Aufzeichnung & Slides</span>
            </div>
          </div>
        </div>

        {/* Urgency Banner */}
        <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 text-center">
          <p className="text-slate-900 font-semibold text-lg">
            ⏰ Early-Bird endet in: <span className="text-red-600">48 Stunden</span>
          </p>
          <p className="text-slate-600 mt-2">
            Danach steigen die Preise auf 249€ / 349€ / 449€
          </p>
        </div>
      </div>
    </section>
  );
}
