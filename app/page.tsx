import Image from 'next/image';
import Link from 'next/link';

export default function DankePage() {
  return (
    <main className="min-h-screen bg-[#F1EFEB] flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Owen */}
        <div className="mb-10">
          <Image
            src="/owen.jpg"
            alt="Owen"
            width={120}
            height={120}
            className="rounded-full mx-auto shadow-lg"
          />
        </div>

        {/* Headline */}
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
          Danke für euer Interesse!
        </h1>

        {/* Text */}
        <p className="text-lg sm:text-xl text-[#1A1A1A]/70 leading-relaxed mb-4">
          Die Deep Dives waren eine großartige Erfahrung. Echte Gespräche, echte Setups, kein Hype.
        </p>
        <p className="text-lg sm:text-xl text-[#1A1A1A]/70 leading-relaxed mb-10">
          Wir pausieren das Format erstmal — aber es geht weiter.
        </p>

        {/* CTA zu The Circle */}
        <div className="bg-[#1A1A1A] rounded-2xl p-8 sm:p-10 text-white">
          <p className="text-base sm:text-lg text-white/70 mb-6 leading-relaxed">
            Wenn du tiefer einsteigen willst und ein echtes System aufbauen möchtest, schau dir <strong className="text-white">The Circle</strong> an.
          </p>
          <Link
            href="https://thecircle.sh"
            className="inline-block bg-white text-[#1A1A1A] hover:bg-[#f7f5f1] font-semibold rounded-xl px-8 py-4 text-lg transition-colors"
          >
            Zu The Circle →
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-16 text-sm text-[#1A1A1A]/40">
          <p>Andy Steinberger · <Link href="/impressum" className="underline hover:text-[#1A1A1A]/60">Impressum</Link> · <Link href="/datenschutz" className="underline hover:text-[#1A1A1A]/60">Datenschutz</Link></p>
        </div>
      </div>
    </main>
  );
}
