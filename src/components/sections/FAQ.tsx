import { FAQItem } from '../ui/FAQItem';

export function FAQ() {
  const faqs = [
    {
      question: 'Brauche ich Vorwissen in AI oder Programmierung?',
      answer: 'Nein! Der Workshop ist so aufgebaut, dass auch absolute Einsteiger alles verstehen. Wir erklären die Grundlagen verständlich und zeigen dir Schritt für Schritt, wie OpenClaw funktioniert. Tech-Know-how ist hilfreich, aber nicht notwendig.',
    },
    {
      question: 'Wird der Workshop aufgezeichnet?',
      answer: 'Ja! Du bekommst Zugriff auf die komplette Aufzeichnung + alle Slides und Ressourcen. Falls du live nicht dabei sein kannst oder etwas nochmal anschauen willst, ist das kein Problem.',
    },
    {
      question: 'Für wen ist der Workshop wirklich geeignet?',
      answer: 'Perfekt für Unternehmer, Führungskräfte und Tech-affine Professionals, die AI konkret nutzen wollen. NICHT geeignet für Leute die Quick-Fixes erwarten oder nur oberflächlich interessiert sind. Du solltest bereit sein, zu lernen und umzusetzen.',
    },
    {
      question: 'Gibt es eine Geld-zurück-Garantie?',
      answer: 'Ja! Wenn du nach dem Workshop nicht zufrieden bist, bekommst du innerhalb von 14 Tagen dein Geld zurück — ohne Wenn und Aber. Wir sind überzeugt vom Wert des Workshops, und du gehst kein Risiko ein.',
    },
    {
      question: 'Was ist, wenn ich technische Fragen nach dem Workshop habe?',
      answer: 'Je nach Ticket-Tier hast du Zugriff auf die Community (30-90 Tage oder Lifetime) und bei Professional/Team sogar Follow-up Calls und direkte Support-Hotline. Du stehst nicht alleine da.',
    },
    {
      question: 'Kann ich OpenClaw direkt nach dem Workshop nutzen?',
      answer: 'Absolut! Wir zeigen dir das Setup und die ersten Schritte. Bei den höheren Tiers helfen wir dir sogar aktiv beim Setup. Du bekommst alles, was du brauchst, um sofort loszulegen.',
    },
    {
      question: 'Warum sollte ich JETZT buchen?',
      answer: 'Der Early-Bird-Preis ist zeitlich begrenzt. Danach steigen die Preise deutlich. Außerdem sind die Plätze limitiert (max. 100 Teilnehmer), damit wir auf individuelle Fragen eingehen können.',
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
            Häufige Fragen
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Hier findest du Antworten auf die wichtigsten Fragen. 
            Noch etwas unklar? Schreib uns einfach!
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
