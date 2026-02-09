import Image from 'next/image';

export function MeetOwen() {
  return (
    <section id="owen" className="w-full py-16 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24 bg-[#1A1A1A]">
      <div className="max-w-5xl mx-auto">
        <div className="reveal grid md:grid-cols-[300px,1fr] gap-8 md:gap-12 items-center">
          <div className="relative mx-auto md:mx-0">
            <Image
              src="/owen-demo.jpg"
              alt="Owen der AI-Agent am Mac Mini"
              width={300}
              height={400}
              className="rounded-3xl object-cover border border-white/10"
            />
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4">Meet the Agent</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Das ist Owen 🐸
            </h2>
            <div className="space-y-4 text-white/80 leading-relaxed text-lg">
              <p>
                Owen ist kein Chatbot. Owen ist ein AI-Agent im Produktiveinsatz – gebaut mit OpenClaw.
              </p>
              <p>
                Er beantwortet Mails, koordiniert Termine, schreibt und deployt Code, 
                managed WhatsApp-Gruppen und überwacht Systeme. 24/7.
              </p>
              <p>
                Läuft auf einem Mac Mini M4 in Zypern. Das Bild ist echt – 
                kein Stock-Foto, kein Mockup.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
                <div className="font-display font-semibold text-white text-xl">50k+</div>
                <div className="text-white/60 text-sm">Tasks erledigt</div>
              </div>
              <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
                <div className="font-display font-semibold text-white text-xl">Seit 2021</div>
                <div className="text-white/60 text-sm">im Einsatz</div>
              </div>
              <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
                <div className="font-display font-semibold text-white text-xl">24/7</div>
                <div className="text-white/60 text-sm">verfügbar</div>
              </div>
            </div>
            
            <p className="mt-8 text-white/60 text-base italic">
              Im Deep Dive siehst du Owen live bei der Arbeit – kein Demo-Setup, 
              sondern das echte System.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
