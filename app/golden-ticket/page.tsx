'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  code: string;
}

const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  code: '',
};

export default function GoldenTicketPage() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (field: keyof FormState) => (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    setError(null);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/golden-ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          code: formData.code.trim(),
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || 'Etwas ist schiefgelaufen.');
      }

      setSuccess(true);
      setFormData(initialState);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Etwas ist schiefgelaufen.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F1EFEB] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">🎫</div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Löse dein Golden Ticket ein
          </h1>
          <p className="text-gray-500 text-base">
            Du hast einen Code bekommen? Perfekt. Trag dich ein und sichere dir deinen Platz.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[rgba(34,34,34,0.12)] shadow-[0_25px_80px_-60px_rgba(17,17,17,0.5)] p-7 sm:p-8">
          {success ? (
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">
                Du bist dabei! 🎉
              </h2>
              <p className="text-gray-500">
                Check deine E-Mails – du bekommst alle Infos zum Deep Dive.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Vorname
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange('firstName')}
                    autoComplete="given-name"
                    required
                    className="w-full px-4 py-3 rounded-xl border text-gray-900 bg-[#f8f7f4] placeholder-gray-400 text-base transition-colors outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1 border-[rgba(34,34,34,0.12)] hover:border-[rgba(34,34,34,0.2)]"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachname
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange('lastName')}
                    autoComplete="family-name"
                    required
                    className="w-full px-4 py-3 rounded-xl border text-gray-900 bg-[#f8f7f4] placeholder-gray-400 text-base transition-colors outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1 border-[rgba(34,34,34,0.12)] hover:border-[rgba(34,34,34,0.2)]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-Mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                  autoComplete="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border text-gray-900 bg-[#f8f7f4] placeholder-gray-400 text-base transition-colors outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1 border-[rgba(34,34,34,0.12)] hover:border-[rgba(34,34,34,0.2)]"
                />
              </div>

              <div>
                <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
                  Dein Code
                </label>
                <input
                  id="code"
                  type="text"
                  value={formData.code}
                  onChange={handleChange('code')}
                  required
                  className="w-full px-4 py-3 rounded-xl border text-gray-900 bg-[#f8f7f4] placeholder-gray-400 text-base transition-colors outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1 border-[rgba(34,34,34,0.12)] hover:border-[rgba(34,34,34,0.2)]"
                />
              </div>

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 text-center">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 rounded-xl font-semibold text-base transition-colors ${
                  loading ? 'bg-gray-400 text-white cursor-wait' : 'bg-[#111111] hover:bg-[#1a1a1a] text-white'
                }`}
              >
                {loading ? 'Wird eingelöst...' : 'Ticket einlösen'}
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          Dein Code ist persönlich und nur einmal verwendbar. Kein Code? Dann hier entlang → <a href="/" className="underline hover:text-gray-600">agents.andy.cy</a>
        </p>
      </div>
    </main>
  );
}
