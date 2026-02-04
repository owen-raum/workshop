import { Link } from 'react-router-dom';

export function Impressum() {
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
          Impressum
        </h1>

        <div className="prose prose-stone max-w-none">
          <h2 className="font-display text-2xl font-bold text-stone-900 mt-8 mb-4">
            Angaben gemäß § 5 TMG
          </h2>

          <p className="text-stone-700 leading-relaxed mb-4">
            <strong>STEINBERGER LTD</strong>
            <br />
            Registrierungsnummer: HE 123456
            <br />
            Zypern
          </p>

          <h3 className="font-display text-xl font-bold text-stone-900 mt-6 mb-3">
            Vertreten durch
          </h3>
          <p className="text-stone-700 leading-relaxed mb-4">
            Andy Steinberger
          </p>

          <h3 className="font-display text-xl font-bold text-stone-900 mt-6 mb-3">
            Kontakt
          </h3>
          <p className="text-stone-700 leading-relaxed mb-4">
            E-Mail:{' '}
            <a href="mailto:andy@raum.so" className="text-warm-600 hover:text-warm-700 underline">
              andy@raum.so
            </a>
          </p>

          <h3 className="font-display text-xl font-bold text-stone-900 mt-6 mb-3">
            EU-Streitschlichtung
          </h3>
          <p className="text-stone-700 leading-relaxed mb-4">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-600 hover:text-warm-700 underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h3 className="font-display text-xl font-bold text-stone-900 mt-6 mb-3">
            Verbraucherstreitbeilegung/Universalschlichtungsstelle
          </h3>
          <p className="text-stone-700 leading-relaxed mb-4">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </div>
  );
}
