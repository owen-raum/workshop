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
      className={`rounded-2xl p-8 transition-colors ${
        highlighted
          ? 'bg-warm-50 border-2 border-warm-400'
          : 'bg-white border border-stone-200'
      }`}
    >
      {highlighted && (
        <div className="mb-4 text-center">
          <span className="bg-warm-200 text-warm-900 px-4 py-1.5 rounded-full text-sm font-semibold">
            ⭐ Beliebteste Wahl
          </span>
        </div>
      )}

      <h3 className="font-display text-3xl font-bold text-stone-900 mb-3 text-center">
        {tier}
      </h3>

      <div className="text-center mb-6">
        {originalPrice && (
          <span className="text-stone-400 line-through text-xl mr-2">
            {originalPrice}
          </span>
        )}
        <div className="font-display text-5xl font-bold text-stone-900">
          {price}
          <span className="text-lg text-stone-600 font-normal"> / Person</span>
        </div>
      </div>

      <div className="bg-warm-100 rounded-xl p-4 mb-8 text-center border border-warm-200">
        <span className="text-warm-800 font-medium text-sm">
          🔥 Noch {availableSeats} Plätze zum Early-Bird-Preis
        </span>
      </div>

      <ul className="space-y-4 mb-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-stone-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className={`w-full py-4 rounded-xl font-semibold text-lg transition-colors ${
          highlighted
            ? 'bg-warm-600 text-white hover:bg-warm-700'
            : 'bg-stone-900 text-white hover:bg-stone-800'
        }`}
      >
        Jetzt buchen
      </button>
    </div>
  );
}
