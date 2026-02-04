export function Disclaimer() {
  return (
    <section className="py-12 px-4 bg-amber-50 border-t border-b border-amber-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-amber-300 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 text-3xl">⚠️</div>
            <div className="space-y-3 text-stone-700 leading-relaxed">
              <p className="font-semibold text-stone-900">
                Andy ist unabhängiger Early Adopter — nicht affiliated mit OpenClaw.
              </p>
              <p>
                Kein Vendor-Pitch. Keine Sales-Agenda. Nur echte Erfahrung aus Monaten Production Use.
              </p>
              <p className="text-sm text-stone-600">
                Was funktioniert, was nicht, und wo du aufpassen musst — ohne Marketing-Filter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
