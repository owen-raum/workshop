import Image from 'next/image';
import {
  MessageSquare,
  Globe,
  Search,
  UserPlus,
  CreditCard,
  Users,
} from 'lucide-react';

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
      title: 'Aufgaben an sein Team delegieren',
      description: 'Owen hat eigene Mitarbeiter, die parallel arbeiten',
      icon: Users,
    },
  ];

  return (
    <section id="what" className="w-full py-16 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24 bg-[#F1EFEB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="reveal font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-gray-900 mb-3 md:mb-6">
            Was ist OpenClaw?
          </h2>
          <p className="reveal text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ChatGPT gibt dir Antworten. OpenClaw führt sie aus. Klingt abstrakt? Live-Demo kommt im Deep Dive.
          </p>
        </div>

        <div className="reveal bg-[#1A1A1A] rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4">Live Demo</p>
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Ein AI-Agent, der wirklich handelt.
              </h3>
              <p className="text-white/70 leading-relaxed">
                Du siehst wie Owen in Echtzeit Mails beantwortet, Code deployed und WhatsApp managed.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/owen-demo.jpg"
                alt="Owen AI Agent Live Demo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="reveal font-display text-2xl md:text-3xl font-semibold text-gray-900 mb-12 text-center">
            Was OpenClaw kann
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="reveal bg-transparent flex flex-col gap-4 rounded-xl p-6 border border-[rgba(34,34,34,0.12)]"
                >
                  <Icon className="w-8 h-8 text-zinc-700" strokeWidth={1.5} />
                  <div className="flex flex-col gap-2">
                    <h4 className="font-display font-medium text-gray-900 text-base md:text-lg">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                      {feature.description}
                    </p>
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
