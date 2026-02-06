'use client';

import Link from 'next/link';
import { useTickets, getCtaText } from '@/lib/useTickets';
import { Sparkles, Mail, ExternalLink } from 'lucide-react';

export function Footer() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const { tier, loading: ticketsLoading } = useTickets();

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 py-20 md:py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10 container-custom">
        {/* Final CTA Section */}
        <div className="reveal glass-strong rounded-3xl p-10 md:p-16 text-center mb-20 border-2 border-purple-500/20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">Zeit, dass AI </span>
            <span className="gradient-text">für dich arbeitet.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            90 Minuten. Ein Setup. Dein erster Agent.
          </p>
          <button
            onClick={scrollToPricing}
            className="px-10 py-5 text-xl font-black text-white rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl pulse-glow inline-flex items-center gap-3"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)'
            }}
          >
            <Sparkles className="w-6 h-6" />
            {getCtaText(tier, ticketsLoading)}
          </button>
        </div>

        {/* Footer Links & Info */}
        <div className="reveal grid md:grid-cols-3 gap-12 md:gap-16 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Andy Steinberger × OpenClaw</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Gründer von The Circle und steinberger [ʁaʊ̯m̩].
              Baut AI-Agents für echte Arbeit – kein Hype, kein Bullshit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#what" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">Was ist OpenClaw?</span>
                </a>
              </li>
              <li>
                <a href="#content" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">Deep Dive-Inhalte</span>
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">Ticket</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">FAQ</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Andy Steinberger</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="mailto:andy@raum.so"
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <Mail className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                  <span>andy@raum.so</span>
                </a>
              </li>
              <li>
                <a
                  href="https://pulse.how"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                  <span>The Circle Community</span>
                </a>
              </li>
              <li>
                <a
                  href="https://raum.so"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                  <span>steinberger [ʁaʊ̯m̩]</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/andysteinberger"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="reveal border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <div>
            © {new Date().getFullYear()} steinberger Limited
          </div>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
            <Link href="/agb" className="hover:text-white transition-colors">
              AGB
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="reveal mt-10 pt-8 border-t border-white/10 space-y-4">
          <p className="text-gray-500 text-xs leading-relaxed max-w-4xl mx-auto text-center">
            <strong className="text-gray-400">⚠️ Wichtiger Hinweis:</strong> Andy ist unabhängiger Early Adopter – nicht affiliated mit OpenClaw.
            Kein Vendor-Pitch. Keine Sales-Agenda. Nur echte Erfahrung aus Monaten Production Use.
            Was funktioniert, was nicht, und wo du aufpassen musst – ohne Marketing-Filter.
          </p>
          <p className="text-gray-500 text-xs leading-relaxed max-w-3xl mx-auto text-center">
            Dieser Deep Dive ist ein unabhängiges Angebot von steinberger Limited und steht in keiner
            offiziellen Verbindung zum OpenClaw-Projekt oder dessen Entwicklern. OpenClaw ist ein
            Open-Source-Projekt unter eigener Lizenz.
          </p>
        </div>
      </div>
    </footer>
  );
}
