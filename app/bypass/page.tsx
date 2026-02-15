'use client';

import { useState, useEffect, useCallback } from 'react';

const CORRECT_PIN = '1337';

const KEYPAD_KEYS = [
  { digit: '1', letters: '' },
  { digit: '2', letters: 'ABC' },
  { digit: '3', letters: 'DEF' },
  { digit: '4', letters: 'GHI' },
  { digit: '5', letters: 'JKL' },
  { digit: '6', letters: 'MNO' },
  { digit: '7', letters: 'PQRS' },
  { digit: '8', letters: 'TUV' },
  { digit: '9', letters: 'WXYZ' },
];

export default function BypassPage() {
  const [pin, setPin] = useState('');
  const [shake, setShake] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tierData, setTierData] = useState<{ price: number; label: string } | null>(null);
  const [ticketsLoading, setTicketsLoading] = useState(true);
  const [pressedKey, setPressedKey] = useState<string | null>(null);

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

  const addDigit = useCallback((digit: string) => {
    if (shake) return;
    setPin((prev) => {
      if (prev.length >= 4) return prev;
      const next = prev + digit;
      if (next.length === 4) {
        setTimeout(() => {
          if (next === CORRECT_PIN) {
            setUnlocked(true);
          } else {
            setShake(true);
            setTimeout(() => {
              setShake(false);
              setPin('');
            }, 500);
          }
        }, 100);
      }
      return next;
    });
  }, [shake]);

  const removeDigit = useCallback(() => {
    setPin((prev) => prev.slice(0, -1));
  }, []);

  // Physical keyboard support
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (unlocked) return;
      if (e.key >= '0' && e.key <= '9') {
        addDigit(e.key);
      } else if (e.key === 'Backspace') {
        removeDigit();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [unlocked, addDigit, removeDigit]);

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

  const handleKeyTap = useCallback((digit: string) => {
    setPressedKey(digit);
    addDigit(digit);
    setTimeout(() => setPressedKey(null), 120);
  }, [addDigit]);

  if (!unlocked) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a] flex flex-col items-center justify-center px-5 overflow-hidden relative">
        {/* Subtle green ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-md w-full text-center relative z-10">
          <div className="text-4xl mb-4">🔒</div>
          <h1 className="font-display text-xl sm:text-2xl font-semibold text-white/90 mb-2">
            Zu spät ist zu spät.
          </h1>
          <p className="text-white/40 text-sm sm:text-base mb-8">
            Es sei denn... du kennst den Code.
          </p>

          {/* PIN Dots */}
          <div
            className={`flex items-center justify-center gap-4 mb-10 transition-transform ${
              shake ? 'animate-shake' : ''
            }`}
          >
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-150 ${
                  pin.length > i
                    ? 'bg-white scale-110'
                    : 'bg-transparent border-[1.5px] border-white/30'
                }`}
              />
            ))}
          </div>

          {/* Number Pad */}
          <div className="flex flex-col items-center gap-4">
            {/* Rows 1-3 */}
            {[0, 1, 2].map((row) => (
              <div key={row} className="flex gap-5 sm:gap-6">
                {KEYPAD_KEYS.slice(row * 3, row * 3 + 3).map(({ digit, letters }) => (
                  <button
                    key={digit}
                    onPointerDown={() => handleKeyTap(digit)}
                    className={`
                      w-[76px] h-[76px] sm:w-[85px] sm:h-[85px] rounded-full
                      flex flex-col items-center justify-center
                      select-none cursor-pointer touch-manipulation
                      transition-all duration-100
                      border border-white/20
                      ${pressedKey === digit
                        ? 'bg-white/30 scale-95'
                        : 'bg-white/10 hover:bg-white/20 backdrop-blur-md'
                      }
                    `}
                  >
                    <span className="text-[28px] sm:text-[32px] font-light text-white leading-none">{digit}</span>
                    {letters && (
                      <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.16em] text-white/70 mt-0.5">{letters}</span>
                    )}
                  </button>
                ))}
              </div>
            ))}
            {/* Bottom row: empty — 0 — delete */}
            <div className="flex gap-5 sm:gap-6">
              <div className="w-[76px] h-[76px] sm:w-[85px] sm:h-[85px]" />
              <button
                onPointerDown={() => handleKeyTap('0')}
                className={`
                  w-[76px] h-[76px] sm:w-[85px] sm:h-[85px] rounded-full
                  flex flex-col items-center justify-center
                  select-none cursor-pointer touch-manipulation
                  transition-all duration-100
                  border border-white/20
                  ${pressedKey === '0'
                    ? 'bg-white/30 scale-95'
                    : 'bg-white/10 hover:bg-white/20 backdrop-blur-md'
                  }
                `}
              >
                <span className="text-[28px] sm:text-[32px] font-light text-white leading-none">0</span>
              </button>
              <button
                onPointerDown={removeDigit}
                className="w-[76px] h-[76px] sm:w-[85px] sm:h-[85px] rounded-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors touch-manipulation"
              >
                {pin.length > 0 && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 14l6-6M15 14l-6-6" />
                    <path d="M5 7.5l3.5-3.5h10a2 2 0 012 2v12a2 2 0 01-2 2h-10L5 16.5V7.5z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
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
            Pünktlichkeit ist eine Tugend – aber wir drücken mal ein Auge zu.
            <br />
            <span className="text-gray-400 text-sm">Sag&apos;s nicht weiter. 🤫</span>
          </p>
        </div>

        <div className="bg-[#FDFCFA] rounded-3xl p-6 sm:p-8 border border-[rgba(34,34,34,0.12)] shadow-[0_35px_120px_-80px_rgba(17,17,17,0.4)]">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 mb-2">OpenClaw Deep Dive · 1. März 2026</p>
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
            {loading ? 'Wird geladen...' : ticketsLoading ? 'Lade...' : `Platz sichern – ${tierData?.price}€`}
          </button>

          <div className="mt-4 text-xs text-gray-500 text-center">
            Sichere Zahlung via Stripe · Sofortige Bestätigung · Inkl. Aufzeichnung
          </div>
        </div>
      </div>
    </main>
  );
}
