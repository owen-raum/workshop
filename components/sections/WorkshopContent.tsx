import { CheckCircle2, Sparkles, MonitorPlay, ShieldAlert, Compass, Clock, CheckCheck } from 'lucide-react';

export function WorkshopContent() {
  const modules = [
    {
      title: 'Was kann OpenClaw wirklich?',
      duration: '25 Min',
      icon: Sparkles,
      gradient: 'from-blue-500 to-cyan-500',
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
      gradient: 'from-purple-500 to-pink-500',
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
      gradient: 'from-orange-500 to-red-500',
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
      gradient: 'from-green-500 to-emerald-500',
      points: [
        'Für wen sich das lohnt – und für wen nicht',
        'Der realistische Aufwand zum Einsieg',
        'Deine Fragen, meine ehrlichen Antworten',
        'Nächste Schritte wenn du weitermachen willst',
      ],
    },
  ];

  return (
    <section id="content" className="relative w-full section-padding bg-[#0a0a0a] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      
      <div className="relative z-10 container-custom">
        {/* Header */}
        <div className="reveal mb-20 text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="gradient-text">90 Minuten.</span>
            <span className="text-white"> Kein Hype.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
            Ich zeige dir was AI-Agents können, wo sie versagen, und ob das für dich relevant ist.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={index}
                className="reveal card-hover glass-strong rounded-3xl p-8 flex flex-col gap-6 group relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative z-10 flex flex-col gap-6">
                  {/* Icon + Duration */}
                  <div className="flex items-center justify-between">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${module.gradient} shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-bold text-white">{module.duration}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {module.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-3">
                    {module.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recording Badge */}
        <div className="reveal glass-strong rounded-3xl p-8 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-green-500/20">
                <CheckCheck className="w-6 h-6 text-green-400" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-white text-lg">Workshop wird aufgezeichnet</span>
            </div>
            <span className="text-gray-400">
              Du bekommst Zugriff auf die Aufnahme + Slides
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
