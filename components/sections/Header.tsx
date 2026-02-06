'use client';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <nav className="glass-strong rounded-2xl px-6 py-4 flex items-center justify-between backdrop-blur-xl">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2 group"
          >
            <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              Andy Steinberger
            </span>
            <span className="text-gray-600 font-bold">×</span>
            <span className="text-xl font-bold gradient-text">
              OpenClaw Deep Dive
            </span>
          </a>

          {/* CTA */}
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden sm:block px-6 py-3 text-sm font-bold text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)'
            }}
          >
            Ticket sichern
          </button>
        </nav>
      </div>
    </header>
  );
}
