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
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      
      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Wer steckt dahinter?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Keine Agentur. Kein Corporate-Speak. Nur echte Menschen (und ein Frosch), 
            die AI wirklich verstehen und praktisch einsetzen.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {team.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:border-emerald-300 transition-all"
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-32 h-32 rounded-full mb-6 border-4 border-emerald-100 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">{person.initials}</span>
                </div>
                
                {/* Info */}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {person.name}
                </h3>
                <p className="text-emerald-600 font-semibold mb-4">
                  {person.role}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Story Box */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 border border-emerald-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
            Die Story
          </h3>
          <p className="text-slate-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Andy hat OpenClaw gebaut, weil er genug hatte von AI-Demos die cool aussehen, 
            aber im echten Leben nicht funktionieren. Owen ist das Ergebnis: Ein AI-Agent 
            der tatsächlich arbeitet, nicht nur redet. Jetzt zeigen wir dir, wie du das auch kannst.
          </p>
        </div>
      </div>
    </section>
  );
}
