export function AboutUsSocialProof() {
  return (
    <section id="about" className="py-20 md:py-32 lg:py-40 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Wer bin ich?
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Und warum solltest du mir 90 Minuten deiner Zeit geben?
          </p>
        </div>

        {/* Main Grid: Links Andy, Rechts Social Proof */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Andy + Owen Cards */}
          <div className="space-y-8">
            {/* Andy Card */}
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Avatar */}
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-28 h-28 rounded-2xl border border-slate-200 bg-orange-100 flex items-center justify-center">
                    <span className="text-orange-700 text-4xl font-bold">AS</span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">
                    Andy Steinberger
                  </h3>
                  <p className="text-orange-600 font-semibold mb-4">
                    Early Adopter. Kein Vendor.
                  </p>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>
                      Owen gibt's seit 2021. Erst auf OpenAI-Tools experimentiert, dann auf Make und Fireflies 
                      produktiv gebracht. Hat funktioniert – aber mit Einschränkungen.
                    </p>
                    <p>
                      Dann kam OpenClaw. Weil ich die Kontrolle wollte. Weil Cloud-Abhängigkeit nervt. 
                      Weil ein Agent auf eigenem Gerät besser ist als auf fremden Servern.
                    </p>
                    <p>
                      Was ich dir zeige läuft wirklich. Was nicht funktioniert sag ich dir auch. 
                      Better done than perfect – das ist mein Approach seit Jahren.
                    </p>
                  </div>
                </div>
              </div>

              {/* Credibility Links */}
              <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-2 gap-3">
                <a href="https://pulse.how" target="_blank" rel="noopener" className="text-center py-3 px-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-orange-400 transition-colors group">
                  <div className="font-display font-bold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">The Circle</div>
                  <div className="text-slate-600 text-xs">AI Community</div>
                </a>
                <a href="https://raum.so" target="_blank" rel="noopener" className="text-center py-3 px-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-orange-400 transition-colors group">
                  <div className="font-display font-bold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">[ʁaʊ̯m̩]</div>
                  <div className="text-slate-600 text-xs">Consulting</div>
                </a>
              </div>
            </div>

            {/* Owen Card */}
            <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-28 h-28 rounded-2xl border border-slate-200 bg-orange-100 flex items-center justify-center">
                    <span className="text-5xl">🐸</span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">
                    Owen
                  </h3>
                  <p className="text-orange-600 font-semibold mb-4">
                    Der Agent, powered by OpenClaw
                  </p>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>
                      Owen ist kein Chatbot. Owen ist ein AI-Agent im Produktiveinsatz. 
                      Er beantwortet Mails, koordiniert Termine, schreibt und deployt Code, 
                      managed WhatsApp-Gruppen und überwacht Systeme. 
                      Läuft auf einem Mac Mini M4 in Zypern – powered by OpenClaw.
                    </p>
                    <p>
                      Im Deep Dive siehst du Owen live bei der Arbeit – kein vorbereitetes 
                      Demo-Setup, sondern das echte System.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Social Proof / Why Me */}
          <div className="space-y-8">
            {/* Honest Pitch */}
            <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm">
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-6">
                Warum ausgerechnet ich?
              </h3>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Ich verkaufe keine Theorie. Owen ist mein <em>echtes</em> System – er läuft 
                  jeden Tag, managed mein Business, und ich wäre aufgeschmissen ohne ihn.
                </p>
                <p>
                  Diesen Deep Dive gibt es, weil mich jede Woche Leute fragen: 
                  <strong className="text-slate-900"> "Wie hast du das aufgesetzt?"</strong> – 
                  und die Antwort passt nicht in eine WhatsApp-Nachricht.
                </p>
                <p>
                  Ich bin kein AI-Influencer. Ich bin jemand, der das Zeug jeden Tag benutzt 
                  und dir zeigen kann, wie es in der Praxis funktioniert. Mit allen Ecken und Kanten.
                </p>
              </div>
            </div>

            {/* Three Cards: No BS, Real Practice, Direct Line */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0">🎯</div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 mb-2">Kein Bullshit</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Ich sage dir was funktioniert und was nicht. Keine übertriebenen Versprechen, 
                      keine "10x Productivity"-Claims.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0">🔧</div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 mb-2">Echte Praxis</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Du siehst mein echtes Setup, nicht eine polierte Demo. 
                      Inklusive der Stellen, wo es mal nicht funktioniert hat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0">💬</div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 mb-2">Direkte Linie</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Fragen? Schreib mir einfach. Ich bin kein großes Unternehmen 
                      mit Support-Ticket-System. Ich bin eine Person mit einer Email-Adresse.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm text-center">
                <div className="font-display font-bold text-slate-900 text-xl">50k+</div>
                <div className="text-slate-700 text-sm">Tasks von Owen</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm text-center">
                <div className="font-display font-bold text-slate-900 text-xl">Seit 2021</div>
                <div className="text-slate-700 text-sm">Owen im Einsatz</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
