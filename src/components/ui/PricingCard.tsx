interface PricingCardProps {
  tier: string;
  price: string;
  originalPrice?: string;
  features: string[];
  highlighted?: boolean;
  availableSeats: number;
  onSelect: () => void;
}

export function PricingCard({
  tier,
  price,
  originalPrice,
  features,
  highlighted = false,
  availableSeats,
  onSelect,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-3xl p-8 transition-all duration-300 hover-lift ${
        highlighted
          ? 'glass border-2 border-emerald-400 shadow-2xl shadow-emerald-500/20 scale-105 z-10'
          : 'bg-white/90 backdrop-blur-sm border-2 border-slate-200 shadow-xl hover:border-emerald-300 hover:shadow-emerald-500/10'
      }`}
    >
      {/* Gradient Border Glow for Highlighted */}
      {highlighted && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-20 blur-xl -z-10" />
      )}

      {/* Popular Badge - Premium Gold */}
      {highlighted && (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-slate-900 px-6 py-2 rounded-full text-sm font-bold shadow-xl shadow-gold-500/40 border-2 border-gold-300">
            ⭐ Beliebteste Wahl
          </span>
        </div>
      )}

      {/* Tier Name */}
      <h3 className="font-display text-3xl font-bold text-slate-900 mb-3 text-center">
        {tier}
      </h3>

      {/* Price */}
      <div className="text-center mb-6">
        {originalPrice && (
          <span className="text-slate-400 line-through text-xl mr-2">
            {originalPrice}
          </span>
        )}
        <div className="font-display text-5xl font-bold text-slate-900">
          {price}
          <span className="text-lg text-slate-600 font-normal"> / Person</span>
        </div>
      </div>

      {/* Available Seats - Gold Accent for Early Bird */}
      <div className="bg-gradient-to-r from-gold-50 to-amber-50 rounded-xl p-4 mb-8 text-center border border-gold-200">
        <span className="text-gold-800 font-bold text-sm">
          🔥 Noch {availableSeats} Plätze zum Early-Bird-Preis
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg
              className="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-slate-700 font-medium">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button - Premium Hover */}
      <button
        onClick={onSelect}
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
          highlighted
            ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105'
            : 'bg-slate-900 text-white hover:bg-emerald-600 shadow-lg hover:shadow-xl hover:scale-105'
        }`}
      >
        Jetzt buchen
      </button>
    </div>
  );
}
