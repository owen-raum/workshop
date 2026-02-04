import { PricingCard } from '../ui/PricingCard';

export function Pricing() {
  const tiers = [
    {
      tier: 'Zuschauer',
      price: '149€',
      originalPrice: '199€',
      availableSeats: 15,
      features: [
        'Live dabei sein',
        'Aufzeichnung zum Nachschauen',
        'Alle Slides und Ressourcen',
        'Fragen stellen im Chat',
        '30 Tage Community-Zugang',
      ],
    },
    {
      tier: 'Macher',
      price: '199€',
      originalPrice: '279€',
      availableSeats: 8,
      highlighted: true,
      features: [
        'Alles vom Zuschauer-Ticket',
        '30-Min 1:1 Call nach dem Workshop',
        'Ich helfe dir beim Setup',
        'Dein Use Case, meine Meinung',
        '90 Tage Community-Zugang',
        'Direkt-Kanal für Fragen',
      ],
    },
    {
      tier: 'Team',
      price: '249€',
      originalPrice: '349€',
      availableSeats: 3,
      features: [
        'Alles vom Macher-Ticket',
        'Für dich + 2-4 Kollegen',
        'Separater Team-Call danach',
        'Hilfe beim Unternehmens-Setup',
        'Lifetime Community-Zugang',
        'Priority Support',
      ],
    },
  ];

  const handleSelect = (tier: string) => {
    // Placeholder - wird später mit Stripe verknüpft
    alert(`Buchung für ${tier} — Stripe Integration kommt bald!`);
  };

  return (
    <section id="pricing" className="py-32 lg:py-40 px-4 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
            Was kostet das?
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Early-Bird für die, die nicht warten.
            <br className="hidden md:block" />
            Danach wird's teurer.
          </p>
        </div>

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

        <div className="bg-white rounded-2xl p-10 border border-stone-200">
          <div className="flex flex-wrap justify-center gap-10 text-base text-stone-700">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-medium">Sichere Zahlung via Stripe</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              <span className="font-medium">14 Tage Geld-zurück-Garantie</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Inkl. Aufzeichnung & Slides</span>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-warm-100 border border-warm-300 rounded-2xl p-8 text-center">
          <p className="font-display text-stone-900 font-bold text-2xl">
            ⏰ Early-Bird endet in: <span className="text-warm-700">48 Stunden</span>
          </p>
          <p className="text-stone-700 mt-3 text-lg">
            Danach steigen die Preise auf 249€ / 349€ / 449€
          </p>
        </div>
      </div>
    </section>
  );
}
