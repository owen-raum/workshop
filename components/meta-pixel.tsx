"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
    __metaPixelInitialized?: boolean;
  }
}

export function MetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const pathname = usePathname();

  useEffect(() => {
    if (!pixelId || typeof window === "undefined") return;

    if (!window.fbq) {
      const w = window as typeof window & {
        fbq?: any;
        _fbq?: any;
      };

      (function (f, b, e, v, n, t, s) {
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
        t = b.createElement(e);
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
    }

    if (!window.__metaPixelInitialized) {
      window.fbq?.("init", pixelId);
      window.__metaPixelInitialized = true;
    }

    window.fbq?.("track", "PageView");
  }, [pixelId, pathname]);

  return null;
}
