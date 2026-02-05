import Link from 'next/link';

export default function AGB() {
  return (
    <div className="min-h-screen bg-[#F1EFEB] py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zur Startseite
        </Link>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <div className="prose prose-stone max-w-none">
          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            1. Geltungsbereich
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über die Teilnahme am
            OpenClaw Deep Dive zwischen steinberger Limited (nachfolgend &bdquo;Anbieter&ldquo;) und dem Kunden.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            2. Vertragsgegenstand
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Gegenstand des Vertrages ist die Teilnahme am OpenClaw Deep Dive am 15. Februar 2026.
            Der Deep Dive findet als Online-Veranstaltung statt. Im Preis inbegriffen ist eine
            Aufzeichnung des Deep Dives, die nach der Veranstaltung zur Verfügung gestellt wird.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            3. Vertragsschluss
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Der Vertrag kommt durch die Buchung eines Tickets und die Bestätigung durch den
            Anbieter zustande. Die Zahlung erfolgt über Stripe.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            4. Preise und Zahlung
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Preise sind auf der Website angegeben und enthalten die gesetzliche Mehrwertsteuer.
            Die Zahlung erfolgt im Voraus über den Zahlungsanbieter Stripe.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            5. Widerrufsrecht
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Widerrufsbelehrung</strong>
            <br />
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu
            widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (steinberger Limited, E-Mail: andy@raum.so)
            mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder
            E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            6. Aufzeichnung
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Der Deep Dive wird aufgezeichnet. Die Aufzeichnung wird allen Teilnehmern nach dem
            Deep Dive zur Verfügung gestellt. Mit der Buchung stimmen Sie der Aufzeichnung zu.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            7. Haftung
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Der Anbieter haftet nicht für technische Störungen, die außerhalb seines
            Einflussbereichs liegen. Der Anbieter haftet nur für Vorsatz und grobe Fahrlässigkeit.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            8. Schlussbestimmungen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Es gilt das Recht der Republik Zypern. Sollten einzelne Bestimmungen dieser AGB
            unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            9. Kontakt
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>steinberger Limited</strong>
            <br />
            E-Mail:{' '}
            <a href="mailto:andy@raum.so" className="text-gray-900 hover:text-gray-700 underline">
              andy@raum.so
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
