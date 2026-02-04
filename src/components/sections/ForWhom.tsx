export function ForWhom() {
  const perfectFor = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Du willst verstehen, nicht nur glauben',
      description: 'Du hörst überall "AI-Agents" aber niemand zeigt dir ein echtes System im Einsatz.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: 'Du willst die Risiken kennen',
      description: 'Bevor du Zeit investierst, willst du wissen was schief gehen kann und was es wirklich kostet.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Du willst eine ehrliche Einschätzung',
      description: 'Macht das für mein Business überhaupt Sinn? Keine Verkaufs-Pitch, sondern echte Antwort.',
    },
  ];

  const notFor = [
    'Du willst nur den Hype mitnehmen ohne kritisch hinzuschauen',
    'Du suchst nach einer "alles wird automatisch"-Lösung',
    'Du hast keine 90 Minuten für eine ehrliche Bestandsaufnahme',
  ];

  return (
    <section id="whom" className="py-32 lg:py-40 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
            Ist das was für dich?
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Ehrliche Antwort: Kommt drauf an.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-stone-900 mb-8 text-center">
            ✅ Perfekt für dich, wenn du...
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {perfectFor.map((item, index) => (
              <div
                key={index}
                className="bg-stone-50 rounded-2xl p-6 border border-stone-200"
              >
                <div className="w-14 h-14 bg-sage-100 rounded-xl flex items-center justify-center text-sage-700 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-stone-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-900 mb-8 text-center">
            ❌ Nicht für dich, wenn du...
          </h3>
          <div className="bg-stone-50 rounded-2xl p-8 md:p-10 border border-stone-200">
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center">
                    <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-stone-700 text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center bg-stone-50 rounded-2xl p-8 border border-stone-200">
          <p className="text-lg text-stone-700 font-medium">
            💡 Kein technisches Vorwissen nötig — nur echtes Interesse daran zu verstehen, was AI-Agents können und was nicht.
          </p>
        </div>
      </div>
    </section>
  );
}
