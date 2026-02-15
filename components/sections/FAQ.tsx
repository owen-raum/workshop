import { FAQItem } from '../ui/FAQItem';

export function FAQ() {
  const faqs = [
    {
      question: 'Ist das nicht unsicher? Ein AI-Agent mit Zugriff auf alles?',
      answer: 'Owen läuft auf DEINEM Mac. Nicht in irgendeiner Cloud. Du kontrollierst, was er darf und was nicht. Jeder Zugriff ist geloggt.',
    },
    {
      question: 'Brauche ich Coding-Skills?',
      answer: 'Für den Deep Dive nicht – du schaust zu und stellst Fragen. Fürs eigene Setup: Du musst kein Entwickler sein, aber bereit sein dich reinzuarbeiten. Ich zeige dir, was du brauchst und wo du anfängst.',
    },
    {
      question: 'Was kostet OpenClaw?',
      answer: 'OpenClaw selbst ist Open Source. Du zahlst nur für die AI-Modelle (OpenAI, Anthropic). In meinem Setup: ~50–100€ pro Monat.',
    },
    {
      question: 'Wie lange dauert das Setup?',
      answer: 'Kommt drauf an, wo du startest. Technisch Erfahrene haben das in ein paar Stunden. Als Anfänger solltest du dir ein Wochenende nehmen. Im Deep Dive siehst du, was auf dich zukommt – ohne böse Überraschungen.',
    },
    {
      question: 'Was, wenn etwas kaputt geht?',
      answer: 'Kann passieren – und ist mir auch passiert. Owen hat mal Server-Dateien gelöscht und um 3 Uhr morgens in meine Familiengruppe gepostet. Deswegen zeige ich dir im Deep Dive, wie du das verhinderst: eigene Accounts, Limits, klare Regeln. Jeder Fehler wird zur neuen Regel.',
    },
    {
      question: 'Brauche ich technisches Vorwissen?',
      answer: 'Nein. Wenn du weißt was ChatGPT ist, reicht das. Es geht um Verständnis, nicht um Programmieren.',
    },
    {
      question: 'Wie läuft der Deep Dive ab?',
      answer: 'Live-Session am 1. März um 19:00 Uhr (90 Minuten). Ich zeige dir Owen in Action – echte Demos, was alles möglich ist, wo es hakt. Keine Installation, keine Anleitung. Q&A am Ende. Kein Verkaufs-Pitch.',
    },
    {
      question: 'Warum kostet der Deep Dive etwas? Andere Sessions sind kostenlos.',
      answer: 'Weil kostenlose Sessions meistens Verkaufsveranstaltungen sind. Du sitzt 2 Stunden da und am Ende kommt der Pitch für ein 3.000€ Coaching. Hier nicht. Kein Upsell, kein Funnel. Du zahlst einmalig und bekommst alles – mein komplettes Production Setup, ehrliche Erfahrungen, Live Q&A, Aufzeichnung. Der Preis ist der Filter für Leute die es ernst meinen.',
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
    <section id="faq" className="w-full py-16 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24 bg-[#F1EFEB]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="reveal font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-gray-900 mb-3 md:mb-6">
            Noch Fragen?
          </h2>
          <p className="reveal text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Die häufigsten. Wenn deine nicht dabei ist – schreib mir.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="reveal bg-transparent rounded-2xl border border-[rgba(34,34,34,0.12)] overflow-hidden">
          <div className="px-6 md:px-10">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* Contact Box */}
        <div className="reveal mt-8 md:mt-10 bg-transparent rounded-2xl p-8 md:p-10 border border-[rgba(34,34,34,0.12)] text-center">
          <h3 className="font-display text-2xl font-semibold text-gray-900 mb-3">
            Deine Frage war nicht dabei?
          </h3>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            Schreib mir:{' '}
            <a
              href="mailto:andy@raum.so"
              className="font-semibold text-gray-900 hover:text-gray-700 underline"
            >
              andy@raum.so
            </a>
          </p>
          <a
            href="mailto:andy@raum.so"
            className="inline-flex items-center gap-3 text-gray-900 hover:text-gray-700 font-semibold text-base md:text-lg transition-colors"
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
