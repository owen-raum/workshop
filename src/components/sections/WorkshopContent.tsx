export function WorkshopContent() {
  const modules = [
    {
      title: 'Was können AI-Agents wirklich?',
      duration: '25 Min',
      points: [
        'Der Unterschied zwischen Chatbot und Agent',
        'Echte Use Cases: Mails, Kalender, Code, Messaging',
        'Was heute schon funktioniert — und was noch nicht',
        'Warum 90% der "AI-Agent"-Demos Bullshit sind',
      ],
    },
    {
      title: 'Live-Demo: Owen in Aktion',
      duration: '25 Min',
      points: [
        'Mein echtes System, kein vorbereitetes Demo',
        'Wie Owen meinen Tag strukturiert',
        'Wo es manchmal schief geht (ja, passiert)',
        'Der Unterschied zwischen Theorie und Alltag',
      ],
    },
    {
      title: 'Risiken & Grenzen',
      duration: '20 Min',
      points: [
        'Was kann schief gehen? (Spoiler: einiges)',
        'Datenschutz: Wo landen deine Daten?',
        'Kosten: Was kostet das wirklich pro Monat?',
        'Wann AI-Agents keinen Sinn machen',
      ],
    },
    {
      title: 'Ist das was für dich?',
      duration: '20 Min',
      points: [
        'Für wen sich das lohnt — und für wen nicht',
        'Der realistische Aufwand zum Einstieg',
        'Deine Fragen, meine ehrlichen Antworten',
        'Nächste Schritte wenn du weitermachen willst',
      ],
    },
  ];

  return (
    <section id="content" className="py-32 lg:py-40 px-4 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
            90 Minuten. Kein Hype.
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Ich zeige dir was AI-Agents können, wo sie versagen, 
            und ob das für dich relevant ist.
          </p>
        </div>

        <div className="space-y-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-stone-200"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-warm-200 rounded-xl flex items-center justify-center text-warm-800 font-bold text-xl">
                  {index + 1}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-stone-900">
                      {module.title}
                    </h3>
                    <span className="text-sm font-medium text-stone-600 bg-stone-100 px-3 py-1 rounded-full">
                      {module.duration}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {module.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3 text-stone-600">
                        <svg className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-stone-100 rounded-2xl p-8 border border-stone-200">
          <div className="flex items-center gap-4 justify-center flex-wrap">
            <div className="flex items-center gap-2 text-stone-700">
              <svg className="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Workshop wird aufgezeichnet</span>
            </div>
            <div className="text-stone-600">
              Du bekommst Zugriff auf die Aufnahme + Slides
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
