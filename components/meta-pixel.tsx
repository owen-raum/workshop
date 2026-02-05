"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "cookie-consent";

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

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
    __metaPixelInitialized?: boolean;
  }
}

export function MetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "639641088589650";
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const updateConsent = () => setEnabled(hasConsent());
    updateConsent();
    window.addEventListener("cookie-consent-updated", updateConsent);
    window.addEventListener("storage", updateConsent);
    return () => {
      window.removeEventListener("cookie-consent-updated", updateConsent);
      window.removeEventListener("storage", updateConsent);
    };
  }, []);

  useEffect(() => {
    if (!enabled || !pixelId || typeof window === "undefined") return;

    if (!window.fbq) {
      const w = window as typeof window & {
        fbq?: any;
        _fbq?: any;
      };

      // Meta Pixel base code
      /* eslint-disable @typescript-eslint/no-explicit-any */
      (function (f: any, b: Document, e: string, v: string) {
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
      })(
        w,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      /* eslint-enable @typescript-eslint/no-explicit-any */
    }

    if (!window.__metaPixelInitialized) {
      window.fbq?.("init", pixelId);
      window.__metaPixelInitialized = true;
    }

    window.fbq?.("track", "PageView");
  }, [enabled, pixelId, pathname]);

  return null;
}
