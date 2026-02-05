import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export function AboutUsSocialProof() {
  return (
    <section id="about" className="w-full py-20 md:py-24 px-8 md:px-16 lg:px-24 bg-[#F1EFEB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-[52px] font-bold text-gray-900 mb-6">
            Wer bin ich?
          </h2>
          <p className="reveal text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Und warum solltest du mir 90 Minuten deiner Zeit geben?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="reveal bg-transparent rounded-3xl p-8 md:p-10 border border-[rgba(34,34,34,0.12)]">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <Image
                  src="/andy.jpg"
                  alt="Andy Steinberger"
                  width={144}
                  height={144}
                  className="w-32 h-32 rounded-2xl border border-[rgba(34,34,34,0.12)] object-cover object-top"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-display text-2xl font-semibold text-gray-900 mb-1">
                  Andy Steinberger
                </h3>
                <p className="text-gray-600 font-medium mb-4">
                  Early Adopter. Kein Vendor.
                </p>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>
                    Owen gibt&apos;s seit 2021. Erst auf OpenAI-Tools experimentiert, dann auf Make und Fireflies
                    produktiv gebracht. Hat funktioniert – aber mit Einschränkungen.
                  </p>
                  <p>
                    Dann kam OpenClaw. Weil ich die Kontrolle wollte. Weil Cloud-Abhängigkeit nervt.
                    Weil ein Agent auf eigenem Gerät besser ist als auf fremden Servern.
                  </p>
                  <p>
                    Was ich dir zeige läuft wirklich. Was nicht funktioniert sag ich dir auch.
                    Better done than perfect – das ist mein Approach seit Jahren.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[rgba(34,34,34,0.12)] p-4 text-center">
                <div className="font-display font-semibold text-gray-900 text-xl">50k+</div>
                <div className="text-gray-500 text-sm">Tasks von Owen</div>
              </div>
              <div className="rounded-2xl border border-[rgba(34,34,34,0.12)] p-4 text-center">
                <div className="font-display font-semibold text-gray-900 text-xl">Seit 2021</div>
                <div className="text-gray-500 text-sm">Owen im Einsatz</div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[rgba(34,34,34,0.12)] grid grid-cols-2 gap-3">
              <a
                href="https://pulse.how"
                target="_blank"
                rel="noopener"
                className="text-center py-3 px-4 bg-transparent rounded-lg border border-[rgba(34,34,34,0.12)] hover:border-gray-300 transition-colors"
              >
                <div className="font-display font-semibold text-gray-900 text-sm">The Circle</div>
                <div className="text-gray-500 text-xs">AI Community</div>
              </a>
              <a
                href="https://raum.so"
                target="_blank"
                rel="noopener"
                className="text-center py-3 px-4 bg-transparent rounded-lg border border-[rgba(34,34,34,0.12)] hover:border-gray-300 transition-colors"
              >
                <div className="font-display font-semibold text-gray-900 text-sm">[ʁaʊ̯m̩]</div>
                <div className="text-gray-500 text-xs">Consulting</div>
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <div className="reveal bg-transparent rounded-3xl p-8 md:p-10 border border-[rgba(34,34,34,0.12)]">
              <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6">
                Warum ausgerechnet ich?
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Ich verkaufe keine Theorie. Owen ist mein <em>echtes</em> System – er läuft
                  jeden Tag, managed mein Business, und ich wäre aufgeschmissen ohne ihn.
                </p>
                <p>
                  Diesen Deep Dive gibt es, weil mich jede Woche Leute fragen:
                  <strong className="text-gray-900"> &quot;Wie hast du das aufgesetzt?&quot;</strong> –
                  und die Antwort passt nicht in eine WhatsApp-Nachricht.
                </p>
                <p>
                  Ich bin kein AI-Influencer. Ich bin jemand, der das Zeug jeden Tag benutzt
                  und dir zeigen kann, wie es in der Praxis funktioniert. Mit allen Ecken und Kanten.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: 'Kein Bullshit',
                  text: 'Ich sage dir was funktioniert und was nicht. Keine übertriebenen Versprechen, keine "10x Productivity"-Claims.',
                },
                {
                  title: 'Echte Praxis',
                  text: 'Du siehst mein echtes Setup, nicht eine polierte Demo. Inklusive der Stellen, wo es mal nicht funktioniert hat.',
                },
                {
                  title: 'Direkte Linie',
                  text: 'Fragen? Schreib mir einfach. Ich bin kein großes Unternehmen mit Support-Ticket-System. Ich bin eine Person mit einer Email-Adresse.',
                },
              ].map((item) => (
                <div key={item.title} className="reveal bg-transparent rounded-2xl p-6 border border-[rgba(34,34,34,0.12)]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-700 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-display font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal bg-[#1A1A1A] rounded-3xl p-8 text-white">
              <div className="flex items-start gap-6">
                <img 
                  src="/owen.jpg" 
                  alt="Owen der Plüschfrosch" 
                  className="w-24 h-24 rounded-2xl object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="text-xl font-semibold mb-3">Owen 🐸</h4>
                  <p className="text-white/80 leading-relaxed">
                    Owen ist kein Chatbot. Owen ist ein AI-Agent im Produktiveinsatz. Er beantwortet Mails,
                    koordiniert Termine, schreibt und deployt Code, managed WhatsApp-Gruppen und überwacht Systeme.
                    Läuft auf einem Mac Mini M4 in Zypern – powered by OpenClaw.
                  </p>
                  <p className="text-white/80 leading-relaxed mt-4">
                    Im Deep Dive siehst du Owen live bei der Arbeit – kein vorbereitetes Demo-Setup, sondern das echte System.
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
