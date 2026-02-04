export function SocialProof() {
  return (
    <section id="testimonials" className="py-32 lg:py-40 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
            Kein Demo. Kein Hype.
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Dieser Workshop ist neu. Aber das System dahinter läuft seit über 2 Jahren im Echtbetrieb.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-16 bg-white rounded-2xl p-8 border border-stone-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-stone-900 mb-2">Seit 2023</div>
              <div className="text-stone-600">AI-Agents im Echtbetrieb</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-stone-900 mb-2">50k+</div>
              <div className="text-stone-600">Tasks von Owen erledigt</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-stone-900 mb-2">0</div>
              <div className="text-stone-600">Bullshit-Versprechen</div>
            </div>
          </div>
        </div>

        {/* Honest Block */}
        <div className="bg-white rounded-2xl p-12 border border-stone-200 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-xl md:text-2xl text-stone-700 leading-relaxed mb-8">
              Owen managed täglich Mails, Kalender, Code und WhatsApp — kein Demo-Setup. 
              Das ist kein Konzept aus einem YouTube-Video. Das ist ein echtes Produktivsystem, 
              das seit Jahren im Einsatz ist.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-stone-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Gründer von PULSE (AI Community)</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>steinberger [ʁaʊ̯m̩] Consulting</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Praktische Praxiserfahrung, kein Theorie-Bla</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
