import Link from "next/link";

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

        <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Datenschutz
        </h1>
        <p className="text-gray-700 leading-relaxed">
          Diese Seite ist ein Platzhalter. Die vollständige Datenschutzerklärung folgt in Kürze.
        </p>
      </div>
    </div>
  );
}
