import { CheckCircle2, HelpCircle, AlertTriangle, Target, X } from 'lucide-react';

export function ForWhom() {
  const perfectFor = [
    {
      icon: HelpCircle,
      title: 'Du willst verstehen, nicht nur glauben',
      description: 'Du hörst überall "AI-Agents" aber niemand zeigt dir ein echtes System im Einsatz.',
    },
    {
      icon: AlertTriangle,
      title: 'Du willst die Risiken kennen',
      description: 'Bevor du Zeit investierst, willst du wissen was schief gehen kann und was es wirklich kostet.',
    },
    {
      icon: Target,
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
    <section id="whom" className="w-full section-padding px-6 sm:px-8 md:px-16 lg:px-24 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-[52px] font-bold text-gray-900 mb-4">
            Ist das was für dich?
          </h2>
          <p className="reveal text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ehrliche Antwort: Kommt drauf an.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="reveal text-2xl font-medium text-gray-900 mb-6 text-center">
            ✅ Perfekt für dich, wenn du...
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {perfectFor.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="reveal bg-transparent flex flex-col gap-4 rounded-xl p-6 border border-[rgba(34,34,34,0.12)] transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <Icon className="w-8 h-8 text-zinc-700" strokeWidth={2} />
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-medium text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="reveal text-2xl font-medium text-gray-900 mb-6 text-center">
            ❌ Nicht für dich, wenn du...
          </h3>
          <div className="reveal bg-transparent rounded-2xl p-6 md:p-8 border border-[rgba(34,34,34,0.12)]">
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3 md:gap-4">
                  <X className="w-5 h-5 text-gray-500 mt-0.5" strokeWidth={2} />
                  <span className="text-gray-700 text-base md:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal mt-10 text-center bg-transparent rounded-2xl p-6 md:p-8 border border-[rgba(34,34,34,0.12)]">
          <p className="text-base md:text-lg text-gray-700 font-medium px-2">
            💡 Kein technisches Vorwissen nötig – nur echtes Interesse daran zu verstehen, was AI-Agents können und was nicht.
          </p>
        </div>
      </div>
    </section>
  );
}
