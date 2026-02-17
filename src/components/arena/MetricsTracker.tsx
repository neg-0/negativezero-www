"use client";

import { useEffect } from "react";

export function MetricsTracker({ product }: { product: string }) {
  useEffect(() => {
    // Track page view
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product, event: "page_view" }),
    });

    const handleCtaClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cta]")) {
        fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ product, event: "cta_click" }),
        });
      }
    };
    window.addEventListener("click", handleCtaClick);
    return () => window.removeEventListener("click", handleCtaClick);
  }, [product]);

  return null;
}
