export function AboutUs() {
  const team = [
    {
      name: 'Andy Steinberger',
      role: 'Founder & KI-Berater',
      initials: 'AS',
      bio: 'Hilft Unternehmen dabei, AI konkret und praktisch einzusetzen — ohne Tech-Bullshit, mit echtem Business-Impact.',
    },
    {
      name: 'Owen 🐸',
      role: 'AI-Assistent',
      initials: '🐸',
      bio: 'Plüschfrosch, OpenClaw-Agent und Andys rechte Hand. Lebt in WhatsApp, schreibt Code und managt den Alltag.',
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header - Premium Typography */}
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Wer steckt dahinter?
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Keine Agentur. Kein Corporate-Speak. Nur echte Menschen (und ein Frosch), 
            die AI wirklich verstehen und praktisch einsetzen.
          </p>
        </div>

        {/* Team Grid - Premium Cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {team.map((person, index) => (
            <div
              key={index}
              className="glass rounded-3xl shadow-2xl p-10 border border-white/50 hover-lift"
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-36 h-36 rounded-full mb-8 border-4 border-emerald-200 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-xl">
                  <span className="text-white text-5xl font-bold">{person.initials}</span>
                </div>
                
                {/* Info */}
                <h3 className="font-display text-3xl font-bold text-slate-900 mb-3">
                  {person.name}
                </h3>
                <p className="text-emerald-600 font-bold text-lg mb-5">
                  {person.role}
                </p>
                <p className="text-slate-700 text-lg leading-relaxed font-medium">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Story Box - Premium Glassmorphism */}
        <div className="glass rounded-3xl p-12 md:p-16 border border-emerald-200 shadow-2xl">
          <h3 className="font-display text-3xl font-bold text-slate-900 mb-6 text-center">
            Die Story
          </h3>
          <p className="text-slate-800 text-xl leading-relaxed text-center max-w-3xl mx-auto font-medium">
            Andy hat OpenClaw gebaut, weil er genug hatte von AI-Demos die cool aussehen, 
            aber im echten Leben nicht funktionieren. Owen ist das Ergebnis: Ein AI-Agent 
            der tatsächlich arbeitet, nicht nur redet. Jetzt zeigen wir dir, wie du das auch kannst.
          </p>
        </div>
      </div>
    </section>
  );
}
