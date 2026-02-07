"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function PurchaseTracker() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const trackedSessionRef = useRef<string | null>(null);

  useEffect(() => {
    if (!sessionId || trackedSessionRef.current === sessionId) return;

    trackedSessionRef.current = sessionId;

    const controller = new AbortController();

    async function verifyAndTrack() {
      try {
        const response = await fetch(
          `/api/stripe/verify?session_id=${encodeURIComponent(sessionId!)}`,
          { signal: controller.signal }
        );

        if (!response.ok) return;

        const data = (await response.json()) as {
          payment_status?: string;
          amount_total?: number | null;
          currency?: string | null;
        };

        if (data.payment_status !== "paid") return;

        const value = typeof data.amount_total === "number"
          ? data.amount_total / 100
          : undefined;
        const currency = data.currency?.toUpperCase();

        if (typeof window !== "undefined" && window.fbq && value !== undefined && currency) {
          window.fbq(
            "track",
            "Purchase",
            { value, currency },
            { eventID: sessionId }
          );
        }
      } catch {
        // ignore
      }
    }

    verifyAndTrack();

    return () => controller.abort();
  }, [sessionId]);

  return null;
}
