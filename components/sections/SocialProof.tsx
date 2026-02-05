import Image from 'next/image';
import { Quote } from 'lucide-react';

export function SocialProof() {
  const testimonials = [
    {
      quote: "Über einen Content-Kurs bin ich in The Circle gelandet und geblieben wegen dem Vibe: Spezialisten und Anfänger zusammen, auf Augenhöhe, respektvoll, hilfsbereit. Mit Support aus der Gruppe habe ich meine Website selbst gebaut, den Checkout angebunden und eine Mini Automation aufgesetzt und gemerkt: Bauen macht mega Spaß!",
      name: "Salvatore Bellopede",
      role: "The Circle Member",
      avatar: null,
    },
    {
      quote: "Die Community ist voll neugieriger, hilfsbereiter Mitstreiter. Neue Themen und Trends greift Andy schnell auf und diskutiert sie in den Community-Calls – und das weit über 'nur' AI & Automation hinaus.",
      name: "Michael Minge",
      role: "The Circle Member",
      avatar: null,
    },
    {
      quote: "Mein größtes Aha-Erlebnis im Circle? Da gab's einige! Von den ganzen technischen Themen wie API-Calls oder HTTP-Requests bis hin zur Erkenntnis, dass KI zwar unglaublich viel kann, aber nicht immer alles richtig macht – und dass man die Ergebnisse selbst einschätzen können muss.",
      name: "Dirk Schumann",
      role: "The Circle Member",
      avatar: null,
    },
    {
      quote: "Die Community war dafür ein echter Hebel. Wenn ich irgendwo hängen blieb, war sofort jemand da. Keine Egos, kein 'mach mal selber', sondern echte Hilfe. Das hier ist kein Kurs, den du durchklickst. Es ist ein Umfeld, das dich mitzieht.",
      name: "Kerstin Schrapf",
      role: "The Circle Member",
      avatar: null,
    },
  ];

  return (
    <section className="w-full py-20 md:py-24 px-8 md:px-16 lg:px-24 bg-[#F1EFEB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-[52px] font-bold text-gray-900 mb-4">
            Stimmen aus The Circle
          </h2>
          <p className="reveal text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Echte Mitglieder. Echtes Feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="reveal bg-transparent rounded-2xl p-6 md:p-8 border border-[rgba(34,34,34,0.12)]"
            >
              <div className="text-gray-500 mb-4">
                <Quote className="w-8 h-8" strokeWidth={1.5} />
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                &quot;{testimonial.quote}&quot;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-[rgba(34,34,34,0.12)]">
                {testimonial.avatar ? (
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover border border-[rgba(34,34,34,0.12)]"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-white/80 border border-[rgba(34,34,34,0.12)] flex items-center justify-center text-gray-700 font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-display font-semibold text-gray-900">
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
