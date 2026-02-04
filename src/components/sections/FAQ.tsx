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
    <section id="faq" className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-white" />
      
      <div className="relative max-w-4xl mx-auto">
        {/* Header - Premium Typography */}
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Noch Fragen?
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Die häufigsten. Wenn deine nicht dabei ist — schreib mir.
          </p>
        </div>

        {/* FAQ Accordion - Glassmorphism */}
        <div className="glass rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
          <div className="px-10">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* Contact Box - Premium Styling */}
        <div className="mt-14 glass rounded-3xl p-10 border border-blue-200 text-center shadow-xl">
          <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">
            Noch Fragen?
          </h3>
          <p className="text-slate-700 text-lg mb-6 font-medium">
            Schreib uns einfach eine Mail, wir antworten normalerweise innerhalb von 24 Stunden.
          </p>
          <a
            href="mailto:hello@openclaw.com"
            className="inline-flex items-center gap-3 text-emerald-600 hover:text-emerald-700 font-bold text-lg transition-all hover:scale-105"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            hello@openclaw.com
          </a>
        </div>
      </div>
    </section>
  );
}
