import { CheckCircle, XCircle, Lightbulb } from 'lucide-react';

export function ForWhom() {
  const goodFor = [
    {
      icon: '🎯',
      title: 'Du willst verstehen, nicht nur glauben',
      description: 'Du hörst überall "AI-Agents" aber niemand zeigt dir ein echtes System im Einsatz.',
    },
    {
      icon: '⚠️',
      title: 'Du willst die Risiken kennen',
      description: 'Bevor du Zeit investierst, willst du wissen was schief gehen kann und was es wirklich kostet.',
    },
    {
      icon: '💡',
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
    <section className="relative w-full section-padding bg-[#0a0a0a] overflow-hidden">
      <div className="relative z-10 container-custom">
        {/* Header */}
        <div className="reveal text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="text-white">Ist das was für </span>
            <span className="gradient-text">dich?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 italic">
            "Ehrliche Antwort: Kommt drauf an."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Perfect For */}
          <div className="reveal">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-400" />
              Perfekt für dich, wenn du...
            </h3>
            <div className="space-y-6">
              {goodFor.map((item, index) => (
                <div
                  key={index}
                  className="glass-strong rounded-2xl p-6 card-hover group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{item.icon}</span>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Not For */}
          <div className="reveal" style={{ animationDelay: '200ms' }}>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <XCircle className="w-8 h-8 text-red-400" />
              Nicht für dich, wenn du...
            </h3>
            <div className="glass-strong rounded-2xl p-8">
              <ul className="space-y-5">
                {notFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 text-gray-300">
                    <XCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info Box */}
            <div className="mt-8 glass rounded-2xl p-6 border-l-4 border-blue-500">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Kein technisches Vorwissen nötig</strong> – nur echtes Interesse daran zu verstehen, was AI-Agents können und was nicht.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
