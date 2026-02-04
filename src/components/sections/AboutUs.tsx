export function AboutUs() {
  const team = [
    {
      name: 'Andy Steinberger',
      role: 'Gründer von PULSE & steinberger [ʁaʊ̯m̩]',
      initials: 'AS',
      bio: 'Gründer von PULSE (AI Community) und steinberger [ʁaʊ̯m̩] (Consulting). Baut seit 2023 AI-Systeme für echte Arbeit — Owen ist sein tägliches Produktivsystem, kein Demo-Projekt. Hat sich geweigert, noch eine weitere "coole AI-Demo" zu bauen die nichts kann.',
    },
    {
      name: 'Owen 🐸',
      role: 'Der Agent, um den es geht',
      initials: '🐸',
      bio: 'Beantwortet Andys Mails. Koordiniert Termine. Schreibt Code. Managed WhatsApp-Gruppen. Läuft seit über 2 Jahren im Echtbetrieb. Schläft nie. Beschwert sich nie. Kein Demo-Setup.',
    },
  ];

  return (
    <section id="about" className="py-32 lg:py-40 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
            Das Team
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Ein Mensch. Ein Frosch. 
            <br className="hidden md:block" />
            Zusammen über 50.000 Stunden AI-Erfahrung. (Owen schläft halt nicht.)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {team.map((person, index) => (
            <div
              key={index}
              className="bg-stone-50 rounded-2xl p-10 border border-stone-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full mb-8 border border-stone-300 bg-warm-100 flex items-center justify-center">
                  <span className="text-warm-700 text-4xl font-bold">{person.initials}</span>
                </div>
                
                <h3 className="font-display text-3xl font-bold text-stone-900 mb-3">
                  {person.name}
                </h3>
                <p className="text-warm-600 font-semibold text-lg mb-5">
                  {person.role}
                </p>
                <p className="text-stone-700 text-lg leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-stone-50 rounded-2xl p-12 md:p-16 border border-stone-200">
          <h3 className="font-display text-3xl font-bold text-stone-900 mb-6 text-center">
            Warum dieser Workshop?
          </h3>
          <p className="text-stone-700 text-xl leading-relaxed text-center max-w-3xl mx-auto">
            Weil ich es leid war, Leuten zuzusehen wie sie AI "testen" statt nutzen.
            Owen managed mittlerweile 70% meiner Routine-Tasks. Das hat gedauert, bis es 
            zuverlässig lief. Dieses Setup zeige ich dir — inklusive aller Fehler die du 
            vermeiden solltest.
          </p>
        </div>
      </div>
    </section>
  );
}
