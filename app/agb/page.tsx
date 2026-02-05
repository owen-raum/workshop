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
          Allgemeine Geschäftsbedingungen
        </h1>

        <div className="prose prose-stone max-w-none">
          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            § 1 – Anbieter, Einbeziehung der AGB
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            (1) Anbieter und Vertragspartner für die auf unserer Seite „https://agents.andy.cy/" dargestellten
            Leistungen ist steinberger Limited, Panagiotou Theofilou 1, House 19, 7040 Oroklini, Larnaca,
            Cyprus, Telefon +357 97 423 741, E-Mail{' '}
            <a href="mailto:andy@raum.so" className="text-gray-900 hover:text-gray-700 underline">
              andy@raum.so
            </a>{' '}
            (im Folgenden kurz „Anbieter" oder „wir").
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            (2) Diese allgemeinen Geschäftsbedingungen sind Bestandteil jeder vertraglichen Vereinbarung
            zwischen dem Anbieter und dem jeweiligen Kunden. Entgegenstehenden AGB des Kunden wird
            widersprochen.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            § 2 – Angebot und Vertragsschluss
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            (1) Vertragsschluss und Vertragsabwicklung erfolgen in deutscher Sprache.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            (2) Für die Erbringung der dargestellten Leistungen gibt der Anbieter ein verbindliches Angebot
            ab. Der Kunde kann das Angebot annehmen, indem er seinen Bestellwunsch über den Button
            „zahlungspflichtig bestellen" übermittelt. Der Anbieter bestätigt den Vertragsschluss per
            E-Mail (Vertragsbestätigung).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            (3) Vor Annahme des Angebots durch den Kunden wird dem Kunden eine Übersicht der für die
            Bestellung erfassten Leistungen einschließlich ihrer wesentlichen Merkmale angezeigt. Der Kunde
            hat an dieser Stelle Gelegenheit, die Daten auf mögliche Eingabefehler zu prüfen und, wenn nötig,
            einen oder mehrere Schritte im Bestellablauf zurückzugehen, um die Daten zu ändern oder die
            Bestellung insgesamt abzubrechen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            (4) Der Anbieter übersendet dem Kunden nach Vertragsschluss den Inhalt des abgeschlossenen
            Vertrags (Vertragstext) per E-Mail. Gleichzeitig speichert der Anbieter den Vertragstext in seiner
            elektronischen Datenverarbeitung. Da der Kunde hierzu keinen Zugang hat, obliegt es dem Kunden,
            die E-Mail mit dem Vertragstext im eigenen Interesse aufzubewahren.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            § 3 – Preise und Bezahlung
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            (1) Alle Preise verstehen sich als Gesamtpreise. Die Entgelte enthalten die gesetzliche Umsatzsteuer.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            (2) Zur Bezahlung kann der Kunde folgende Zahlungsmethoden nutzen: Banküberweisung, PayPal,
            Klarna, Stripe.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            (3) Der Anbieter erbringt seine Leistung erst, wenn der Kunde die Zahlung veranlasst hat. Der Kunde
            ist insofern vorleistungsverpflichtet.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            (4) Bei Leistungen an einen Kunden außerhalb der Europäischen Union kann Einfuhrumsatzsteuer
            anfallen, die der Kunde an seine lokale Finanzbehörde zu zahlen hat. Auf die Erhebung dieser
            lokalen Steuer hat der Anbieter keinen Einfluss.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            § 4 – Digitale Inhalte
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            (1) Ein Produkt, das als aufgezeichneter digitaler Inhalt per E-Mail, zum Download oder auf sonstige
            Weise zum elektronischen Abruf angeboten wird, wird nicht postalisch versandt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            (2) Der Empfang digitaler Inhalte setzt voraus, dass der Kunde über eine Internetverbindung verfügt.
            Der Anbieter weist darauf hin, dass der Netzbetreiber des Kunden Entgelte für den Datenempfang
            erheben kann, auf die der Anbieter keinen Einfluss hat.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            (3) Sofern der Anbieter den digitalen Inhalt zum Download bereitstellt, gewährleistet der Anbieter
            eine zeitliche Erreichbarkeit (Up-Time) des Download-Servers von 99% im Durchschnitt eines
            Kalendermonats.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            (4) Verlangt der Kunde als Verbraucher ausdrücklich, dass der Vertrag bereits vor Ablauf der
            Widerrufsfrist ausgeführt wird, und bestätigt er, dass hierdurch sein Widerrufsrecht erlischt,
            stellt der Anbieter den digitalen Inhalt unverzüglich nach Zahlung bereit. Anderenfalls stellt der
            Anbieter einem Verbraucher den digitalen Inhalt erst nach Ablauf der Widerrufsfrist bereit.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            § 5 – Live-Onlineangebote
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            (1) Für Leistungen, die der Anbieter zu einer vorher vereinbarten Zeit erbringt und die der Kunde zu
            dieser Zeit über das Internet in Anspruch nehmen kann („Live-Onlineangebote"), stellt der Anbieter
            dem Kunden die erforderlichen Zugangsdaten nach Zahlung des vereinbarten Entgelts zur Verfügung.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            (2) Es obliegt dem Kunden, die Zugangsdaten geschützt vor dem Zugriff durch Dritte aufzubewahren.
            Soweit ein Dritter die Zugangsdaten nutzt, kann der Anbieter den gleichzeitigen Zugang durch den
            Kunden ausschließen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            (3) Die Teilnahme an einem Live-Onlineangebot setzt voraus, dass der Teilnehmer über ein
            internetfähiges Endgerät und eine Internetverbindung mit einer Bandbreite von wenigstens 6 MBit/s
            im Download verfügt. Sofern es sich um ein interaktives Angebot handelt, bei dem der Teilnehmer
            sein Kamerabild und seinen Ton an den Anbieter oder andere Teilnehmer übermitteln will, benötigt
            der Teilnehmer zusätzlich eine geeignete Webcam und ein Mikrofon sowie eine Bandbreite von
            wenigstens 6 MBit/s auch im Upload.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            (4) Bei dem Live-Onlineangebot handelt es sich nicht um Fernunterricht im Sinne des § 1 FernUSG.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            (5) Die Aufzeichnung von Video- und/oder Audio-Daten eines Live-Onlineangebots ist unzulässig.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            § 6 – Präsenzveranstaltungen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            (1) Präsenzveranstaltungen finden zum vereinbarten Termin am Sitz des Anbieters statt, sofern nicht
            ein anderer Veranstaltungsort vereinbart ist.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            (2) Die Teilnahme an einer Präsenzveranstaltung setzt voraus, dass der Kunde die Zahlung des
            vereinbarten Entgelts bis zum Veranstaltungsbeginn geleistet hat.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            (3) Bei einer Präsenzveranstaltung ist die Anfertigung von Foto-, Film- oder Audioaufnahmen nicht
            gestattet, es sei denn, dass der Anbieter hierin ausdrücklich einwilligt.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            § 7 – Verbraucher-Widerrufsrecht
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            (1) Einem Kunden, der einen Vertrag als Verbraucher schließt, kann ein Widerrufsrecht gemäß den
            gesetzlichen Bedingungen zustehen. Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft
            zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen
            beruflichen Tätigkeit zugerechnet werden können.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            (2) Einem Verbraucher mit ständigem Aufenthalt außerhalb Deutschlands räumt der Anbieter ein
            Verbraucher-Widerrufsrecht gemäß den deutschen Voraussetzungen und Rechtsfolgen auch dann
            ein, wenn das nationale Recht des Verbrauchers kein Widerrufsrecht vorsieht oder den Widerruf an
            eine kürzere Frist oder an eine strengere Form knüpft als nach deutschem Recht.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            § 8 – Gewährleistung (Mängelhaftung)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Es bestehen Gewährleistungsansprüche des Bestellers (auch Mängelhaftungsrechte genannt) gemäß
            den gesetzlichen Vorschriften.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            § 9 – Außergerichtliche Streitbeilegung
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wir sind weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            § 10 – Schlussbestimmungen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
            Gegenüber Verbrauchern mit ständigem Aufenthalt im Ausland findet das deutsche Recht jedoch
            keine Anwendung, soweit das nationale Recht des Verbrauchers Regelungen enthält, von denen zu
            Lasten des Verbrauchers nicht durch Vertrag abgewichen werden kann.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            (2) Ist der Kunde Kaufmann, eine juristische Person des öffentlichen Rechts oder ein
            öffentlichrechtliches Sondervermögen, so vereinbaren die Parteien als ausschließlichen
            Gerichtsstand den Sitz des Anbieters.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            (3) Sollten sich einzelne Bestimmungen dieser allgemeinen Geschäftsbedingungen als unwirksam
            oder undurchführbar erweisen, so berührt dies nicht die Wirksamkeit der übrigen Bestimmungen.
          </p>
        </div>
      </div>
    </div>
  );
}
