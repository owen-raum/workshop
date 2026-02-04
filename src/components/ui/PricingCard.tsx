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
      className={`relative bg-white rounded-2xl p-8 border-2 transition-all ${
        highlighted
          ? 'border-emerald-500 shadow-2xl scale-105'
          : 'border-slate-200 shadow-lg hover:border-emerald-300'
      }`}
    >
      {/* Popular Badge */}
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Beliebteste Option
          </span>
        </div>
      )}

      {/* Tier Name */}
      <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">
        {tier}
      </h3>

      {/* Price */}
      <div className="text-center mb-6">
        {originalPrice && (
          <span className="text-slate-400 line-through text-lg mr-2">
            {originalPrice}
          </span>
        )}
        <div className="text-4xl font-bold text-slate-900">
          {price}
          <span className="text-lg text-slate-600 font-normal"> / Person</span>
        </div>
      </div>

      {/* Available Seats */}
      <div className="bg-emerald-50 rounded-lg p-3 mb-6 text-center">
        <span className="text-emerald-700 font-semibold text-sm">
          Noch {availableSeats} Plätze zum Early-Bird-Preis
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
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
            <span className="text-slate-600">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={onSelect}
        className={`w-full py-4 rounded-lg font-semibold transition-all ${
          highlighted
            ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg hover:shadow-xl'
            : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
        }`}
      >
        Jetzt buchen
      </button>
    </div>
  );
}
