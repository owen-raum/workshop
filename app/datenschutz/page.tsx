import Link from 'next/link';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-[#F1EFEB] py-20 px-4">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zur Startseite
        </Link>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-stone max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Nachstehend informieren wir Sie über Art, Umfang und Zweck der Verarbeitung Ihrer
            personenbezogenen Daten bei der Nutzung unserer Seite unter der Adresse „https://agents.andy.cy/".
            Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder
            identifizierbare natürliche Person beziehen.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">1. Verantwortlicher</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Verantwortlicher im Sinne der EU-Datenschutzgrundverordnung (DSGVO) ist diejenige natürliche
            oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der
            Verarbeitung von personenbezogenen Daten entscheidet. Für die auf dieser Website verarbeiteten
            personenbezogenen Daten ist Verantwortlicher im Sinne der DSGVO: steinberger Limited,
            Panagiotou Theofilou 1, House 19, 7040 Oroklini, Larnaca, Cyprus, Telefon +357 97 423 741,
            E-Mail{' '}
            <a href="mailto:andy@raum.so" className="text-gray-900 hover:text-gray-700 underline">
              andy@raum.so
            </a>{' '}
            (im Folgenden „wir").
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            2. Wenn Sie unsere Webseite besuchen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wenn Sie unsere Webseite besuchen, erhebt unser Server die folgenden Informationen von Ihrem
            Endgerät: Browser-Typ und -Version, Betriebssystem, die zuvor besuchte Webseite („Referrer"),
            IP-Adresse und Zeitpunkt des Seitenaufrufs.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wir erheben und verarbeiten diese Daten, um den störungsfreien Betrieb unserer Webseite
            sicherzustellen und einen Missbrauch unserer Leistungen erkennen, abwehren und verfolgen zu
            können. Ferner nutzen wir die erhobenen Daten zu statistischen Zwecken, um etwa auszuwerten,
            mit welchen Endgeräten und Browsern unsere Website aufgerufen wird, um auf dieser Basis unser
            Angebot laufend an die Bedürfnisse der Nutzer anzupassen und zu verbessern. Diese
            Datenverarbeitung erfolgt auf Grundlage von Artikel 6 Absatz 1 Buchstabe f DSGVO.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Alle oben genannten personenbezogenen Daten löschen wir spätestens zwölf Monate nach ihrer
            Erhebung.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            3. Wenn Sie einen Vertrag mit uns schließen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wenn Sie bei uns bestellen bzw. buchen, verarbeiten wir Ihren Namen, Ihre Anschrift (soweit von
            Ihnen angegeben) und Ihre E-Mail-Adresse. Soweit Sie bei Ihrer Bestellung freiwillig weitere
            Daten angeben (z.B. eine abweichende Rechnungsadresse oder eine Telefonnummer), verarbeiten
            wir auch diese Daten.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wir verarbeiten diese Daten elektronisch zur ordnungsgemäßen Vertragserfüllung, insbesondere
            für die Lieferung, die Rechnungsstellung, die Verbuchung von Zahlungen und die Bearbeitung von
            Reklamationen. Sofern wir verpflichtet sind, Ihnen für ein digitales Produkt oder für eine Ware
            mit digitalen Elementen Aktualisierungen bereitzustellen, verarbeiten wir Ihre Kontaktdaten auch
            hierfür. Diese Datenverarbeitung erfolgt auf Grundlage von Artikel 6 Absatz 1 Buchstabe b DSGVO.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wir halten diese Daten gespeichert, bis alle gegenseitigen Ansprüche aus dem jeweiligen
            Vertragsverhältnis mit Ihnen vollständig erledigt und die handels- und steuerrechtlichen
            Aufbewahrungsfristen abgelaufen sind, denen wir unterliegen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Für einen Vertragsschluss zwischen Ihnen und uns ist es erforderlich, dass wir Ihren Namen und
            Ihre E-Mail-Adresse erhalten. Die Erforderlichkeit der Bereitstellung dieser Daten ergibt sich aus
            gesetzlichen Vorschriften (etwa § 312i Abs. 1 Ziffer 3 BGB, § 14 Abs. 4 UStG). Ohne Bereitstellung
            dieser Daten können Sie mit uns daher keinen Vertrag schließen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bei der Entscheidung über einen Vertragsschluss verzichten wir auf automatisierte
            Entscheidungsfindungen und auf Profiling.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">4. Bezahlung</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Für die Bezahlung erhebt und verarbeitet der von Ihnen gewählte Zahlungsdienstleister Ihren
            Namen, Ihre E-Mail-Adresse, Ihre Karten- oder Kontonummer und/oder weitere Daten, soweit für die
            von Ihnen gewählte Zahlungsmethode jeweils erforderlich. Es gelten insoweit ergänzend die
            Vertrags- und Datenschutzbestimmungen des von Ihnen gewählten Zahlungsdienstleisters.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beim Empfang einer Zahlung verarbeiten wir diejenigen Daten, die uns der Zahlungsdienstleister
            übermittelt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wenn wir eine Überweisung auf unser Konto erhalten, verarbeiten wir insbesondere den Namen des
            überweisenden Kontoinhabers, die Kontonummer (IBAN und BIC) und den mitübermittelten
            Verwendungszweck.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Verarbeitung erfolgt auf Grundlage von Artikel 6 Absatz 1 Buchstabe b DSGVO. Wir halten
            diese Daten gespeichert, bis alle gegenseitigen Ansprüche aus dem jeweiligen Vertragsverhältnis
            mit Ihnen vollständig erledigt und die handels- und steuerrechtlichen Aufbewahrungsfristen
            abgelaufen sind, denen wir unterliegen.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">5. Auftragsverarbeiter</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Für den Betrieb unserer Webseite im Internet nehmen wir technische Leistungen von Drittanbietern
            als Auftragsverarbeiter gemäß Artikel 28 DSGVO in Anspruch.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">6. Kontaktaufnahme</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wenn Sie uns eine Nachricht per E-Mail schicken, speichern wir Ihre Nachricht mit den damit
            übermittelten Absenderdaten (Name, E-Mail-Adresse und ggf. weitere von Ihrem E-Mail-Programm
            und den übermittelnden Servern hinzugefügte Informationen). Für den Empfang, die Speicherung
            und den Versand von E-Mails nutzen wir Leistungen von Google Mail (Google Ireland Ltd., Barrow
            Street, Dublin 4, Irland) als Auftragsverarbeiter gemäß Artikel 28 DSGVO.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Rechtsgrundlage für diese Datenverarbeitung ist unser berechtigtes Interesse, Ihre Nachricht zu
            beantworten und auch auf eventuelle Folgefragen von Ihnen reagieren zu können (Artikel 6 Absatz
            1 Buchstabe f DSGVO). Wir löschen die mit Ihrer Nachricht erhobenen Daten spätestens zwölf Monate
            nach der letzten mit Ihnen geführten Kommunikation zu Ihrem Anliegen, vorbehaltlich der Reglung
            im folgenden Absatz.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wenn Sie uns eine rechtlich relevante Erklärung zum Vertragsverhältnis übermitteln (z.B. einen
            Widerruf oder eine Reklamation), ist Rechtsgrundlage für die Verarbeitung, unabhängig vom
            Übermittlungsweg, auch Artikel 6 Absatz 1 Buchstabe b DSGVO. In einem solchen Fall löschen wir
            die mit Ihrer Erklärung zusammenhängenden Daten, sobald alle wechselseitigen Ansprüche aus dem
            Vertragsverhältnis endgültig erledigt und die handels- und steuerrechtlichen Aufbewahrungsfristen
            abgelaufen sind.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">7. Newsletter</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wenn Sie unseren Newsletter abonniert haben, werden wir Sie per E-Mail über neue Angebote und
            Funktionen unserer Website informieren. Sie werden dabei nicht mehr als einen Newsletter in der
            Woche erhalten. Sie können der Nutzung Ihrer E-Mail-Adresse zu Werbezwecken jederzeit formlos
            widersprechen, ohne dass hierfür andere als die Übermittlungskosten nach den Basistarifen
            entstehen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Diese Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung gemäß Artikel 6 Absatz 1
            Buchstabe a DSGVO. Wenn Sie die Einwilligung zur Nutzung Ihrer E-Mail-Adresse zu Werbezwecken
            widerrufen, löschen wir Ihre E-Mail-Adresse aus unserem Newsletter-Verteiler.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Als technischen Dienstleister für den Versand unseres Newsletters nutzen wir den Service der
            Firma Circle, 228 Park Ave S, PMB 52933, New York, NY 10003 & Kit, Inc. 750 West Bannock Street
            #761 Boise, Idaho 83701-0761 (Auftragsverarbeiter gemäß Artikel 28 DSGVO).
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            8. Kommentare und Bewertungen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wenn Sie einen Kommentar oder eine Bewertung zu einer unserer Leistungen schreiben,
            veröffentlichen wir Ihren Beitrag auf unserer Webseite zusammen mit Ihrem Nutzernamen, für den
            Sie auch ein Pseudonym angeben können. Um einem Missbrauch unseres Angebots entgegenzuwirken,
            speichern wir die IP-Adresse des Endgeräts, von dem Sie schreiben, für einen Zeitraum von zwölf
            Monaten (Artikel 6 Absatz 1 Buchstabe f DSGVO). Wir behalten uns vor, unsachliche oder thematisch
            unpassende Beiträge jederzeit zu löschen. Im übrigen löschen wir veröffentlichte Beiträge auf
            Aufforderung des jeweiligen Autors.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            9. Nutzung von Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Soweit Sie in die Verwendung von Cookies eingewilligt haben, legen wir ein oder mehrere
            „Cookies" auf Ihrem Endgerät ab. Bei einem Cookie handelt es sich um eine kleine Textdatei, mit
            der wir Ihr Endgerät wiedererkennen können, wenn Sie unsere Webseite zu späterer Gelegenheit
            wieder besuchen. Mit Hilfe von Cookies können wir bestimmte Nutzerverhalten analysieren, z.B.,
            welche Seitenbereiche Sie sich anschauen, wie lange Sie auf unserer Webseite bleiben und wann
            und wie oft Sie auf unsere Webseite zurückkehren. Ferner können wir mit Cookies Ihre Einwilligung
            in die Cookie-Verwendung und ggf. weitere Marketing- oder Analysemethoden speichern. Von uns
            abgelegte Cookies werden spätestens zwölf Monate nach Ihrem letzten Besuch unserer Webseite
            gelöscht.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Diese Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Artikel 6 Absatz 1 Buchstabe a
            DSGVO).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sie können das Ablegen von Cookies verhindern, indem Sie in die Cookie-Einstellungen Ihres
            Internetbrowsers gehen und dort für unsere Seite oder für alle Webseiten dem Ablegen von Cookies
            widersprechen. Dort können Sie auch bereits abgelegte Cookies wieder löschen.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            10. Google-Dienste
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Soweit Sie eingewilligt haben, setzen wir auf unserer Webseite bestimmte Dienste von Google ein.
            Wenn Sie unsere Seite von einem Standort in der Europäischen Union, Norwegen, Island,
            Liechtenstein oder der Schweiz aus besuchen, handelt es sich bei „Google" um die Google Ireland
            Limited, Gordon House, Barrow Street, Dublin 4, Irland, anderenfalls um die Google LLC, 1600
            Amphitheatre Parkway, Mountain View, CA 94043, USA.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Allgemeine Informationen zur Datennutzung durch Google finden Sie bei Google unter{' '}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700 underline"
            >
              https://policies.google.com/technologies/partner-sites
            </a>{' '}
            („Wie wir Daten von Websites oder Apps verwenden, auf bzw. in denen unsere Dienste genutzt
            werden").
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            11. Google Analytics
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Soweit Sie eingewilligt haben, nutzen wir Google Analytics, einen Webanalysedienst von Google.
            Google legt dabei Cookies auf Ihrem Endgerät ab. Mit diesen Cookies kann Google Informationen
            darüber sammeln, wie Sie unsere Webseite nutzen. Diese Informationen werden an einen Server von
            Google übertragen, dort ausgewertet und uns zur Verfügung gestellt. Wir nutzen die Informationen,
            um besser zu verstehen, wofür sich die Besucher unserer Webseite interessieren, welchen Erfolg
            unsere Werbemittel haben und wie wir unser Angebot verbessern können.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Rechtsgrundlage für diese Verarbeitung ist Ihre Einwilligung (Artikel 6 Absatz 1 Buchstabe a
            DSGVO).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Für die Erstellung der Nutzungsanalysen wird Google als Auftragsverarbeiter für uns tätig (Artikel
            28 DSGVO), und zwar auf Grundlage eines Verarbeitungsvertrags, der die
            EU-Standarddatenschutzklauseln einbezieht. Den Inhalt der Vereinbarung mit Google
            („Datenverarbeitungsbedingungen") können Sie online abrufen unter{' '}
            <a
              href="https://privacy.google.com/businesses/processorterms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700 underline"
            >
              privacy.google.com/businesses/processorterms
            </a>
            .
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wir setzen Google Analytics mit aktivierter IP-Anonymisierung ein. Das bedeutet, dass Ihre
            IP-Adresse im Regelfall innerhalb des Geltungsbereichs der DSGVO so gekürzt wird, dass von der
            IP nicht mehr auf Sie geschlossen werden kann. Nur in Ausnahmefällen wird die volle IP-Adresse
            an einen Google-Server in den USA übertragen und dort gekürzt. Die von Ihrem Browser übermittelte
            IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Sie können die Speicherung
            der Cookies durch eine entsprechende Einstellung ihrer Browser-Software verhindern.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">
            12. Facebook Pixel, Custom Audience, Conversion Tracking
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Auf unserer Webseite setzen wir den Dienst „Facebook Pixel" von Facebook ein (Meta Platforms
            Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland, bzw., wenn Sie in
            den USA oder Kanada ansässig sind: Meta Platforms Inc., 1 Hacker Way, Menlo Park, CA 94025,
            USA). Die Technik ermöglicht es, Besucher unserer Webseite als Zielgruppe („Custom Audience")
            für Werbeanzeigen zu definieren, die von Facebook ausgeliefert werden („Facebook Ads"). Dazu
            analysieren wir mit Hilfe einer unsichtbaren Grafikdatei, die wir in unsere Webseite integrieren,
            Ihr Nutzerverhalten und leiten daraus Produkte oder Themen ab, für die Sie sich interessieren. Mit
            Facebook Pixel können wir außerdem die Effizienz von Facebook Ads feststellen, nämlich, ob und
            wie Sie auf eine Werbung von uns reagieren („Conversion Tracking").
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Diese Datenverarbeitung erfolgt auf Grundlage von Artikel 6 Absatz 1 Buchstabe f DSGVO, nämlich
            in unserem berechtigten Interesse, unsere Angebote vor allem gegenüber solchen Personengruppen
            zu bewerben, die sich wahrscheinlich für unsere Produkte interessieren, und die Effizienz der von
            uns eingesetzten Online-Werbung zu analysieren.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">13. Ihre Rechte</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bezüglich der personenbezogenen Daten, die wir über Sie verarbeiten, stehen Ihnen die folgenden
            Rechte zu:
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sie haben das Recht, von uns eine Bestätigung darüber zu verlangen, ob wir Sie betreffende
            personenbezogene Daten verarbeiten. Ist dies der Fall, so teilen wir Ihnen die über Sie gespeicherten
            personenbezogenen Daten und die weiteren Informationen gemäß Artikel 15 Abs. 1 u. 2 DSGVO mit.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sie haben das Recht, Sie betreffende unrichtige personenbezogene Daten unverzüglich berichtigen
            zu lassen. Unter Berücksichtigung der Zwecke der Verarbeitung haben Sie auch das Recht, die
            Vervollständigung unvollständiger personenbezogener Daten – auch mittels einer ergänzenden
            Erklärung – zu verlangen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sie können von uns die unverzügliche Löschung der Sie betreffenden personenbezogenen Daten unter
            den Voraussetzungen von Artikel 17 Absatz 1 DSGVO verlangen, soweit deren Verarbeitung nicht
            gemäß Artikel 17 Absatz 3 DSGVO erforderlich ist.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sie können von uns die Einschränkung der Verarbeitung Ihrer Daten verlangen, wenn eine der
            Voraussetzungen von Artikel 18 Absatz 1 DSGVO vorliegt. Sie können die Einschränkung insbesondere
            anstelle einer Löschung verlangen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wir werden jede Berichtigung oder Löschung Ihrer personenbezogenen Daten und eine Einschränkung
            der Verarbeitung allen Empfängern mitteilen, denen wir Sie betreffende personenbezogene Daten
            offengelegt haben, es sei denn, dies erweist sich als unmöglich oder ist mit einem
            unverhältnismäßigen Aufwand verbunden. Wir werden Sie zudem über diese Empfänger unterrichten,
            wenn Sie dies verlangen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sie haben das Recht, die personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem
            strukturierten, gängigen und maschinenlesbaren Format zu erhalten, und können verlangen, dass wir
            diese Daten einem anderen Verantwortlichen ohne Behinderung übermitteln, soweit dies technisch
            möglich ist.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Soweit eine Datenverarbeitung auf Ihrer Einwilligung beruht, haben Sie das Recht, Ihre Einwilligung
            jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der
            Datenverarbeitung, die bis zu Ihrem Widerruf erfolgt ist, nicht berührt.
          </p>
          <p className="text-gray-700 leading-relaxed mt-6 font-semibold">
            WIDERSPRUCHSRECHT: AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, KÖNNEN
            SIE JEDERZEIT DER VERARBEITUNG DER SIE BETREFFENDEN PERSONENBEZOGENEN DATEN WIDERSPRECHEN;
            dieses Widerspruchsrecht besteht in Bezug auf diejenige Datenverarbeitung, die auf Grundlage von
            Artikel 6 Absatz 1 Buchstabe f DSGVO zur Wahrung berechtigter Interessen unsererseits oder eines
            Dritten erfolgt, sofern nicht Ihre Interessen oder Grundrechte und Grundfreiheiten, die den Schutz
            personenbezogener Daten erfordern, überwiegen. Wenn Sie Ihr Widerspruchsrecht ausüben, werden
            wir die betreffenden Daten nicht mehr verarbeiten, es sei denn, dass wir zwingende schutzwürdige
            Gründe für die Verarbeitung nachweisen können, die die Interessen, Rechte und Freiheiten von Ihnen
            überwiegen, oder dass die Verarbeitung der Geltendmachung, Ausübung oder Verteidigung von
            Rechtsansprüchen dient.
          </p>
          <p className="text-gray-700 leading-relaxed mt-6 font-semibold">
            FÜR DEN FALL, DASS WIR PERSONENBEZOGENE DATEN FÜR DIE DIREKTWERBUNG (Z.B. NEWSLETTER)
            VERARBEITEN, KÖNNEN SIE JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG DER SIE BETREFFENDEN
            PERSONENBEZOGENEN DATEN ZUM ZWECKE DERARTIGER WERBUNG EINLEGEN MIT DER FOLGE, DASS WIR IHRE
            DATEN FÜR DIESE ZWECKE NICHT MEHR VERARBEITEN WERDEN.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO
            verstößt, können Sie Beschwerde einlegen bei einer Aufsichtsbehörde, insbesondere in dem
            Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen
            Verstoßes. Das schließt anderweitige behördliche oder gerichtliche Rechtsbehelfe nicht aus.
          </p>
        </div>
      </div>
    </div>
  );
}
