export function OwenTeam() {
  const team = [
    {
      emoji: '🧑‍💻',
      name: 'Linus',
      role: 'Code & Pull Requests',
      description: 'Baut Features, fixt Bugs, reviewed Code',
    },
    {
      emoji: '🐱',
      name: 'Milo',
      role: 'Content & Research',
      description: 'Recherchiert, schreibt Drafts, sammelt Infos',
    },
    {
      emoji: '🦊',
      name: 'Nora',
      role: 'Marketing & Strategie',
      description: 'Conversion, Copy, Kampagnen',
    },
    {
      emoji: '🔍',
      name: 'Scott',
      role: 'QA & Testing',
      description: 'Testet, findet Bugs, prüft Qualität',
    },
    {
      emoji: '🏛️',
      name: 'Mies',
      role: 'UI/UX & Design',
      description: 'Layouts, Styling, User Experience',
    },
    {
      emoji: '🐙',
      name: 'Otto',
      role: 'Operations',
      description: 'Koordiniert das Team, managed Tasks',
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24 bg-[#1A1A1A]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="reveal text-xs uppercase tracking-[0.2em] text-white/50 mb-4">
            Das Team dahinter
          </p>
          <h2 className="reveal font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Owen arbeitet nicht alleine
          </h2>
          <p className="reveal text-white/70 text-lg max-w-2xl mx-auto">
            Er delegiert. Wenn Owen einen PR braucht, briefed er Linus. 
            Wenn er Content braucht, schickt er Milo los.
          </p>
        </div>

        <div className="reveal grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 text-center hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl md:text-5xl mb-3">{member.emoji}</div>
              <h3 className="font-display font-semibold text-white text-lg mb-1">
                {member.name}
              </h3>
              <p className="text-white/60 text-sm font-medium mb-2">
                {member.role}
              </p>
              <p className="text-white/40 text-xs leading-relaxed hidden md:block">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        <p className="reveal text-center text-white/50 text-sm mt-8 italic">
          Im Deep Dive siehst du wie Owen sein Team koordiniert – live.
        </p>
      </div>
    </section>
  );
}
