import { FAQItem } from '../ui/FAQItem';
import { Mail } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: 'Ist das nicht unsicher? Ein AI-Agent mit Zugriff auf alles?',
      answer: 'Owen läuft auf DEINEM Mac. Nicht in irgendeiner Cloud. Du kontrollierst, was er darf und was nicht. Jeder Zugriff ist geloggt.',
    },
    {
      question: 'Brauche ich Coding-Skills?',
      answer: 'Nein. Im Workshop schaust du zu – ich zeige, was Owen kann. Danach bekommst du einen Leitfaden fürs eigene Setup. Copy & Paste reicht, kein Terminal-Voodoo.',
    },
    {
      question: 'Was kostet OpenClaw?',
      answer: 'OpenClaw selbst ist Open Source. Du zahlst nur für die AI-Modelle (OpenAI, Anthropic). In meinem Setup: ~50–100€ pro Monat.',
    },
    {
      question: 'Wie lange dauert das Setup?',
      answer: 'Ein Sonntag Vormittag reicht. Im Workshop siehst du Owen live – das Setup machst du danach mit dem Leitfaden, den du bekommst. Schritt für Schritt, kein Rätselraten.',
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
      answer: 'Live-Session am 15. Februar um 19:00 Uhr (90 Minuten). Ich zeige dir Owen in Action – echte Demos, was alles möglich ist, wo es hakt. Keine Installation, keine Anleitung. Q&A am Ende. Kein Verkaufs-Pitch.',
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
    <section id="faq" className="relative w-full section-padding bg-[#0a0a0a] overflow-hidden">
      <div className="relative z-10 container-custom">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">Noch </span>
            <span className="gradient-text-2">Fragen?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Die häufigsten. Wenn deine nicht dabei ist – schreib mir.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="reveal glass-strong rounded-3xl overflow-hidden max-w-4xl mx-auto mb-12">
          <div className="p-8 md:p-10">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* Contact Card */}
        <div className="reveal glass-strong rounded-3xl p-10 md:p-14 max-w-2xl mx-auto text-center border-2 border-blue-500/20">
          <h3 className="text-3xl font-bold text-white mb-4">
            Deine Frage war nicht dabei?
          </h3>
          <p className="text-gray-400 text-lg mb-8">
            Schreib mir einfach eine E-Mail
          </p>
          <a
            href="mailto:andy@raum.so"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)'
            }}
          >
            <Mail className="w-5 h-5" />
            andy@raum.so
          </a>
        </div>
      </div>
    </section>
  );
}
