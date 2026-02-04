export function ForWhom() {
  const perfectFor = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Unternehmer & Selbstständige',
      description: 'Du willst AI konkret in deinem Business einsetzen und echte Prozesse automatisieren.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Führungskräfte',
      description: 'Du musst AI verstehen, um strategische Entscheidungen für dein Team zu treffen.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Tech-affine Professionals',
      description: 'Du arbeitest bereits mit AI, willst aber die nächste Stufe erreichen.',
    },
  ];

  const notFor = [
    'Leute die Quick-Fixes erwarten (AI ist ein Tool, kein Zauberstab)',
    'Absolute Tech-Anfänger ohne Interesse zu lernen',
    'Unternehmen die nur "AI-Washing" betreiben wollen',
  ];

  return (
    <section id="whom" className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50/30" />
      
      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Für <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">wen</span> ist das?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Dieser Workshop ist nicht für jeden. Hier ist, ob er zu dir passt:
          </p>
        </div>

        {/* Perfect For */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            ✅ Perfekt für dich, wenn du...
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {perfectFor.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-emerald-200 hover:border-emerald-400 transition-all shadow-lg"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Not For */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            ❌ Nicht für dich, wenn du...
          </h3>
          <div className="bg-white rounded-2xl p-8 md:p-10 border-2 border-red-200 shadow-lg">
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-slate-700 text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
          <p className="text-lg text-slate-700 font-semibold">
            💡 Kein Vorwissen nötig — aber die Bereitschaft, zu lernen und umzusetzen.
          </p>
        </div>
      </div>
    </section>
  );
}
