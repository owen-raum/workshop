import Image from 'next/image';
import { Quote } from 'lucide-react';

export function SocialProof() {
  const testimonials = [
    {
      quote:
        'Über einen Content-Kurs bin ich in The Circle gelandet und geblieben wegen dem Vibe: Spezialisten und Anfänger zusammen, auf Augenhöhe, respektvoll, hilfsbereit. Mit Support aus der Gruppe habe ich meine Website selbst gebaut, den Checkout angebunden und eine Mini Automation aufgesetzt und gemerkt: Bauen macht mega Spaß!',
      name: 'Salvatore Bellopede',
      role: 'The Circle Member',
      avatar: null,
    },
    {
      quote:
        "Die Community ist voll neugieriger, hilfsbereiter Mitstreiter. Neue Themen und Trends greift Andy schnell auf und diskutiert sie in den Community-Calls – und das weit über 'nur' AI & Automation hinaus.",
      name: 'Michael Minge',
      role: 'The Circle Member',
      avatar: null,
    },
    {
      quote:
        'Mein größtes Aha-Erlebnis im Circle? Da gab\'s einige! Von den ganzen technischen Themen wie API-Calls oder HTTP-Requests bis hin zur Erkenntnis, dass KI zwar unglaublich viel kann, aber nicht immer alles richtig macht – und dass man die Ergebnisse selbst einschätzen können muss.',
      name: 'Dirk Schumann',
      role: 'The Circle Member',
      avatar: null,
    },
    {
      quote:
        "Die Community war dafür ein echter Hebel. Wenn ich irgendwo hängen blieb, war sofort jemand da. Keine Egos, kein 'mach mal selber', sondern echte Hilfe. Das hier ist kein Kurs, den du durchklickst. Es ist ein Umfeld, das dich mitzieht.",
      name: 'Kerstin Schrapf',
      role: 'The Circle Member',
      avatar: null,
    },
  ];

  const layout = (index: number) => {
    switch (index) {
      case 0:
        return 'md:col-span-7 md:pr-10';
      case 1:
        return 'md:col-span-5';
      case 2:
        return 'md:col-span-5';
      case 3:
        return 'md:col-span-7 md:pl-10';
      default:
        return 'md:col-span-6';
    }
  };

  const cardTone = (index: number) => {
    // small variation to make it feel bento/editorial
    if (index === 0) return 'bg-white/65';
    if (index === 3) return 'bg-white/60';
    return 'bg-white/52';
  };

  return (
    <section className="w-full section-padding page-x section-tint tint-amber">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="reveal font-display text-5xl md:text-6xl lg:text-[76px] font-extrabold leading-[0.95] tracking-[-0.05em] text-gray-900 mb-6">
            <span className="font-extrabold">Stimmen</span>
            <span className="font-light"> aus The Circle</span>
          </h2>
          <p className="reveal text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Echte Mitglieder. Echtes Feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 items-stretch">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`reveal relative overflow-hidden rounded-3xl p-7 md:p-8 border border-[rgba(34,34,34,0.12)] shadow-[0_40px_120px_-110px_rgba(17,17,17,0.55)] ${cardTone(index)} ${layout(index)}`}
            >
              {/* Prism edge */}
              <div
                aria-hidden
                className="absolute left-0 top-0 bottom-0 w-[7px] opacity-80"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(167,139,250,0.80), rgba(103,232,249,0.70), rgba(251,191,36,0.78))',
                }}
              />

              <div className="text-gray-500 mb-5">
                <Quote className={`${index === 0 || index === 3 ? 'w-10 h-10' : 'w-9 h-9'}`} strokeWidth={1.25} />
              </div>

              <p className={`text-gray-700 leading-relaxed mb-7 ${index === 0 || index === 3 ? 'text-base md:text-lg' : 'text-base'}`}>
                &quot;{testimonial.quote}&quot;
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-[rgba(34,34,34,0.10)]">
                {testimonial.avatar ? (
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover border border-[rgba(34,34,34,0.12)]"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-white/80 border border-[rgba(34,34,34,0.12)] flex items-center justify-center text-gray-800 font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-display font-extrabold tracking-[-0.03em] text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
