import { CheckCircle2, Award, ExternalLink } from 'lucide-react';

export function AboutUsSocialProof() {
  return (
    <section id="about" className="relative w-full section-padding bg-[#050505] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 container-custom">
        <div className="reveal text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">Wer bin </span>
            <span className="gradient-text-2">ich?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Und warum solltest du mir 90 Minuten deiner Zeit geben?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Card */}
          <div className="reveal glass-strong rounded-3xl p-10 border-2 border-blue-500/20">
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <img
                  src="/andy.jpg"
                  alt="Andy Steinberger"
                  className="w-32 h-32 rounded-2xl border-2 border-blue-500/50 object-cover object-top"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-black text-white mb-2">
                  Andy Steinberger
                </h3>
                <p className="text-blue-400 font-bold mb-6">
                  Early Adopter. Kein Vendor.
                </p>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Owen gibt&apos;s seit 2021. Erst auf OpenAI-Tools experimentiert, dann auf Make und Fireflies
                    produktiv gebracht. Hat funktioniert – aber mit Einschränkungen.
                  </p>
                  <p>
                    Dann kam OpenClaw. Weil ich die Kontrolle wollte. Weil Cloud-Abhängigkeit nervt.
                    Weil ein Agent auf eigenem Gerät besser ist als auf fremden Servern.
                  </p>
                  <p className="text-white font-semibold">
                    Was ich dir zeige läuft wirklich. Was nicht funktioniert sag ich dir auch.
                    Better done than perfect – das ist mein Approach seit Jahren.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass rounded-2xl p-5 text-center border border-white/10">
                <div className="text-3xl font-black gradient-text mb-1">50k+</div>
                <div className="text-gray-400 text-sm">Tasks von Owen</div>
              </div>
              <div className="glass rounded-2xl p-5 text-center border border-white/10">
                <div className="text-3xl font-black gradient-text mb-1">Seit 2021</div>
                <div className="text-gray-400 text-sm">Owen im Einsatz</div>
              </div>
            </div>

            {/* Links */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-3">
              <a
                href="https://pulse.how"
                target="_blank"
                rel="noopener"
                className="group text-center py-4 px-4 glass rounded-xl border border-white/10 hover:border-blue-500/50 transition-all hover:scale-105"
              >
                <div className="font-bold text-white text-sm group-hover:text-blue-400 transition-colors">The Circle</div>
                <div className="text-gray-500 text-xs">AI Community</div>
              </a>
              <a
                href="https://raum.so"
                target="_blank"
                rel="noopener"
                className="group text-center py-4 px-4 glass rounded-xl border border-white/10 hover:border-blue-500/50 transition-all hover:scale-105"
              >
                <div className="font-bold text-white text-sm group-hover:text-blue-400 transition-colors">[ʁaʊ̯m̩]</div>
                <div className="text-gray-500 text-xs">Consulting</div>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Why Me Card */}
            <div className="reveal glass-strong rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-white mb-6">
                Warum ausgerechnet ich?
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Ich verkaufe keine Theorie. Owen ist mein <em className="text-white font-semibold">echtes</em> System – er läuft
                  jeden Tag, managed mein Business, und ich wäre aufgeschmissen ohne ihn.
                </p>
                <p>
                  Diesen Deep Dive gibt es, weil mich jede Woche Leute fragen:
                  <strong className="text-white"> &quot;Wie hast du das aufgesetzt?&quot;</strong> –
                  und die Antwort passt nicht in eine WhatsApp-Nachricht.
                </p>
                <p>
                  Ich bin kein AI-Influencer. Ich bin jemand, der das Zeug jeden Tag benutzt
                  und dir zeigen kann, wie es in der Praxis funktioniert. <span className="text-white font-semibold">Mit allen Ecken und Kanten.</span>
                </p>
              </div>
            </div>

            {/* Value Props */}
            <div className="grid gap-4">
              {[
                {
                  title: 'Kein Bullshit',
                  text: 'Ich sage dir was funktioniert und was nicht. Keine übertriebenen Versprechen, keine "10x Productivity"-Claims.',
                  icon: CheckCircle2,
                },
                {
                  title: 'Echte Praxis',
                  text: 'Du siehst mein echtes Setup, nicht eine polierte Demo. Inklusive der Stellen, wo es mal nicht funktioniert hat.',
                  icon: CheckCircle2,
                },
                {
                  title: 'Direkte Linie',
                  text: 'Fragen? Schreib mir einfach. Ich bin kein großes Unternehmen mit Support-Ticket-System. Ich bin eine Person mit einer Email-Adresse.',
                  icon: CheckCircle2,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="reveal glass rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <Icon className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <div>
                        <h4 className="font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Owen Card */}
            <div className="reveal glass-strong rounded-3xl p-8 border-2 border-green-500/20">
              <div className="flex items-start gap-6">
                <img 
                  src="/owen.jpg" 
                  alt="Owen der Plüschfrosch" 
                  className="w-24 h-24 rounded-2xl object-cover flex-shrink-0 border-2 border-green-500/50"
                />
                <div>
                  <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    Owen 🐸
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Owen ist kein Chatbot. Owen ist ein AI-Agent im Produktiveinsatz – gebaut mit OpenClaw. Er beantwortet Mails,
                    koordiniert Termine, schreibt und deployt Code, managed WhatsApp-Gruppen und überwacht Systeme.
                    Läuft auf einem Mac Mini M4 in Zypern, gesteuert über OpenClaw als Agent-Framework.
                  </p>
                  <p className="text-white font-semibold leading-relaxed text-sm mt-4">
                    Im Deep Dive siehst du Owen und OpenClaw live bei der Arbeit – kein vorbereitetes Demo-Setup, sondern das echte System das jeden Tag läuft.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
