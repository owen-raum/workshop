export function SocialProof() {
  return (
    <section id="testimonials" className="py-32 lg:py-40 px-4 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
            Warum ausgerechnet ich?
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Faire Frage. Hier ist meine Antwort.
          </p>
        </div>

        {/* Honest Pitch */}
        <div className="bg-white rounded-2xl p-10 md:p-14 border border-stone-200 mb-10">
          <div className="space-y-6 text-stone-700 text-xl leading-relaxed max-w-3xl mx-auto">
            <p>
              Ich verkaufe keine Theorie. Owen ist mein <em>echtes</em> System — er läuft 
              jeden Tag, managed mein Business, und ich wäre aufgeschmissen ohne ihn.
            </p>
            <p>
              Diesen Workshop gibt es, weil mich jede Woche Leute fragen: 
              <strong className="text-stone-900"> "Wie hast du das aufgesetzt?"</strong> — 
              und die Antwort passt nicht in eine WhatsApp-Nachricht.
            </p>
            <p>
              Ich bin kein AI-Influencer. Ich bin jemand, der das Zeug jeden Tag benutzt 
              und dir zeigen kann, wie es in der Praxis funktioniert. Mit allen Ecken und Kanten.
            </p>
          </div>
        </div>

        {/* What you get from Andy specifically */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 border border-stone-200">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="font-display font-bold text-stone-900 text-lg mb-3">Kein Bullshit</h3>
            <p className="text-stone-600 leading-relaxed">
              Ich sage dir was funktioniert und was nicht. Keine übertriebenen Versprechen, 
              keine "10x Productivity"-Claims.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-stone-200">
            <div className="text-3xl mb-4">🔧</div>
            <h3 className="font-display font-bold text-stone-900 text-lg mb-3">Echte Praxis</h3>
            <p className="text-stone-600 leading-relaxed">
              Du siehst mein echtes Setup, nicht eine polierte Demo. 
              Inklusive der Stellen, wo es mal nicht funktioniert hat.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-stone-200">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="font-display font-bold text-stone-900 text-lg mb-3">Direkte Linie</h3>
            <p className="text-stone-600 leading-relaxed">
              Fragen? Schreib mir einfach. Ich bin kein großes Unternehmen 
              mit Support-Ticket-System. Ich bin eine Person mit einer Email-Adresse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
