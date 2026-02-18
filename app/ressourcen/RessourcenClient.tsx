'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const PASSWORD = 'deepdive2026';
const STORAGE_KEY = 'ressourcen_auth';

interface Doc {
  slug: string;
  title: string;
  emoji: string;
  content: string;
}

interface Props {
  docs: Doc[];
}

export function RessourcenClient({ docs }: Props) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [activeSlug, setActiveSlug] = useState(docs[0]?.slug ?? '');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showRaw, setShowRaw] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'true') setAuthenticated(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, 'true');
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAuthenticated(false);
    setPassword('');
  };

  const activeDoc = docs.find((d) => d.slug === activeSlug) ?? docs[0];

  // Avoid hydration mismatch
  if (!mounted) return null;

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#F1EFEB] flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Logo area */}
          <div className="text-center mb-10">
            <a href="/" className="inline-block mb-6">
              <span className="font-display text-xl font-semibold text-gray-900">Andy Steinberger</span>
              <span className="text-gray-500 text-sm ml-2">× OpenClaw</span>
            </a>
            <h1 className="font-display text-3xl font-bold text-gray-900 mb-3">
              Deep Dive Unterlagen
            </h1>
            <p className="text-gray-500 text-base">
              Gib das Passwort aus dem Workshop ein.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl border border-[rgba(34,34,34,0.08)] shadow-sm p-8">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Passwort
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(false); }}
                  placeholder="Workshop-Passwort"
                  autoFocus
                  autoComplete="current-password"
                  className={`w-full px-4 py-3 rounded-xl border text-gray-900 bg-[#f8f7f4] placeholder-gray-400 text-base transition-colors outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1 ${
                    error
                      ? 'border-red-400 bg-red-50'
                      : 'border-[rgba(34,34,34,0.12)] hover:border-[rgba(34,34,34,0.2)]'
                  }`}
                />
                {error && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1.5">
                    <span>✗</span> Falsches Passwort. Bitte nochmal versuchen.
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#111111] hover:bg-[#1a1a1a] text-white font-semibold rounded-xl transition-colors text-base"
              >
                Zugang öffnen
              </button>
            </form>
          </div>

          <p className="text-center text-sm text-gray-400 mt-6">
            Nur für Teilnehmer des OpenClaw Deep Dives.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F1EFEB]">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F1EFEB]/95 backdrop-blur-xl border-b border-[rgba(34,34,34,0.10)]">
        <div className="h-[62px] max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Mobile sidebar toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 -ml-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Navigation öffnen"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                {sidebarOpen ? (
                  <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                ) : (
                  <>
                    <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </>
                )}
              </svg>
            </button>
            <a href="/" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
              <span className="font-display text-base md:text-lg font-semibold text-gray-900">Andy Steinberger</span>
              <span className="text-gray-400 text-sm hidden sm:inline">× Deep Dive Unterlagen</span>
            </a>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-400 hover:text-gray-700 transition-colors flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9.5 5V3.5A1.5 1.5 0 008 2H3.5A1.5 1.5 0 002 3.5v7A1.5 1.5 0 003.5 12H8a1.5 1.5 0 001.5-1.5V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              <path d="M5.5 7h7M10 5l2.5 2L10 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Abmelden
          </button>
        </div>
      </header>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Layout */}
      <div className="pt-[62px] max-w-[1400px] mx-auto flex">
        {/* Sidebar */}
        <aside
          className={`
            fixed md:sticky top-[62px] z-40 md:z-auto
            h-[calc(100vh-62px)] md:h-[calc(100vh-62px)]
            w-[280px] shrink-0
            bg-[#F1EFEB] md:bg-transparent
            border-r border-[rgba(34,34,34,0.08)]
            overflow-y-auto
            transition-transform duration-200 ease-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            flex flex-col
          `}
        >
          <nav className="p-5 flex flex-col gap-1">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
              Materialien
            </p>
            {docs.map((doc) => (
              <button
                key={doc.slug}
                onClick={() => {
                  setActiveSlug(doc.slug);
                  setSidebarOpen(false);
                  window.scrollTo({ top: 0 });
                }}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 flex items-center gap-2.5 ${
                  activeSlug === doc.slug
                    ? 'bg-[#111111] text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-[rgba(34,34,34,0.06)]'
                }`}
              >
                <span className="text-base shrink-0">{doc.emoji}</span>
                <span className="leading-tight">{doc.title}</span>
              </button>
            ))}
          </nav>

          {/* Sidebar footer */}
          <div className="mt-auto p-5 border-t border-[rgba(34,34,34,0.08)]">
            <p className="text-xs text-gray-400 leading-relaxed">
              Exklusiv für Teilnehmer des OpenClaw Deep Dives 🔒
            </p>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 px-6 md:px-10 lg:px-16 py-10 md:py-12">
          {activeDoc && (
            <article className="max-w-3xl mx-auto">
              {/* Doc header */}
              <div className="mb-8 pb-8 border-b border-[rgba(34,34,34,0.08)]">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{activeDoc.emoji}</span>
                    <span className="text-sm font-medium text-gray-400 bg-[rgba(34,34,34,0.06)] px-3 py-1 rounded-full">
                      {activeDoc.title}
                    </span>
                  </div>
                  {/* Raw/Rendered Toggle */}
                  <button
                    onClick={() => setShowRaw(!showRaw)}
                    className={`flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-lg transition-all ${
                      showRaw 
                        ? 'bg-[#111111] text-white' 
                        : 'bg-[rgba(34,34,34,0.06)] text-gray-600 hover:bg-[rgba(34,34,34,0.1)]'
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 4h10M2 7h10M2 10h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                    {showRaw ? 'Markdown' : 'Markdown anzeigen'}
                  </button>
                </div>
              </div>

              {/* Markdown content */}
              {showRaw ? (
                <div className="relative">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(activeDoc.content);
                    }}
                    className="absolute top-3 right-3 flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-gray-600 bg-[rgba(255,255,255,0.9)] px-2.5 py-1.5 rounded-md transition-colors"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <rect x="4" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M2 8V2.5A.5.5 0 012.5 2H8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                    Kopieren
                  </button>
                  <pre className="bg-[#1a1a1a] text-gray-300 text-sm p-5 pt-12 rounded-xl overflow-x-auto whitespace-pre-wrap break-words leading-relaxed">
                    <code>{activeDoc.content}</code>
                  </pre>
                </div>
              ) : (
                <div className="prose-ressourcen">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {activeDoc.content}
                  </ReactMarkdown>
                </div>
              )}

              {/* Bottom nav */}
              <div className="mt-16 pt-8 border-t border-[rgba(34,34,34,0.08)] flex items-center justify-between gap-4">
                {(() => {
                  const idx = docs.findIndex((d) => d.slug === activeSlug);
                  const prev = docs[idx - 1];
                  const next = docs[idx + 1];
                  return (
                    <>
                      <div>
                        {prev && (
                          <button
                            onClick={() => { setActiveSlug(prev.slug); window.scrollTo({ top: 0 }); }}
                            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors group"
                          >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:-translate-x-0.5 transition-transform">
                              <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>{prev.emoji} {prev.title}</span>
                          </button>
                        )}
                      </div>
                      <div>
                        {next && (
                          <button
                            onClick={() => { setActiveSlug(next.slug); window.scrollTo({ top: 0 }); }}
                            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors group"
                          >
                            <span>{next.emoji} {next.title}</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>
            </article>
          )}
        </main>
      </div>
    </div>
  );
}
