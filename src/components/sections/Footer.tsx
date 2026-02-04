export function Footer() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 text-white py-32 lg:py-40 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Final CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Zeit, dass AI für dich arbeitet.
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            90 Minuten. Ein Setup. Dein erster Agent.
          </p>
          <button
            onClick={scrollToPricing}
            className="bg-navy-600 text-white hover:bg-navy-700 font-display font-semibold rounded-xl px-10 py-5 text-lg transition-colors"
          >
            Early Bird für 149€ sichern
          </button>
        </div>

        <div className="border-t border-navy-700 mb-12" />

        {/* Footer Links & Info */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Andy Steinberger × OpenClaw</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Gründer von The Circle und steinberger [ʁaʊ̯m̩]. 
              Baut AI-Agents für echte Arbeit – kein Hype, kein Bullshit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#what" className="hover:text-slate-200 transition-colors">
                  Was ist OpenClaw?
                </a>
              </li>
              <li>
                <a href="#content" className="hover:text-slate-200 transition-colors">
                  Deep Dive-Inhalte
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-slate-200 transition-colors">
                  Ticket
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-slate-200 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Andy Steinberger</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <a
                  href="mailto:andy@raum.so"
                  className="hover:text-slate-200 transition-colors flex items-center gap-2"
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
                  className="hover:text-slate-200 transition-colors flex items-center gap-2"
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
                  className="hover:text-slate-200 transition-colors flex items-center gap-2"
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
                  className="hover:text-slate-200 transition-colors flex items-center gap-2"
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

        <div className="border-t border-navy-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <div>
            © {new Date().getFullYear()} STEINBERGER LTD
          </div>
          <div className="flex gap-6">
            <a href="/impressum" className="hover:text-slate-200 transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-slate-200 transition-colors">
              Datenschutz
            </a>
            <a href="/agb" className="hover:text-slate-200 transition-colors">
              AGB
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-navy-800 space-y-4">
          <p className="text-slate-500 text-xs leading-relaxed max-w-3xl mx-auto text-center">
            <strong className="text-slate-400">⚠️ Wichtiger Hinweis:</strong> Andy ist unabhängiger Early Adopter – nicht affiliated mit OpenClaw. 
            Kein Vendor-Pitch. Keine Sales-Agenda. Nur echte Erfahrung aus Monaten Production Use. 
            Was funktioniert, was nicht, und wo du aufpassen musst – ohne Marketing-Filter.
          </p>
          <p className="text-slate-600 text-xs leading-relaxed max-w-2xl mx-auto text-center">
            Dieser Deep Dive ist ein unabhängiges Angebot von STEINBERGER LTD und steht in keiner 
            offiziellen Verbindung zum OpenClaw-Projekt oder dessen Entwicklern. OpenClaw ist ein 
            Open-Source-Projekt unter eigener Lizenz.
          </p>
        </div>
      </div>
    </footer>
  );
}
