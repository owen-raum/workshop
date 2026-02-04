export function SocialProof() {
  const testimonials = [
    {
      name: 'Sarah Weber',
      role: 'Gründerin, E-Commerce',
      initials: 'SW',
      quote: 'Ich hab schon mit ChatGPT experimentiert, aber OpenClaw hat mir erst gezeigt, wie AI wirklich arbeiten kann. Mein Support-Team ist begeistert.',
      rating: 5,
    },
    {
      name: 'Michael Krause',
      role: 'CTO, SaaS Startup',
      initials: 'MK',
      quote: 'Andy erklärt Technik so, dass sie jeder versteht. Nach dem Workshop hatte unser Team endlich eine klare Vision für AI-Integration.',
      rating: 5,
    },
    {
      name: 'Laura Hofmann',
      role: 'Marketing Lead',
      initials: 'LH',
      quote: 'Die Live-Demo mit Owen war der Gamechanger. Endlich verstehe ich, was AI-Agents wirklich können — und was nicht.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50/30" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Was Teilnehmer sagen
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ehrliche Bewertungen von Menschen, die bereits mit OpenClaw arbeiten.
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
              <div className="text-4xl font-bold text-slate-900 mb-2">250+</div>
              <div className="text-slate-600">Workshop-Teilnehmer</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">4.9/5</div>
              <div className="text-slate-600">Durchschnittliche Bewertung</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">98%</div>
              <div className="text-slate-600">Würden weiterempfehlen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
