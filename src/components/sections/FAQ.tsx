import { FAQItem } from '../ui/FAQItem';

export function FAQ() {
  const faqs = [
    {
      question: 'Ist das nicht unsicher? Ein AI-Agent mit Zugriff auf alles?',
      answer: 'Owen läuft auf DEINEM Mac. Nicht in irgendeiner Cloud. Du kontrollierst, was er darf und was nicht. Jeder Zugriff ist geloggt.',
    },
    {
      question: 'Brauche ich Coding-Skills?',
      answer: 'Nein. Ich zeige dir Schritt für Schritt, wie du deinen Agent aufsetzt. Kein Terminal-Voodoo. Copy & Paste reicht.',
    },
    {
      question: 'Was kostet OpenClaw?',
      answer: 'OpenClaw selbst ist Open Source. Du zahlst nur für die AI-Modelle (OpenAI, Anthropic). In meinem Setup: ~50–100€ pro Monat.',
    },
    {
      question: 'Wie lange dauert das Setup?',
      answer: 'An einem Sonntag Vormittag bist du durch. Ich zeige dir meinen kompletten Stack – live.',
    },
    {
      question: 'Was, wenn etwas kaputt geht?',
      answer: 'Owen macht keine irreversiblen Actions ohne Confirmation. Alles ist nachvollziehbar. Und: Du bist Teil von The Circle – wir helfen uns gegenseitig.',
    },
    {
      question: 'Brauche ich technisches Vorwissen?',
      answer: 'Nein. Wenn du weißt was ChatGPT ist, reicht das. Es geht um Verständnis, nicht um Programmieren.',
    },
    {
      question: 'Wie läuft der Deep Dive ab?',
      answer: 'Live-Session am 15. Februar um 11:00 Uhr (90 Minuten). Ich zeige dir mein Setup, erkläre wie der Agent funktioniert, wo Probleme auftreten können, und beantworte alle Fragen. Kein Verkaufs-Pitch, nur ehrliche Einblicke.',
    },
    {
      question: 'Warum kostet der Deep Dive etwas? Andere Workshops sind kostenlos.',
      answer: 'Weil kostenlose Workshops meistens Verkaufsveranstaltungen sind. Du sitzt 2 Stunden da und am Ende kommt der Pitch für ein 3.000€ Coaching. Hier nicht. Kein Upsell, kein Funnel. Du zahlst einmal 149€ und bekommst alles – mein komplettes Production Setup, ehrliche Erfahrungen, Live Q&A, Aufzeichnung. Der Preis ist der Filter für Leute die es ernst meinen.',
    },
    {
      question: 'Bekomme ich eine Aufzeichnung?',
      answer: 'Ja. Du bekommst die komplette Aufnahme + Slides. Wenn du live nicht dabei sein kannst, kein Problem.',
    },
    {
      question: 'Was ist, wenn ich nicht teilnehmen kann?',
      answer: 'Kein Problem – du bekommst die Aufzeichnung und alle Materialien. Du verpasst nur die Möglichkeit, live Fragen zu stellen.',
    },
  ];

  return (
    <section id="faq" className="py-32 lg:py-40 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
            Noch Fragen?
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Die häufigsten. Wenn deine nicht dabei ist – schreib mir.
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
            Deine Frage war nicht dabei?
          </h3>
          <p className="text-stone-600 text-lg mb-6">
            Schreib mir: <a href="mailto:andy@raum.so" className="font-bold text-stone-900 hover:text-stone-700 underline">andy@raum.so</a>
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
