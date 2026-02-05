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
    <div className="fixed inset-x-0 bottom-0 z-[200] bg-[#0B0B0B] text-white border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-4 md:flex md:items-center md:justify-between md:gap-6">
        <div className="text-sm text-white/80">
          Wir verwenden Cookies, um das Nutzungserlebnis zu verbessern. Details in der{" "}
          <Link href="/datenschutz" className="text-white underline underline-offset-4 hover:text-white/70">
            Datenschutzerklärung
          </Link>
          .
        </div>
        <div className="mt-3 flex items-center gap-3 md:mt-0">
          <button
            type="button"
            onClick={() => {
              setStoredConsent("false");
              setIsVisible(false);
            }}
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white/80 hover:bg-white/10"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={() => {
              setStoredConsent("true");
              setIsVisible(false);
            }}
            className="rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500"
          >
            Alles akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
