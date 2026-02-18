"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/10 text-[10px] uppercase tracking-widest text-neutral-600 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex gap-8">
        <span>© 2026 Negative Zero Inc.</span>
        <span>Everywhere / Cloud / Edge</span>
      </div>
      <div className="flex gap-8">
        <Link href="https://shiplog.io" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">ShipLog</Link>
        <Link href="/arena" className="hover:text-white transition-colors">Arena</Link>
        <Link href="https://x.com/negativezeroinc" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</Link>
        <Link href="https://github.com/neg-0" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</Link>
      </div>
    </footer>
  );
}
