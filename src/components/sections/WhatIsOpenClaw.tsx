export function WhatIsOpenClaw() {
  const features = [
    {
      title: 'WhatsApp-Messages schreiben',
      description: 'An Kunden, ans Team, automatisch oder auf Command',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: 'Browser steuern',
      description: 'Formulare ausfüllen, Screenshots machen, Websites scrapen',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: 'Mein gesamtes Leben durchsuchen',
      description: 'Mails, Kalender, Notizen, Files – alles an einem Ort',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: 'Accounts erstellen',
      description: 'Anmeldungen, Registrierungen, Setups',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
    },
    {
      title: 'Geld ausgeben',
      description: 'Wenn ich\'s ihm erlaube (Bestellungen, Buchungen, Zahlungen)',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      title: 'Sub-Agents spawnen',
      description: 'Parallele Tasks, die gleichzeitig laufen',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="what" className="py-20 md:py-32 lg:py-40 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 px-2">
            Was ist OpenClaw?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            ChatGPT gibt dir Antworten. OpenClaw führt sie aus. Klingt abstrakt? Live-Demo kommt im Deep Dive.
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="mb-12 md:mb-16 max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl border-2 border-slate-300 flex items-center justify-center overflow-hidden">
            <div className="text-center p-6 md:p-8">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 bg-slate-300 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-slate-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="font-display text-xl md:text-2xl font-bold text-slate-700 mb-2">
                Live-Demo im Deep Dive
              </p>
              <p className="text-sm md:text-base text-slate-500">
                Hier siehst du später, wie Owen in Aktion aussieht
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8 md:mb-10 text-center px-2">
            Was OpenClaw kann
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4 md:mb-5">
                  {feature.icon}
                </div>
                <h4 className="font-display font-bold text-slate-900 mb-2 md:mb-3 text-base md:text-lg">
                  {feature.title}
                </h4>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
