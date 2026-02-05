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
          <p className="text-gray-700 leading-relaxed mb-6">
            Diese Website ist ein Angebot von Andy Steinberger / steinberger Limited.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Andy Steinberger ist Unternehmer, AI-Enthusiast und Gründer von The Circle – einer 
            kuratierten Community für Unternehmer:innen rund um künstliche Intelligenz, 
            Automatisierung und modernes Arbeiten.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            Verantwortlich
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Andreas Peter Steinberger (Director)
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            Unternehmensanschrift
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            steinberger Limited
            <br />
            Panagiotou Theofilou 1, House 19
            <br />
            7040 Oroklini, Larnaca
            <br />
            Cyprus
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            Eintragung
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Registrar: Department of Registrar of Companies and Intellectual Property, Nicosia
            <br />
            Company Number: HE 449386
            <br />
            VAT-ID: CY60026377I
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            Kontakt
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            E-Mail:{' '}
            <a href="mailto:andy@steinberger.cy" className="text-gray-900 hover:text-gray-700 underline">
              andy@steinberger.cy
            </a>
            <br />
            Telefon: +357 97 423 741 (Keine Kundenbetreuung per Telefon)
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            Rechtliche Hinweise
          </h2>

          <h3 className="font-display text-xl font-bold text-gray-900 mt-6 mb-3">
            Haftung für Inhalte
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Alle Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
            Vollständigkeit und Aktualität übernehmen wir keine Gewähr. Änderungen bleiben vorbehalten.
          </p>

          <h3 className="font-display text-xl font-bold text-gray-900 mt-6 mb-3">
            Externe Links
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Diese Website kann Verlinkungen zu externen Seiten enthalten. Für deren Inhalte sind 
            ausschließlich die jeweiligen Betreiber verantwortlich. Eine Haftung hierfür wird ausgeschlossen.
          </p>

          <h3 className="font-display text-xl font-bold text-gray-900 mt-6 mb-3">
            Urheberrecht
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sämtliche Inhalte dieser Website – insbesondere Texte, Bilder, Videos und Konzepte – 
            unterliegen dem Urheberrecht. Eine Weiterverwendung, Vervielfältigung oder 
            Veröffentlichung in Teilen oder im Ganzen ist nur mit ausdrücklicher Genehmigung zulässig.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            Hinweis zur Kommunikation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Der schnellste Weg mich zu erreichen ist per E-Mail:{' '}
            <a href="mailto:andy@steinberger.cy" className="text-gray-900 hover:text-gray-700 underline">
              andy@steinberger.cy
            </a>
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            EU-Streitschlichtung
          </h2>
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
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </div>
  );
}
