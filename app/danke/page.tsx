import Link from 'next/link';

export default function Danke() {
  return (
    <div className="min-h-screen bg-navy-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
          Danke für deine Buchung!
        </h1>

        <p className="text-xl md:text-2xl text-navy-700 leading-relaxed mb-4">
          Du bist dabei – OpenClaw Deep Dive am 15. Februar 2026.
        </p>

        <p className="text-lg text-navy-600 leading-relaxed mb-10">
          Du bekommst eine Bestätigung per E-Mail mit allen Details zum Webinar.
          Schau auch im Spam-Ordner nach, falls nichts ankommt.
        </p>

        <div className="bg-white rounded-2xl p-8 mb-10 border border-navy-200">
          <h2 className="font-display text-xl font-bold text-navy-900 mb-4">
            Was passiert jetzt?
          </h2>
          <ul className="text-left space-y-3 text-navy-700">
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold mt-0.5">1.</span>
              <span>Bestätigungs-E-Mail mit Rechnung kommt in Kürze</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold mt-0.5">2.</span>
              <span>Einladungslink zum Webinar folgt ein paar Tage vorher</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold mt-0.5">3.</span>
              <span>Am 15. Februar um 19:00 Uhr geht&apos;s los – live und interaktiv</span>
            </li>
          </ul>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-navy-600 hover:bg-navy-700 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
