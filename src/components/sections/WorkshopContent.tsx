export function WorkshopContent() {
  const modules = [
    {
      title: 'Was ist OpenClaw und wie funktioniert es?',
      duration: '20 Min',
      points: [
        'Die Architektur verstehen',
        'Tools, Agents und Sessions',
        'Unterschied zu ChatGPT/Claude',
        'Setup und erste Schritte',
      ],
    },
    {
      title: 'Live-Demo mit Owen',
      duration: '30 Min',
      points: [
        'Owen in Aktion sehen',
        'Reale Tasks ausführen lassen',
        'Message-Flow verstehen',
        'Debugging und Troubleshooting',
      ],
    },
    {
      title: 'Konkrete Use Cases für dein Business',
      duration: '25 Min',
      points: [
        'Customer Support automatisieren',
        'Content-Workflows optimieren',
        'Research und Monitoring',
        'Team-Kommunikation verbessern',
      ],
    },
    {
      title: 'Q&A Session',
      duration: '15 Min',
      points: [
        'Deine Fragen beantworten',
        'Individuelle Use Cases besprechen',
        'Next Steps definieren',
        'Community und Support',
      ],
    },
  ];

  return (
    <section id="content" className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/30 to-slate-50" />
      
      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Was du lernst
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            90 Minuten intensiv. Von den Grundlagen bis zu konkreten Use Cases 
            für dein Business. Live, interaktiv, mit echten Beispielen.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 hover:border-emerald-300 transition-all"
            >
              <div className="flex items-start gap-6">
                {/* Number Badge */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">
                      {module.title}
                    </h3>
                    <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                      {module.duration}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {module.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3 text-slate-600">
                        <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Bottom Info */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
          <div className="flex items-center gap-4 justify-center flex-wrap">
            <div className="flex items-center gap-2 text-slate-700">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="font-semibold">Workshop wird aufgezeichnet</span>
            </div>
            <div className="text-slate-600">
              Du bekommst Zugriff auf die Aufnahme + Slides
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
