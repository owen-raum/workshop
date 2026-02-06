import { FAQItem } from '../ui/FAQItem';

export function FAQ() {
  const faqs = [
    {
      question: 'Ist das nicht unsicher? Ein AI-Agent mit Zugriff auf alles?',
      answer:
        'Owen läuft auf DEINEM Mac. Nicht in irgendeiner Cloud. Du kontrollierst, was er darf und was nicht. Jeder Zugriff ist geloggt.',
    },
    {
      question: 'Brauche ich Coding-Skills?',
      answer:
        'Nein. Im Workshop schaust du zu – ich zeige, was Owen kann. Danach bekommst du einen Leitfaden fürs eigene Setup. Copy & Paste reicht, kein Terminal-Voodoo.',
    },
    {
      question: 'Was kostet OpenClaw?',
      answer:
        'OpenClaw selbst ist Open Source. Du zahlst nur für die AI-Modelle (OpenAI, Anthropic). In meinem Setup: ~50–100€ pro Monat.',
    },
    {
      question: 'Wie lange dauert das Setup?',
      answer:
        'Ein Sonntag Vormittag reicht. Im Workshop siehst du Owen live – das Setup machst du danach mit dem Leitfaden, den du bekommst. Schritt für Schritt, kein Rätselraten.',
    },
    {
      question: 'Was, wenn etwas kaputt geht?',
      answer:
        'Owen macht keine irreversiblen Actions ohne Confirmation. Alles ist nachvollziehbar. Und: Du bist Teil von The Circle – wir helfen uns gegenseitig.',
    },
    {
      question: 'Brauche ich technisches Vorwissen?',
      answer: 'Nein. Wenn du weißt was ChatGPT ist, reicht das. Es geht um Verständnis, nicht um Programmieren.',
    },
    {
      question: 'Wie läuft der Deep Dive ab?',
      answer:
        'Live-Session am 15. Februar um 19:00 Uhr (90 Minuten). Ich zeige dir Owen in Action – echte Demos, was alles möglich ist, wo es hakt. Keine Installation, keine Anleitung. Q&A am Ende. Kein Verkaufs-Pitch.',
    },
    {
      question: 'Warum kostet der Deep Dive etwas? Andere Workshops sind kostenlos.',
      answer:
        'Weil kostenlose Workshops meistens Verkaufsveranstaltungen sind. Du sitzt 2 Stunden da und am Ende kommt der Pitch für ein 3.000€ Coaching. Hier nicht. Kein Upsell, kein Funnel. Du zahlst einmal 149€ und bekommst alles – mein komplettes Production Setup, ehrliche Erfahrungen, Live Q&A, Aufzeichnung. Der Preis ist der Filter für Leute die es ernst meinen.',
    },
    {
      question: 'Bekomme ich eine Aufzeichnung?',
      answer: 'Ja. Du bekommst die komplette Aufnahme + Slides. Wenn du live nicht dabei sein kannst, kein Problem.',
    },
    {
      question: 'Was ist, wenn ich nicht teilnehmen kann?',
      answer:
        'Kein Problem – du bekommst die Aufzeichnung und alle Materialien. Du verpasst nur die Möglichkeit, live Fragen zu stellen.',
    },
  ];

  return (
    <section id="faq" className="w-full section-padding page-x section-tint tint-violet">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="reveal font-display text-5xl md:text-6xl lg:text-[76px] font-extrabold leading-[0.95] tracking-[-0.05em] text-gray-900 mb-6">
            <span className="font-extrabold">Noch</span>
            <span className="font-light"> Fragen?</span>
          </h2>
          <p className="reveal text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Die häufigsten. Wenn deine nicht dabei ist – schreib mir.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="reveal prism-card rounded-3xl overflow-hidden">
          <div className="px-6 md:px-10">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* Contact Box */}
        <div className="reveal mt-8 md:mt-10 prism-card rounded-3xl p-8 md:p-10 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-[-0.04em] text-gray-900 mb-3">
            Deine Frage war nicht dabei?
          </h3>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            Schreib mir:{' '}
            <a href="mailto:andy@raum.so" className="font-semibold text-gray-900 hover:text-gray-700 underline">
              andy@raum.so
            </a>
          </p>
          <a
            href="mailto:andy@raum.so"
            className="inline-flex items-center gap-3 text-gray-900 hover:text-gray-700 font-semibold text-base md:text-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            andy@raum.so
          </a>
        </div>
      </div>
    </section>
  );
}
