import { Quote } from 'lucide-react';

export function SocialProof() {
  const testimonials = [
    {
      quote: "Über einen Content-Kurs bin ich in The Circle gelandet und geblieben wegen dem Vibe: Spezialisten und Anfänger zusammen, auf Augenhöhe, respektvoll, hilfsbereit. Mit Support aus der Gruppe habe ich meine Website selbst gebaut, den Checkout angebunden und eine Mini Automation aufgesetzt und gemerkt: Bauen macht mega Spaß!",
      name: "Salvatore Bellopede",
      role: "The Circle Member",
    },
    {
      quote: "Die Community ist voll neugieriger, hilfsbereiter Mitstreiter. Neue Themen und Trends greift Andy schnell auf und diskutiert sie in den Community-Calls – und das weit über 'nur' AI & Automation hinaus.",
      name: "Michael Minge",
      role: "The Circle Member",
    },
    {
      quote: "Mein größtes Aha-Erlebnis im Circle? Da gab's einige! Von den ganzen technischen Themen wie API-Calls oder HTTP-Requests bis hin zur Erkenntnis, dass KI zwar unglaublich viel kann, aber nicht immer alles richtig macht – und dass man die Ergebnisse selbst einschätzen können muss.",
      name: "Dirk Schumann",
      role: "The Circle Member",
    },
    {
      quote: "Die Community war dafür ein echter Hebel. Wenn ich irgendwo hängen blieb, war sofort jemand da. Keine Egos, kein 'mach mal selber', sondern echte Hilfe. Das hier ist kein Kurs, den du durchklickst. Es ist ein Umfeld, das dich mitzieht.",
      name: "Kerstin Schrapf",
      role: "The Circle Member",
    },
  ];

  return (
    <section className="relative w-full section-padding bg-[#0a0a0a] overflow-hidden">
      <div className="relative z-10 container-custom">
        <div className="reveal text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">Stimmen aus </span>
            <span className="gradient-text-3">The Circle</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Echte Mitglieder. Echtes Feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="reveal glass-strong rounded-3xl p-8 card-hover group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <Quote className="w-10 h-10" strokeWidth={1.5} />
              </div>

              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                &quot;{testimonial.quote}&quot;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-white font-bold text-xl border-2 border-blue-500/50">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
