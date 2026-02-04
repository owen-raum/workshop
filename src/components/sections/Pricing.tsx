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

        {/* Single Pricing Card - Enhanced for Early Bird */}
        <div className={`bg-white rounded-2xl p-8 md:p-14 mb-10 relative mt-8 ${
          soldCount < earlyBirdTotal 
            ? 'border-2 border-warm-400 shadow-2xl shadow-warm-200/50 md:scale-105' 
            : 'border border-stone-200'
        }`}>
          {/* BESTE WAHL Badge - nur für Early Bird */}
          {soldCount < earlyBirdTotal && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-warm-600 to-warm-500 text-white font-bold text-sm px-5 py-2 rounded-full shadow-lg whitespace-nowrap z-10">
              🔥 BESTE WAHL — 100€ sparen
            </div>
          )}

          {/* Price Tiers Visualization */}
          <div className="flex flex-row justify-between items-center mb-10 text-sm mt-4">
            <div className={`text-center ${soldCount < earlyBirdTotal ? 'text-stone-900' : 'text-stone-400'}`}>
              <div className="font-bold text-lg">149€</div>
              <div className="text-xs md:text-sm">Erste 10</div>
              {soldCount < earlyBirdTotal && (
                <div className="text-warm-600 font-medium mt-1 text-xs md:text-sm">← Du bist hier</div>
              )}
            </div>
            <div className="flex-1 h-px bg-stone-200 mx-3 md:mx-4" />
            <div className={`text-center ${soldCount >= earlyBirdTotal && soldCount < midTierTotal ? 'text-stone-900' : 'text-stone-400'}`}>
              <div className="font-bold text-lg">199€</div>
              <div className="text-xs md:text-sm">Platz 11–50</div>
              {soldCount >= earlyBirdTotal && soldCount < midTierTotal && (
                <div className="text-warm-600 font-medium mt-1 text-xs md:text-sm">← Du bist hier</div>
              )}
            </div>
            <div className="flex-1 h-px bg-stone-200 mx-3 md:mx-4" />
            <div className={`text-center ${soldCount >= midTierTotal ? 'text-stone-900' : 'text-stone-400'}`}>
              <div className="font-bold text-lg">249€</div>
              <div className="text-xs md:text-sm">Ab Platz 51</div>
              {soldCount >= midTierTotal && (
                <div className="text-warm-600 font-medium mt-1 text-xs md:text-sm">← Du bist hier</div>
              )}
            </div>
          </div>

          {/* Progress Indicator - nur für Early Bird */}
          {soldCount < earlyBirdTotal && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-stone-700">
                  Noch <strong className="text-warm-700">{currentTier.spotsLeft} von 10</strong> verfügbar
                </span>
                <span className="text-sm text-stone-500">{Math.round((soldCount / earlyBirdTotal) * 100)}% ausverkauft</span>
              </div>
              <div className="w-full bg-stone-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-warm-600 to-warm-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(soldCount / earlyBirdTotal) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Current Price */}
          <div className="text-center mb-10">
            {soldCount >= earlyBirdTotal && (
              <div className="inline-block bg-warm-100 text-warm-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
                {currentTier.label} — noch {currentTier.spotsLeft} Plätze
              </div>
            )}
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

          {/* CTA - verstärkt für Early Bird */}
          <button
            onClick={handleBook}
            className={`w-full font-bold text-lg py-4 px-8 rounded-xl transition-all ${
              soldCount < earlyBirdTotal
                ? 'bg-gradient-to-r from-warm-600 to-warm-500 hover:from-warm-700 hover:to-warm-600 text-white shadow-lg hover:shadow-xl'
                : 'bg-stone-900 hover:bg-stone-800 text-white'
            }`}
          >
            {soldCount < earlyBirdTotal ? 'Early Bird für 149€ sichern' : 'Jetzt Platz sichern'}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>Inkl. Aufzeichnung</span>
          </div>
        </div>
      </div>
    </section>
  );
}
