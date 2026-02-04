import { FAQItem } from '../ui/FAQItem';

export function FAQ() {
  const faqs = [
    {
      question: 'Muss ich programmieren können?',
      answer: 'Nein. Du solltest wissen was ein Terminal ist und keine Angst vor Konfigurationsdateien haben. Den Rest zeige ich dir. Wenn du schon mit ChatGPT gearbeitet hast, reicht das als Vorwissen.',
    },
    {
      question: 'Gibt es eine Aufzeichnung?',
      answer: 'Ja. Du bekommst die komplette Aufnahme + Slides. Wenn du live nicht dabei sein kannst, kein Problem.',
    },
    {
      question: 'Was wenn ich danach Fragen habe?',
      answer: 'Mit dem Zuschauer-Ticket: 30 Tage Community-Zugang. Mit Macher oder Team: Direkter Draht zu mir für Fragen. Die meisten Leute brauchen 2-3 Rückfragen bis es läuft.',
    },
    {
      question: 'Kann ich danach sofort loslegen?',
      answer: 'Wenn du ein Macher- oder Team-Ticket hast: Ja, wir machen das Setup zusammen. Mit dem Zuschauer-Ticket brauchst du vielleicht 1-2 Stunden selbst, aber ich zeige dir genau wie.',
    },
    {
      question: 'Geld zurück wenn es mir nicht gefällt?',
      answer: '14 Tage, keine Fragen. Wenn du nach dem Workshop denkst es war Zeitverschwendung, schreib mir und du kriegst dein Geld zurück.',
    },
    {
      question: 'Warum Early Bird?',
      answer: 'Weil ich ehrlich bin: Der Workshop ist neu in diesem Format. Wer jetzt bucht, zahlt weniger. Danach wird\'s teurer. Einfache Rechnung.',
    },
  ];

  return (
    <section id="faq" className="py-32 lg:py-40 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
            Noch Fragen?
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Die häufigsten. Wenn deine nicht dabei ist — schreib mir.
          </p>
        </div>

        <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-10">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="mt-14 bg-stone-50 rounded-2xl p-10 border border-stone-200 text-center">
          <h3 className="font-display text-2xl font-bold text-stone-900 mb-4">
            Noch Fragen?
          </h3>
          <p className="text-stone-700 text-lg mb-6">
            Schreib uns einfach eine Mail, wir antworten normalerweise innerhalb von 24 Stunden.
          </p>
          <a
            href="mailto:hello@openclaw.com"
            className="inline-flex items-center gap-3 text-warm-700 hover:text-warm-800 font-medium text-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            hello@openclaw.com
          </a>
        </div>
      </div>
    </section>
  );
}
