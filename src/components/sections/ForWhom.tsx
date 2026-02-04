export function ForWhom() {
  const perfectFor = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Du verbrennst Zeit mit Routine',
      description: 'Emails, Termine, Reports — alles wiederholt sich. Du weißt, dass es besser geht.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'ChatGPT war nur der Anfang',
      description: 'Du hast mit AI experimentiert. Jetzt willst du, dass sie tatsächlich arbeitet.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Du willst echte Ergebnisse',
      description: 'Keine Theorie, keine Demos. Du willst etwas bauen, das am nächsten Tag schon läuft.',
    },
  ];

  const notFor = [
    'Du erwartest einen Zauberstab (AI macht Arbeit, sie eliminiert sie nicht)',
    'Du hasst es, neue Tools zu lernen',
    'Du willst nur mitreden können statt umzusetzen',
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
            💡 Kein Vorwissen nötig — aber die Bereitschaft, zu lernen und umzusetzen.
          </p>
        </div>
      </div>
    </section>
  );
}
