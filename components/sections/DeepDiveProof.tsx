import { Star } from 'lucide-react';

export function DeepDiveProof() {
  const quotes = [
    {
      text: 'Grandiose Übersicht in nur 90 Minuten.',
      name: 'Micha',
    },
    {
      text: 'Sehr genial.',
      name: 'Maurice',
    },
    {
      text: 'War mega interessant.',
      name: 'Kerstin',
    },
    {
      text: 'Super Überblick, danke.',
      name: 'Felix',
    },
    {
      text: 'Super spannend. Freue mich auf den Lernpfad.',
      name: 'Sandra',
    },
    {
      text: 'Richtig gut, vielen Dank.',
      name: 'Nicolas',
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 px-5 sm:px-8 md:px-16 lg:px-24 bg-[#F1EFEB]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="reveal inline-flex items-center gap-2 bg-white/80 border border-gray-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-gray-700">
              🐸 Über 25 Teilnehmer beim ersten Deep Dive
            </span>
          </div>
          <h2 className="reveal font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Stimmen vom Deep Dive #1
          </h2>
          <p className="reveal text-base sm:text-lg text-gray-600">
            Echtes Feedback von echten Teilnehmern.
          </p>
        </div>

        {/* Quote Grid — compact cards */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-transparent rounded-xl p-5 border border-[rgba(34,34,34,0.12)] flex flex-col justify-between"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                &quot;{quote.text}&quot;
              </p>
              <div className="text-sm font-medium text-gray-900">
                {quote.name}
                <span className="text-gray-400 font-normal"> · Deep Dive Teilnehmer</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
