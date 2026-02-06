"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent";
const CONSENT_MONTHS = 6;

type ConsentValue = "true" | "false";

type StoredConsent = {
  value: ConsentValue;
  expiresAt: number;
};

function getStoredConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as StoredConsent;
    if (!parsed.expiresAt || Date.now() > parsed.expiresAt) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed.value;
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

function setStoredConsent(value: ConsentValue) {
  const expiresAt = Date.now() + 1000 * 60 * 60 * 24 * 30 * CONSENT_MONTHS;
  const payload: StoredConsent = { value, expiresAt };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  window.dispatchEvent(new Event("cookie-consent-updated"));
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const existing = getStoredConsent();
    setIsVisible(!existing);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="mx-4 w-full max-w-md rounded-2xl border border-[rgba(34,34,34,0.12)] bg-[var(--bg-primary)] p-8 shadow-2xl">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111111]">
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="font-display text-xl font-semibold text-gray-900">Cookie-Einstellungen</h2>
        </div>
        
        <p className="mb-6 text-sm leading-relaxed text-gray-600">
          Wir verwenden Cookies, um dein Erlebnis zu verbessern und anonyme Nutzungsstatistiken zu erheben. Details findest du in unserer{" "}
          <Link href="/datenschutz" className="font-medium text-gray-900 underline underline-offset-4 hover:text-gray-700">
            Datenschutzerklärung
          </Link>
          .
        </p>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={() => {
              setStoredConsent("true");
              setIsVisible(false);
            }}
            className="w-full rounded-xl bg-[#111111] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1a1a]"
          >
            Alles akzeptieren
          </button>
          <button
            type="button"
            onClick={() => {
              setStoredConsent("false");
              setIsVisible(false);
            }}
            className="w-full rounded-xl border border-[rgba(34,34,34,0.12)] bg-transparent px-6 py-3.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            Nur notwendige
          </button>
        </div>
      </div>
    </div>
  );
}
