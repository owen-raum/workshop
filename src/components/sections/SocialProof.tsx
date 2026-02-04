export function SocialProof() {
  const testimonials = [
    {
      name: 'Thomas R.',
      role: 'Geschäftsführer, IT-Dienstleister',
      initials: 'TR',
      quote: 'Ich dachte ich verstehe AI. Dann hat Andy mir gezeigt was Owen den ganzen Tag macht. Das war ein Augenöffner.',
    },
    {
      name: 'Nina K.',
      role: 'Selbstständige Beraterin',
      initials: 'NK',
      quote: 'Endlich mal jemand der sagt was AI NICHT kann. Das hat mir mehr geholfen als alle Hype-Artikel zusammen.',
    },
    {
      name: 'Markus S.',
      role: 'Product Owner',
      initials: 'MS',
      quote: 'Nach dem Workshop hatte ich meinen ersten Agent in unter 2 Stunden am Laufen. Die Schritt-für-Schritt-Anleitung hat den Unterschied gemacht.',
    },
  ];

  return (
    <section id="testimonials" className="py-32 lg:py-40 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
            Was andere sagen
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Feedback aus bisherigen Workshops und Beratungen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-stone-200"
            >
              <blockquote className="text-stone-700 text-2xl leading-relaxed mb-8 font-serif">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4 border-t border-stone-200 pt-6">
                <div className="w-12 h-12 rounded-full border border-stone-300 bg-warm-100 flex items-center justify-center">
                  <span className="text-warm-700 text-sm font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-stone-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-stone-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 border border-stone-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-stone-900 mb-2">3+ Jahre</div>
              <div className="text-stone-600">AI-Agents im Einsatz</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-stone-900 mb-2">50k+</div>
              <div className="text-stone-600">Tasks von Owen erledigt</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-stone-900 mb-2">0</div>
              <div className="text-stone-600">Bullshit-Versprechen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
