import { FAQItem } from '../ui/FAQItem';

export function FAQ() {
  const faqs = [
    {
      question: 'Brauche ich technisches Vorwissen?',
      answer: 'Nein. Wenn du weißt was ChatGPT ist, reicht das. Es geht um Verständnis, nicht um Programmieren.',
    },
    {
      question: 'Ist das ein Verkaufs-Pitch für OpenClaw?',
      answer: 'Nein. Ich zeige dir mein Setup, aber du musst nichts kaufen. OpenClaw ist Open Source. Wenn du danach entscheidest, dass AI-Agents nichts für dich sind — auch gut.',
    },
    {
      question: 'Gibt es eine Aufzeichnung?',
      answer: 'Ja. Du bekommst die komplette Aufnahme + Slides. Wenn du live nicht dabei sein kannst, kein Problem.',
    },
    {
      question: 'Was wenn ich danach Fragen habe?',
      answer: 'Schreib mir einfach eine Mail. Die meisten Fragen lassen sich in 2-3 Nachrichten klären.',
    },
    {
      question: 'Warum steigt der Preis?',
      answer: 'Die ersten 10 Plätze sind am günstigsten (149€), danach 199€, ab Platz 51 dann 249€. Wer früh bucht, zahlt weniger. Einfache Rechnung.',
    },
  ];

  return (
    <section id="faq" className="py-32 lg:py-40 px-4 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
            Noch Fragen?
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Die häufigsten. Wenn deine nicht dabei ist — schreib mir.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-10">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* Contact Box */}
        <div className="mt-14 bg-white rounded-2xl p-10 border border-stone-200 text-center">
          <h3 className="font-display text-2xl font-bold text-stone-900 mb-4">
            Noch Fragen?
          </h3>
          <p className="text-stone-600 text-lg mb-6">
            Schreib mir einfach, ich antworte meistens innerhalb von 24 Stunden.
          </p>
          <a
            href="mailto:andy@raum.so"
            className="inline-flex items-center gap-3 text-stone-900 hover:text-stone-700 font-bold text-lg transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            andy@raum.so
          </a>
        </div>
      </div>
    </section>
  );
}
