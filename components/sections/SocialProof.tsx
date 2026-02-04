import Image from 'next/image';

export function SocialProof() {
  const testimonials = [
    {
      quote: "Die Kombination aus echtem Praxisbeispiel und technischem Deep Dive war genau das, was ich gesucht habe. Endlich mal kein oberflächliches AI-Blabla.",
      name: "Thomas M.",
      role: "Tech Lead @ Startup",
      avatar: null,
    },
    {
      quote: "Was Andy hier zeigt ist kein Marketing-Demo. Das ist ein echtes System im Produktiveinsatz. Man sieht die Stolpersteine und lernt daraus mehr als aus jedem perfekt polierten Tutorial.",
      name: "Sarah K.",
      role: "Product Manager",
      avatar: null,
    },
    {
      quote: "Ich hatte vorher nur vage Vorstellungen, was mit AI-Agents möglich ist. Nach dem Workshop weiß ich genau, wo ich ansetzen kann und was realistisch machbar ist.",
      name: "Michael R.",
      role: "Founder & CEO",
      avatar: null,
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-white to-navy-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy-900 mb-4">
            Stimmen aus der Community
          </h2>
          <p className="text-lg md:text-xl text-navy-700 max-w-2xl mx-auto">
            Feedback aus Andys Workshops und Community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 border border-navy-200 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Quote Icon */}
              <div className="text-orange-500 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote Text */}
              <p className="text-navy-700 leading-relaxed mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-navy-100">
                {testimonial.avatar ? (
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover border border-navy-200"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center text-navy-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-display font-bold text-navy-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-navy-600">
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
