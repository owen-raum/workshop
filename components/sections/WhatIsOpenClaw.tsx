import Image from 'next/image';
import { MessageSquare, Globe, Search, UserPlus, CreditCard, Users } from 'lucide-react';

export function WhatIsOpenClaw() {
  const features = [
    {
      title: 'WhatsApp-Messages schreiben',
      description: 'An Kunden, ans Team, automatisch oder auf Command',
      icon: MessageSquare,
    },
    {
      title: 'Browser steuern',
      description: 'Formulare ausfüllen, Screenshots machen, Websites scrapen',
      icon: Globe,
    },
    {
      title: 'Mein gesamtes Leben durchsuchen',
      description: 'Mails, Kalender, Notizen, Files – alles an einem Ort',
      icon: Search,
    },
    {
      title: 'Accounts erstellen',
      description: 'Anmeldungen, Registrierungen, Setups',
      icon: UserPlus,
    },
    {
      title: 'Geld ausgeben',
      description: "Wenn ich's ihm erlaube (Bestellungen, Buchungen, Zahlungen)",
      icon: CreditCard,
    },
    {
      title: 'Sub-Agents spawnen',
      description: 'Parallele Tasks, die gleichzeitig laufen',
      icon: Users,
    },
  ];

  return (
    <section id="what" className="w-full section-padding page-x section-tint">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="reveal font-display text-5xl md:text-6xl lg:text-[76px] font-extrabold leading-[0.95] tracking-[-0.05em] text-gray-900 mb-6">
            <span className="font-extrabold">Was</span>
            <span className="font-light"> ist OpenClaw?</span>
          </h2>
          <p className="reveal text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            ChatGPT gibt dir Antworten. OpenClaw führt sie aus. Klingt abstrakt? Live-Demo kommt im Deep Dive.
          </p>
        </div>

        <div className="reveal bg-[#1A1A1A] rounded-3xl p-8 md:p-12 mb-16 shadow-[0_70px_180px_-160px_rgba(0,0,0,0.95)] overflow-hidden relative">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full blur-3xl opacity-70"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, rgba(167,139,250,0.38), transparent 60%), radial-gradient(circle at 62% 42%, rgba(103,232,249,0.28), transparent 62%), radial-gradient(circle at 52% 72%, rgba(251,191,36,0.22), transparent 66%)',
            }}
          />

          <div className="relative grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/55 mb-4">Live Demo</p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 tracking-[-0.03em]">
                Ein AI-Agent, der wirklich handelt.
              </h3>
              <p className="text-white/75 leading-relaxed">
                Du siehst Owen live bei der Arbeit – kein vorbereitetes Demo-Setup, sondern das echte System.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
              <Image src="/owen-demo.jpg" alt="Owen AI Agent Live Demo" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="font-display text-lg font-semibold text-white">Live-Demo im Deep Dive</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="reveal font-display text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-[-0.04em] text-gray-900 mb-12 text-center">
            Was OpenClaw kann
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="reveal prism-card prism-card-hover flex flex-col gap-4 rounded-2xl p-7"
                >
                  <Icon className="w-9 h-9 text-zinc-700" strokeWidth={1.5} />
                  <div className="flex flex-col gap-2">
                    <h4 className="font-display font-extrabold tracking-[-0.03em] text-gray-900 text-base md:text-lg">
                      {feature.title}
                    </h4>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
