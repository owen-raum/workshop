export function AboutUs() {
  return (
    <section id="about" className="py-32 lg:py-40 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
            Wer bin ich?
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Und warum solltest du mir 90 Minuten deiner Zeit geben?
          </p>
        </div>

        {/* Andy Card — Personal */}
        <div className="bg-stone-50 rounded-2xl p-10 md:p-14 border border-stone-200 mb-10">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Avatar placeholder */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-36 h-36 rounded-2xl border border-stone-300 bg-warm-100 flex items-center justify-center">
                <span className="text-warm-700 text-5xl font-bold">AS</span>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-display text-3xl font-bold text-stone-900 mb-2">
                Andy Steinberger
              </h3>
              <p className="text-warm-600 font-semibold text-lg mb-6">
                Gründer von PULSE · steinberger [ʁaʊ̯m̩]
              </p>
              <div className="space-y-4 text-stone-700 text-lg leading-relaxed">
                <p>
                  Ich baue AI-Systeme seit 2023 — nicht als Spielerei, sondern als echte 
                  Infrastruktur für mein Business. Mein Agent Owen läuft 24/7 und erledigt 
                  alles, was mich von der eigentlichen Arbeit abhält.
                </p>
                <p>
                  Mit <a href="https://pulse.how" target="_blank" rel="noopener" className="text-warm-600 hover:text-warm-700 font-semibold underline underline-offset-2">PULSE</a> habe 
                  ich eine Community für Leute aufgebaut, die AI nicht nur nutzen wollen, 
                  sondern <em>verstehen</em>. Mit <a href="https://raum.so" target="_blank" rel="noopener" className="text-warm-600 hover:text-warm-700 font-semibold underline underline-offset-2">steinberger [ʁaʊ̯m̩]</a> berate 
                  ich Unternehmen bei der Umsetzung.
                </p>
                <p>
                  Diesen Workshop mache ich, weil ich es leid bin zu sehen, wie Leute AI 
                  "testen" statt nutzen. Ich zeige dir das Setup, das bei mir funktioniert — 
                  inklusive aller Fehler, die du vermeiden solltest.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Owen Card */}
        <div className="bg-stone-50 rounded-2xl p-10 md:p-14 border border-stone-200 mb-10">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-36 h-36 rounded-2xl border border-stone-300 bg-sage-100 flex items-center justify-center">
                <span className="text-5xl">🐸</span>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-display text-3xl font-bold text-stone-900 mb-2">
                Owen
              </h3>
              <p className="text-warm-600 font-semibold text-lg mb-6">
                Der Agent, um den es geht
              </p>
              <div className="space-y-4 text-stone-700 text-lg leading-relaxed">
                <p>
                  Owen ist kein Chatbot. Owen ist ein AI-Agent, der seit über 2 Jahren 
                  im Produktiveinsatz läuft. Er beantwortet Mails, koordiniert Termine, 
                  schreibt und deployt Code, managed WhatsApp-Gruppen und überwacht Systeme.
                </p>
                <p>
                  Im Workshop siehst du Owen live bei der Arbeit — kein vorbereitetes 
                  Demo-Setup, sondern das echte System, das täglich im Einsatz ist.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="https://pulse.how" target="_blank" rel="noopener" className="bg-stone-50 rounded-xl p-6 border border-stone-200 text-center hover:border-warm-300 transition-colors group">
            <div className="font-display font-bold text-stone-900 text-lg group-hover:text-warm-600 transition-colors">PULSE</div>
            <div className="text-stone-600 text-sm">AI Community</div>
          </a>
          <a href="https://raum.so" target="_blank" rel="noopener" className="bg-stone-50 rounded-xl p-6 border border-stone-200 text-center hover:border-warm-300 transition-colors group">
            <div className="font-display font-bold text-stone-900 text-lg group-hover:text-warm-600 transition-colors">[ʁaʊ̯m̩]</div>
            <div className="text-stone-600 text-sm">Consulting & Studio</div>
          </a>
          <div className="bg-stone-50 rounded-xl p-6 border border-stone-200 text-center">
            <div className="font-display font-bold text-stone-900 text-lg">50k+</div>
            <div className="text-stone-600 text-sm">Tasks von Owen</div>
          </div>
          <div className="bg-stone-50 rounded-xl p-6 border border-stone-200 text-center">
            <div className="font-display font-bold text-stone-900 text-lg">Seit 2023</div>
            <div className="text-stone-600 text-sm">AI im Echtbetrieb</div>
          </div>
        </div>
      </div>
    </section>
  );
}
