export function AboutUs() {
  const team = [
    {
      name: 'Andy Steinberger',
      role: 'Der, der Owen gebaut hat',
      initials: 'AS',
      bio: 'Baut seit 2023 AI-Systeme für echte Arbeit. Hat sich geweigert, noch eine Demo zu bauen die nur cool aussieht aber nichts kann.',
    },
    {
      name: 'Owen 🐸',
      role: 'Der Agent, um den es geht',
      initials: '🐸',
      bio: 'Beantwortet Andys Mails. Koordiniert Termine. Schreibt Code. Managed WhatsApp-Gruppen. Schläft nie. Beschwert sich nie.',
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
            Das Team
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Ein Mensch. Ein Frosch. 
            <br className="hidden md:block" />
            Zusammen über 50.000 Stunden AI-Erfahrung. (Owen schläft halt nicht.)
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
            Warum dieser Workshop?
          </h3>
          <p className="text-slate-800 text-xl leading-relaxed text-center max-w-3xl mx-auto font-medium">
            Weil ich es leid war, Leuten zuzusehen wie sie AI "testen" statt nutzen.
            Owen managed mittlerweile 70% meiner Routine-Tasks. Das hat gedauert, bis es 
            zuverlässig lief. Dieses Setup zeige ich dir — inklusive aller Fehler die du 
            vermeiden solltest.
          </p>
        </div>
      </div>
    </section>
  );
}
