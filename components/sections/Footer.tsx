'use client';

import Link from 'next/link';
import { useTickets, getCtaText } from '@/lib/useTickets';

export function Footer() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Ticket data – zentralisiert
  const { tier, loading: ticketsLoading } = useTickets();

  return (
    <footer className="bg-[#F1EFEB] border-t border-[rgba(34,34,34,0.12)] py-16 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Final CTA Section */}
        <div className="reveal bg-[#1A1A1A] rounded-3xl p-8 md:p-12 text-center text-white mb-16 shadow-[0_0_80px_-20px_rgba(255,255,255,0.1)]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Zeit, dass AI für dich arbeitet.
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            90 Minuten. Ein echtes System. Deine Entscheidungsgrundlage.
          </p>
          <button
            onClick={scrollToPricing}
            className="bg-white text-[#111111] hover:bg-[#f7f5f1] font-semibold rounded-xl px-10 py-5 text-lg transition-colors"
          >
            {getCtaText(tier, ticketsLoading)}
          </button>
        </div>

        {/* Footer Links & Info */}
        <div className="reveal grid md:grid-cols-3 gap-12 md:gap-16 mb-10">
          {/* About */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Andy Steinberger × OpenClaw</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Gründer von The Circle und steinberger [ʁaʊ̯m̩].
              Baut AI-Agents für echte Arbeit – kein Hype, kein Bullshit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#what" className="hover:text-gray-900 transition-colors">
                  Was ist OpenClaw?
                </a>
              </li>
              <li>
                <a href="#content" className="hover:text-gray-900 transition-colors">
                  Deep Dive-Inhalte
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-gray-900 transition-colors">
                  Ticket
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gray-900 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Andy Steinberger</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <a
                  href="mailto:andy@raum.so"
                  className="hover:text-gray-900 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  andy@raum.so
                </a>
              </li>
              <li>
                <a
                  href="https://pulse.how"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-gray-900 transition-colors flex items-center gap-2"
                >
                  <span className="w-4 h-4 text-center text-xs">●</span>
                  The Circle Community
                </a>
              </li>
              <li>
                <a
                  href="https://raum.so"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-gray-900 transition-colors flex items-center gap-2"
                >
                  <span className="w-4 h-4 text-center text-xs">●</span>
                  steinberger [ʁaʊ̯m̩]
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/andysteinberger"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-gray-900 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="reveal border-t border-[rgba(34,34,34,0.12)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <div>
            © {new Date().getFullYear()} steinberger Limited
          </div>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-gray-900 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-gray-900 transition-colors">
              Datenschutz
            </Link>
            <Link href="/agb" className="hover:text-gray-900 transition-colors">
              AGB
            </Link>
          </div>
        </div>

        {/* Spacer for sticky CTA bar on mobile */}
        <div className="h-16 sm:h-0" />

        {/* Disclaimer */}
        <div className="reveal mt-8 pt-6 border-t border-[rgba(34,34,34,0.12)] space-y-4">
          <p className="text-gray-500 text-xs leading-relaxed max-w-3xl mx-auto text-center">
            <strong className="text-gray-600">⚠️ Wichtiger Hinweis:</strong> Andy ist unabhängiger Early Adopter – nicht affiliated mit OpenClaw.
            Kein Vendor-Pitch. Keine Sales-Agenda. Nur echte Erfahrung aus Monaten Production Use.
            Was funktioniert, was nicht, und wo du aufpassen musst – ohne Marketing-Filter.
          </p>
          <p className="text-gray-500 text-xs leading-relaxed max-w-2xl mx-auto text-center">
            Dieser Deep Dive ist ein unabhängiges Angebot von steinberger Limited und steht in keiner
            offiziellen Verbindung zum OpenClaw-Projekt oder dessen Entwicklern. OpenClaw ist ein
            Open-Source-Projekt unter eigener Lizenz.
          </p>
        </div>
      </div>
    </footer>
  );
}
