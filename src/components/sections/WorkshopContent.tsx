export function WorkshopContent() {
  const modules = [
    {
      title: 'Was kann OpenClaw wirklich?',
      duration: '25 Min',
      points: [
        'Der Unterschied zwischen Chatbot und Agent',
        'Echte Use Cases: Mails, Kalender, Code, Messaging',
        'Was heute schon funktioniert – und was noch nicht',
        'Warum 90% der "AI-Agent"-Demos Bullshit sind',
      ],
    },
    {
      title: 'Live-Demo: Andys Production Setup',
      duration: '25 Min',
      points: [
        'Andys Production Setup – läuft seit Monaten, kein Demo',
        'Wie Owen meinen Tag strukturiert',
        'Fehler die ich gemacht hab (und wie du sie vermeidest)',
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
        'Wann OpenClaw keinen Sinn macht',
      ],
    },
    {
      title: 'Ist das was für dich?',
      duration: '20 Min',
      points: [
        'Für wen sich das lohnt – und für wen nicht',
        'Der realistische Aufwand zum Einstieg',
        'Deine Fragen, meine ehrlichen Antworten',
        'Nächste Schritte wenn du weitermachen willst',
      ],
    },
  ];

  return (
    <section id="content" className="py-20 md:py-32 lg:py-40 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 px-2">
            90 Minuten. Kein Hype.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-700 max-w-3xl mx-auto leading-relaxed px-4">
            Ich zeige dir was AI-Agents können, wo sie versagen, 
            und ob das für dich relevant ist.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-orange-400 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-navy-600 rounded-xl flex items-center justify-center text-white font-bold text-lg md:text-xl">
                  {index + 1}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 md:mb-4 gap-2">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">
                      {module.title}
                    </h3>
                    <span className="text-xs md:text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full self-start">
                      {module.duration}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {module.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 md:gap-3 text-slate-700 text-sm md:text-base">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 border border-slate-200">
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-center text-center sm:text-left">
            <div className="flex items-center gap-2 text-slate-700">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="font-medium text-sm md:text-base">Workshop wird aufgezeichnet</span>
            </div>
            <div className="text-slate-600 text-sm md:text-base">
              Du bekommst Zugriff auf die Aufnahme + Slides
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
