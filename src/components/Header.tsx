"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/#products" },
    { name: "Arena", href: "/arena" },
    { name: "Refinery", href: "/refinery" },
    { name: "About", href: "/about" },
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-3 h-3 bg-white group-hover:bg-green-500 transition-colors animate-pulse"></div>
          <h1 className="text-sm font-bold tracking-[0.2em] uppercase text-white group-hover:text-green-500 transition-colors">
            Negative Zero Inc.
          </h1>
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href}
            className={cn(
              "text-[10px] tracking-[0.2em] uppercase transition-colors hover:text-green-500",
              pathname === item.href ? "text-white font-bold" : "text-neutral-500"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="hidden lg:flex items-center gap-6 text-[10px] tracking-widest uppercase text-neutral-500">
        <span>Latency: 12ms</span>
        <span className="text-green-500 flex items-center gap-2">
          System Online <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
        </span>
      </div>

      {/* Mobile Menu Button Placeholder - for now just keep simple */}
      <div className="md:hidden">
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </div>
    </motion.header>
  );
}
