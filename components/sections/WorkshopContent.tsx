import { CheckCircle2, Sparkles, MonitorPlay, ShieldAlert, Compass } from 'lucide-react';

export function WorkshopContent() {
  const modules = [
    {
      title: 'Was kann OpenClaw wirklich?',
      duration: '25 Min',
      icon: Sparkles,
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
      icon: MonitorPlay,
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
      icon: ShieldAlert,
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
      icon: Compass,
      points: [
        'Für wen sich das lohnt – und für wen nicht',
        'Der realistische Aufwand zum Einstieg',
        'Deine Fragen, meine ehrlichen Antworten',
        'Nächste Schritte wenn du weitermachen willst',
      ],
    },
  ];

  return (
    <section id="content" className="w-full py-20 md:py-24 px-8 md:px-16 lg:px-24 bg-[#F1EFEB]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-4xl">
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-[52px] font-bold leading-tight text-gray-900 mb-6">
            90 Minuten. Kein Hype.
          </h2>
          <p className="reveal text-lg md:text-xl text-gray-600 leading-relaxed">
            Ich zeige dir was AI-Agents können, wo sie versagen, und ob das für dich relevant ist.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={index}
                className="reveal bg-transparent flex flex-col gap-4 rounded-xl p-6 border border-[rgba(34,34,34,0.12)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-10 h-10 text-gray-700" strokeWidth={2} />
                  <span className="text-sm font-semibold text-gray-900 bg-gray-100 rounded-full px-4 py-1.5">
                    {module.duration}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    {module.title}
                  </h3>
                  <ul className="space-y-2">
                    {module.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-gray-500 text-sm leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-gray-500 mt-0.5" strokeWidth={2} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-10 bg-transparent rounded-2xl p-6 md:p-8 border border-[rgba(34,34,34,0.12)]">
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-center text-center sm:text-left">
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-gray-700" strokeWidth={2} />
              <span className="font-medium text-sm md:text-base">Workshop wird aufgezeichnet</span>
            </div>
            <div className="text-gray-600 text-sm md:text-base">
              Du bekommst Zugriff auf die Aufnahme + Slides
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
