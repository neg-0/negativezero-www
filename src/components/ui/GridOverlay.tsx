"use client";

import { useState, useEffect } from "react";

export function GridOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "G" && e.shiftKey) {
        setShow((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div className="container mx-auto h-full grid-swiss relative opacity-20 border-x border-swiss">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-full border-r border-swiss last:border-r-0 col-span-1" />
        ))}
      </div>
    </div>
  );
}
