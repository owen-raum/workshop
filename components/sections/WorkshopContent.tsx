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
    <section
      id="content"
      className="relative w-full section-padding px-6 sm:px-8 md:px-16 lg:px-24 bg-[var(--bg-primary)]"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">
        <div className="max-w-xl">
          <div className="mb-10 md:mb-14">
            <h2 className="reveal font-display text-4xl md:text-5xl lg:text-[52px] font-bold leading-tight text-gray-900 mb-6">
              90 Minuten. Kein Hype.
            </h2>
            <p className="reveal text-lg md:text-xl text-gray-600 leading-relaxed">
              Ich zeige dir was AI-Agents können, wo sie versagen, und ob das für dich relevant ist.
            </p>
          </div>

          <div className="reveal bg-transparent rounded-2xl p-6 md:p-8 border border-[rgba(34,34,34,0.12)]">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={index}
                className="reveal group bg-transparent flex flex-col gap-4 rounded-2xl p-6 border border-[rgba(34,34,34,0.12)] transition-all duration-300 hover:shadow-[0_22px_60px_-46px_rgba(17,17,17,0.45)] hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-1">
                  <Icon
                    className="w-10 h-10 text-zinc-700 transition-colors duration-300 group-hover:text-[color:var(--prism-violet)]"
                    strokeWidth={2}
                  />
                  <span className="text-sm font-semibold text-gray-900 bg-white/70 backdrop-blur-sm rounded-full px-4 py-1.5 border border-[rgba(34,34,34,0.10)]">
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
      </div>
    </section>
  );
}
