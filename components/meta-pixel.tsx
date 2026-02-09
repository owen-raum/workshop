"use client";

import { useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "cookie-consent";
const INTERNAL_TRAFFIC_KEY = "internal-traffic";

type StoredConsent = {
  value: "true" | "false";
  expiresAt: number;
};

function hasConsent(): boolean {
  if (typeof window === "undefined") return false;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return false;

  try {
    const parsed = JSON.parse(raw) as StoredConsent;
    if (!parsed.expiresAt || Date.now() > parsed.expiresAt) {
      window.localStorage.removeItem(STORAGE_KEY);
      return false;
    }
    return parsed.value === "true";
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return false;
  }
}

function isInternalTraffic(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(INTERNAL_TRAFFIC_KEY) === "true";
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
  }
}

const PIXEL_ID = "639641088589650";

function loadPixel() {
  if (typeof window === "undefined") return;
  if (!hasConsent()) return;
  if (isInternalTraffic()) return;

  // Already loaded
  if (window.fbq) {
    window.fbq("track", "PageView");
    return;
  }

  // Meta Pixel base code
  /* eslint-disable @typescript-eslint/no-explicit-any */
  (function (f: any, b: Document, e: string, v: string, pixelId: string) {
    let n: any, t: any, s: any;
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode?.insertBefore(t, s);
    
    // Init and track after script setup
    f.fbq("init", pixelId);
    f.fbq("track", "PageView");
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js",
    PIXEL_ID
  );
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

export function MetaPixel() {
  const pathname = usePathname();

  const tryLoadPixel = useCallback(() => {
    loadPixel();
  }, []);

  // Try on mount
  useEffect(() => {
    tryLoadPixel();
  }, [tryLoadPixel]);

  // Try on route change
  useEffect(() => {
    if (window.fbq && hasConsent() && !isInternalTraffic()) {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  // Listen for consent changes
  useEffect(() => {
    const handleConsent = () => {
      tryLoadPixel();
    };

    window.addEventListener("cookie-consent-updated", handleConsent);
    window.addEventListener("storage", handleConsent);

    return () => {
      window.removeEventListener("cookie-consent-updated", handleConsent);
      window.removeEventListener("storage", handleConsent);
    };
  }, [tryLoadPixel]);

  return null;
}
