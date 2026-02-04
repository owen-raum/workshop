export function WhatIsOpenClaw() {
  const features = [
    {
      title: 'Messages versenden',
      description: 'WhatsApp, Telegram, Discord — direkt aus Claude heraus',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: 'Reminders setzen',
      description: 'Timer, Erinnerungen, automatische Follow-ups',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Files verwalten',
      description: 'Code schreiben, Dokumente erstellen, Git Commits',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Browser steuern',
      description: 'Screenshots, Testing, Formulare ausfüllen',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: 'Sub-Agents spawnen',
      description: 'Parallele Tasks, Background-Arbeit, Team-Work',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="what" className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header - Premium Typography */}
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Was ist OpenClaw?
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Das fehlende Puzzlestück zwischen AI und Realität. 
            <br className="hidden md:block" />
            Claude und GPT können denken — aber sie haben keine Hände.
          </p>
        </div>

        {/* Main Explanation - Glassmorphism */}
        <div className="glass rounded-3xl shadow-2xl p-10 md:p-14 mb-16 border border-white/50">
          <div className="max-w-none">
            <p className="text-slate-800 text-xl leading-relaxed mb-8">
              <strong className="text-emerald-600 text-2xl">OpenClaw übersetzt AI-Intentionen in reale Aktionen.</strong>
              <br />
              <br />
              Während ChatGPT und Claude dir nur Text zurückgeben können, kann ein OpenClaw-Agent 
              tatsächlich Messages versenden, Reminders setzen, Code schreiben, Browser steuern 
              und vieles mehr.
            </p>
            <p className="text-slate-800 text-xl leading-relaxed">
              🔐 <strong>Open Source.</strong> Läuft lokal auf deinem Gerät. 
              Deine Daten bleiben bei dir. Keine Cloud-Abhängigkeit.
            </p>
          </div>
        </div>

        {/* Features Grid - Premium Cards */}
        <div>
          <h3 className="font-display text-3xl font-bold text-slate-900 mb-10 text-center">
            Was OpenClaw kann
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 border border-white/50 shadow-xl hover-lift hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white mb-5 shadow-lg">
                  {feature.icon}
                </div>
                <h4 className="font-display font-bold text-slate-900 mb-3 text-lg">
                  {feature.title}
                </h4>
                <p className="text-slate-600 text-base font-medium">
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
