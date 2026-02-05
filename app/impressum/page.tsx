import Link from 'next/link';

export default function Impressum() {
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
          Impressum
        </h1>

        <div className="prose prose-stone max-w-none">
          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            Angaben gemäß § 5 TMG
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>steinberger Limited</strong>
            <br />
            Panagiotou Theofilou 1, House 19
            <br />
            7040 Oroklini, Larnaca
            <br />
            Cyprus
          </p>

          <h3 className="font-display text-xl font-bold text-gray-900 mt-6 mb-3">
            Eintragung
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Registrar: Department of Registrar of Companies and Intellectual Property, Nicosia
            <br />
            Company Number: HE 449386
            <br />
            VAT-ID: CY60026377I
          </p>

          <h3 className="font-display text-xl font-bold text-gray-900 mt-6 mb-3">
            Vertreten durch
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Andreas Peter Steinberger (Director)
          </p>

          <h3 className="font-display text-xl font-bold text-gray-900 mt-6 mb-3">
            Kontakt
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            E-Mail:{' '}
            <a href="mailto:andy@raum.so" className="text-gray-900 hover:text-gray-700 underline">
              andy@raum.so
            </a>
          </p>

          <h3 className="font-display text-xl font-bold text-gray-900 mt-6 mb-3">
            EU-Streitschlichtung
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700 underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h3 className="font-display text-xl font-bold text-gray-900 mt-6 mb-3">
            Verbraucherstreitbeilegung/Universalschlichtungsstelle
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </div>
  );
}
