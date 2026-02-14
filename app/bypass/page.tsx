'use client';

import { useState, useRef, useEffect } from 'react';

const CORRECT_PIN = '1337';

export default function BypassPage() {
  const [pin, setPin] = useState('');
  const [shake, setShake] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tierData, setTierData] = useState<{ price: number; label: string } | null>(null);
  const [ticketsLoading, setTicketsLoading] = useState(true);
  const hiddenInputRef = useRef<HTMLInputElement>(null);

  // Focus hidden input on mount
  useEffect(() => {
    hiddenInputRef.current?.focus();
  }, []);

  // Load ticket data once unlocked
  useEffect(() => {
    if (!unlocked) return;
    fetch('/api/tickets')
      .then((r) => r.json())
      .then((data) => {
        setTierData({ price: data.price, label: data.label });
        setTicketsLoading(false);
      })
      .catch(() => setTicketsLoading(false));
  }, [unlocked]);

  const handleInput = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 4);
    setPin(digits);

    if (digits.length === 4) {
      if (digits === CORRECT_PIN) {
        setUnlocked(true);
      } else {
        setShake(true);
        setTimeout(() => {
          setShake(false);
          setPin('');
        }, 500);
      }
    }
  };

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bypass: CORRECT_PIN }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Checkout konnte nicht erstellt werden');
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Etwas ist schiefgelaufen');
      setLoading(false);
    }
  };

  if (!unlocked) {
    return (
      <main
        className="min-h-screen bg-[#F1EFEB] flex flex-col items-center justify-center px-5"
        onClick={() => hiddenInputRef.current?.focus()}
      >
        <div className="max-w-md w-full text-center">
          <div className="text-5xl mb-6">🐸</div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-black mb-3">
            Zu spät ist zu spät.
          </h1>
          <p className="text-gray-500 text-base sm:text-lg mb-10 leading-relaxed">
            Es sei denn... du kennst den Code.
          </p>

          {/* Hidden input for mobile keyboard */}
          <input
            ref={hiddenInputRef}
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            className="absolute opacity-0 w-0 h-0"
            value={pin}
            onChange={(e) => handleInput(e.target.value)}
            autoFocus
          />

          {/* PIN Dots */}
          <div
            className={`flex items-center justify-center gap-5 mb-8 transition-transform ${
              shake ? 'animate-shake' : ''
            }`}
          >
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full transition-all duration-150 ${
                  pin.length > i
                    ? 'bg-black scale-110'
                    : 'bg-transparent border-2 border-black/20'
                }`}
              />
            ))}
          </div>

          <p className="text-gray-400 text-sm">
            Tippe den 4-stelligen Code ein
          </p>
        </div>

        <style jsx>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-12px); }
            40% { transform: translateX(10px); }
            60% { transform: translateX(-8px); }
            80% { transform: translateX(6px); }
          }
          .animate-shake {
            animation: shake 0.4s ease-in-out;
          }
        `}</style>
      </main>
    );
  }

  // Unlocked — show checkout
  const features = [
    'Live-Teilnahme am Deep Dive (90 Min)',
    'Komplette Aufzeichnung zum Nachschauen',
    'Alle Slides und Ressourcen',
    'Fragen stellen während des Deep Dives',
  ];

  return (
    <main className="min-h-screen bg-[#F1EFEB] flex flex-col items-center justify-center px-5 py-16">
      <div className="max-w-lg w-full">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🐸</div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-black mb-2">
            Na gut, du bist drin.
          </h1>
          <p className="text-gray-500 text-base leading-relaxed">
            Pünktlichkeit ist eine Tugend — aber wir drücken mal ein Auge zu.
            <br />
            <span className="text-gray-400 text-sm">Sag&apos;s nicht weiter. 🤫</span>
          </p>
        </div>

        <div className="bg-[#FDFCFA] rounded-3xl p-6 sm:p-8 border border-[rgba(34,34,34,0.12)] shadow-[0_35px_120px_-80px_rgba(17,17,17,0.4)]">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 mb-2">OpenClaw Deep Dive · 15. Feb 2026</p>
            {ticketsLoading ? (
              <div className="h-16 flex items-center justify-center">
                <span className="text-gray-400">Lade Preis...</span>
              </div>
            ) : (
              <div className="font-display text-5xl md:text-6xl font-bold text-black">
                {tierData?.price}€
              </div>
            )}
            <div className="text-gray-500 mt-1 text-sm">einmalig, inkl. MwSt.</div>
          </div>

          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <svg
                  className="w-5 h-5 text-black mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-base">{feature}</span>
              </li>
            ))}
          </ul>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm text-center">
              {error}
            </div>
          )}

          <button
            onClick={handleCheckout}
            disabled={loading || ticketsLoading}
            className={`w-full font-semibold text-lg py-4 px-8 rounded-xl transition-all ${
              loading || ticketsLoading
                ? 'bg-gray-400 text-white cursor-wait'
                : 'bg-black hover:bg-neutral-800 text-white'
            }`}
          >
            {loading ? 'Wird geladen...' : ticketsLoading ? 'Lade...' : `Platz sichern — ${tierData?.price}€`}
          </button>

          <div className="mt-4 text-xs text-gray-500 text-center">
            Sichere Zahlung via Stripe · Sofortige Bestätigung · Inkl. Aufzeichnung
          </div>
        </div>
      </div>
    </main>
  );
}
