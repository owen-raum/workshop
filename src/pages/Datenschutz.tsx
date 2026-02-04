import { Link } from 'react-router-dom';

export function Datenschutz() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zur Startseite
        </Link>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-8">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-stone max-w-none">
          <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-4">
            1. Datenschutz auf einen Blick
          </h2>

          <h3 className="font-display text-xl font-bold text-stone-900 mt-6 mb-3">
            Allgemeine Hinweise
          </h3>
          <p className="text-stone-700 leading-relaxed mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h3 className="font-display text-xl font-bold text-stone-900 mt-6 mb-3">
            Datenerfassung auf dieser Website
          </h3>
          <p className="text-stone-700 leading-relaxed mb-4">
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
            <br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
            Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser
            Datenschutzerklärung entnehmen.
          </p>

          <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-4">
            2. Hosting
          </h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            Diese Website wird auf eigenen Servern gehostet. Die Server-Logfiles werden automatisch
            erfasst und gespeichert.
          </p>

          <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-4">
            3. Zahlungsanbieter
          </h2>

          <h3 className="font-display text-xl font-bold text-stone-900 mt-6 mb-3">
            Stripe
          </h3>
          <p className="text-stone-700 leading-relaxed mb-4">
            Wir verwenden Stripe als Zahlungsanbieter für Ticket-Käufe. Anbieter ist die Stripe,
            Inc., 510 Townsend Street, San Francisco, CA 94103, USA.
          </p>
          <p className="text-stone-700 leading-relaxed mb-4">
            Wenn Sie sich für die Zahlung mit Stripe entscheiden, werden die von Ihnen eingegebenen
            Zahlungsdaten direkt an Stripe übermittelt. Die Datenübertragung erfolgt auf Grundlage
            von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO
            (Verarbeitung zur Erfüllung eines Vertrags).
          </p>
          <p className="text-stone-700 leading-relaxed mb-4">
            Details entnehmen Sie der Datenschutzerklärung von Stripe unter:{' '}
            <a
              href="https://stripe.com/de/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-600 hover:text-warm-700 underline"
            >
              https://stripe.com/de/privacy
            </a>
          </p>

          <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-4">
            4. Cookies
          </h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            Diese Website verwendet nur essenzielle Cookies, die für den technischen Betrieb der
            Website erforderlich sind. Marketing- oder Tracking-Cookies werden nicht eingesetzt.
          </p>

          <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-4">
            5. Ihre Rechte
          </h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
            personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
            Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu
            sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an
            uns wenden.
          </p>

          <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-4">
            6. Kontakt
          </h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten,
            bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
          </p>
          <p className="text-stone-700 leading-relaxed mb-4">
            <strong>STEINBERGER LTD</strong>
            <br />
            E-Mail:{' '}
            <a href="mailto:andy@raum.so" className="text-warm-600 hover:text-warm-700 underline">
              andy@raum.so
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
