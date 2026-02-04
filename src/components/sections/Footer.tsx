import { Button } from '../ui/Button';

export function Footer() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900 text-white py-24 md:py-32 px-4 overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/30 opacity-90" />
      
      <div className="relative max-w-5xl mx-auto">
        {/* Final CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Bereit, OpenClaw zu verstehen?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Sichere dir jetzt deinen Platz und lerne, wie AI-Agents wirklich arbeiten.
          </p>
          <Button
            variant="primary"
            size="large"
            onClick={scrollToPricing}
            className="shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50"
          >
            Jetzt Ticket buchen →
          </Button>
          
          {/* Urgency Note */}
          <p className="mt-6 text-slate-400 text-sm">
            ⏰ Noch <strong className="text-white">26 Plätze</strong> zum Early-Bird-Preis verfügbar
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mb-12" />

        {/* Footer Links & Info */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">OpenClaw Workshop</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Live-Workshop mit Andy Steinberger und Owen 🐸 — 
              AI-Agents verstehen und praktisch einsetzen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#what" className="hover:text-emerald-400 transition-colors">
                  Was ist OpenClaw?
                </a>
              </li>
              <li>
                <a href="#content" className="hover:text-emerald-400 transition-colors">
                  Workshop-Inhalte
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-emerald-400 transition-colors">
                  Tickets & Preise
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <a
                  href="mailto:hello@openclaw.com"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@openclaw.com
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/openclaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  @openclaw
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <div>
            © {new Date().getFullYear()} OpenClaw Workshop. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="/impressum" className="hover:text-emerald-400 transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-emerald-400 transition-colors">
              Datenschutz
            </a>
            <a href="/agb" className="hover:text-emerald-400 transition-colors">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
