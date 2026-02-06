import {
  MessageSquare,
  Globe,
  Search,
  UserPlus,
  CreditCard,
  Users,
  Play,
} from 'lucide-react';

export function WhatIsOpenClaw() {
  const features = [
    {
      title: 'WhatsApp-Messages schreiben',
      description: 'An Kunden, ans Team, automatisch oder auf Command',
      icon: MessageSquare,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Browser steuern',
      description: 'Formulare ausfüllen, Screenshots machen, Websites scrapen',
      icon: Globe,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Mein gesamtes Leben durchsuchen',
      description: 'Mails, Kalender, Notizen, Files – alles an einem Ort',
      icon: Search,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Accounts erstellen',
      description: 'Anmeldungen, Registrierungen, Setups',
      icon: UserPlus,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Geld ausgeben',
      description: "Wenn ich's ihm erlaube (Bestellungen, Buchungen, Zahlungen)",
      icon: CreditCard,
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Sub-Agents spawnen',
      description: 'Parallele Tasks, die gleichzeitig laufen',
      icon: Users,
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="what" className="relative w-full section-padding bg-[#050505] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 container-custom">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="text-white">Was ist </span>
            <span className="gradient-text">OpenClaw</span>
            <span className="text-white">?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            ChatGPT gibt dir Antworten. OpenClaw führt sie aus. Klingt abstrakt? Live-Demo kommt im Deep Dive.
          </p>
        </div>

        {/* Live Demo Card */}
        <div className="reveal glass-strong rounded-3xl p-10 md:p-14 mb-20 border-2 border-blue-500/20">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                Live Demo
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Ein AI-Agent, der wirklich handelt.
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Du siehst Owen live bei der Arbeit – kein vorbereitetes Demo-Setup, sondern das echte System.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer">
              <img
                src="/owen-demo.jpg"
                alt="Owen AI Agent Live Demo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-lg font-bold text-white">
                  Live-Demo im Deep Dive
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div>
          <h3 className="reveal text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Was OpenClaw kann
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="reveal glass-strong rounded-2xl p-8 card-hover group"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
