export function SocialProof() {
  const testimonials = [
    {
      name: 'Thomas R.',
      role: 'Geschäftsführer, IT-Dienstleister',
      initials: 'TR',
      quote: 'Ich dachte ich verstehe AI. Dann hat Andy mir gezeigt was Owen den ganzen Tag macht. Das war ein Augenöffner.',
      rating: 5,
    },
    {
      name: 'Nina K.',
      role: 'Selbstständige Beraterin',
      initials: 'NK',
      quote: 'Endlich mal jemand der sagt was AI NICHT kann. Das hat mir mehr geholfen als alle Hype-Artikel zusammen.',
      rating: 5,
    },
    {
      name: 'Markus S.',
      role: 'Product Owner',
      initials: 'MS',
      quote: 'Der 1:1 Call danach war Gold wert. Andy hat meinen konkreten Use Case durchdacht und mir gesagt wo ich anfangen soll.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50/30" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Was andere sagen
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Feedback aus bisherigen Workshops und Beratungen.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:border-emerald-300 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-slate-200 pt-4">
                <div className="w-12 h-12 rounded-full border-2 border-emerald-100 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Numbers */}
        <div className="mt-16 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">3+ Jahre</div>
              <div className="text-slate-600">AI-Agents im Einsatz</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">50k+</div>
              <div className="text-slate-600">Tasks von Owen erledigt</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">0</div>
              <div className="text-slate-600">Bullshit-Versprechen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
