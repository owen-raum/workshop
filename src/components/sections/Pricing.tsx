export function Pricing() {
  // Gestaffelte Preise: 10 @ 149€, 40 @ 199€, Rest @ 249€
  const soldCount = 6; // TODO: Dynamisch aus DB/Stripe
  const earlyBirdTotal = 10;
  const midTierTotal = 50; // 10 + 40

  const getCurrentTier = () => {
    if (soldCount < earlyBirdTotal) {
      return { price: 149, label: 'Early Bird', spotsLeft: earlyBirdTotal - soldCount };
    } else if (soldCount < midTierTotal) {
      return { price: 199, label: 'Regular', spotsLeft: midTierTotal - soldCount };
    } else {
      return { price: 249, label: 'Final', spotsLeft: 100 - soldCount };
    }
  };

  const currentTier = getCurrentTier();

  const features = [
    'Live-Teilnahme am Workshop (90 Min)',
    'Komplette Aufzeichnung zum Nachschauen',
    'Alle Slides und Ressourcen',
    'Fragen stellen während des Workshops',
  ];

  const handleBook = () => {
    alert('Stripe Integration kommt bald!');
  };

  return (
    <section id="pricing" className="py-32 lg:py-40 px-4 bg-stone-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
            Was kostet das?
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 leading-relaxed">
            Ein Ticket. Der Preis steigt mit der Nachfrage.
          </p>
        </div>

        {/* Single Pricing Card */}
        <div className="bg-white rounded-2xl border border-stone-200 p-10 md:p-14 mb-10">
          {/* Price Tiers Visualization */}
          <div className="flex justify-between items-center mb-10 text-sm">
            <div className={`text-center ${soldCount < earlyBirdTotal ? 'text-stone-900' : 'text-stone-400'}`}>
              <div className="font-bold text-lg">149€</div>
              <div>Erste 10</div>
              {soldCount < earlyBirdTotal && (
                <div className="text-warm-600 font-medium mt-1">← Du bist hier</div>
              )}
            </div>
            <div className="flex-1 h-px bg-stone-200 mx-4" />
            <div className={`text-center ${soldCount >= earlyBirdTotal && soldCount < midTierTotal ? 'text-stone-900' : 'text-stone-400'}`}>
              <div className="font-bold text-lg">199€</div>
              <div>Platz 11–50</div>
              {soldCount >= earlyBirdTotal && soldCount < midTierTotal && (
                <div className="text-warm-600 font-medium mt-1">← Du bist hier</div>
              )}
            </div>
            <div className="flex-1 h-px bg-stone-200 mx-4" />
            <div className={`text-center ${soldCount >= midTierTotal ? 'text-stone-900' : 'text-stone-400'}`}>
              <div className="font-bold text-lg">249€</div>
              <div>Ab Platz 51</div>
              {soldCount >= midTierTotal && (
                <div className="text-warm-600 font-medium mt-1">← Du bist hier</div>
              )}
            </div>
          </div>

          {/* Current Price */}
          <div className="text-center mb-10">
            <div className="inline-block bg-warm-100 text-warm-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
              {currentTier.label} — noch {currentTier.spotsLeft} Plätze
            </div>
            <div className="font-display text-6xl md:text-7xl font-bold text-stone-900">
              {currentTier.price}€
            </div>
            <div className="text-stone-500 mt-2">
              einmalig, inkl. MwSt.
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-4 mb-10">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-stone-700">
                <svg className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={handleBook}
            className="w-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-lg py-4 px-8 rounded-xl transition-colors"
          >
            Jetzt Platz sichern
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-stone-600">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Sichere Zahlung via Stripe</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
            <span>14 Tage Geld-zurück-Garantie</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>Inkl. Aufzeichnung</span>
          </div>
        </div>
      </div>
    </section>
  );
}
