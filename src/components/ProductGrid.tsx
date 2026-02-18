"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const products = [
  {
    id: "shiplog",
    name: "ShipLog",
    role: "Automated Changelogs",
    status: "LIVE",
    description: "AI-powered changelogs that write themselves. Connect your GitHub repo and get beautiful, human-readable release notes — automatically.",
    href: "https://shiplog.io" 
  },
  {
    id: "armourmail",
    name: "ArmourMail", 
    role: "Email Security",
    status: "ALPHA",
    description: "Email threat detection for AI agents. SPF/DKIM validation, phishing detection, and quarantine management.",
    href: "/arena/armourmail" 
  },
  {
    id: "chocks",
    name: "Chocks",
    role: "Veteran Transition Platform",
    status: "BETA",
    description: "SkillBridge opportunity matching for transitioning service members. Find your next mission with AI-powered career alignment.",
    href: "/arena/chocks" 
  },
  {
    id: "glasswall",
    name: "GlassWall",
    role: "Client-Facing PM",
    status: "ALPHA",
    description: "Transparent project management for agencies. Give clients a real-time window into progress without the 'what's the status?' emails.",
    href: "/arena/glasswall" 
  },
  {
    id: "anti-cpq",
    name: "Anti-CPQ",
    role: "Sales Quoting Engine",
    status: "BUILDING",
    description: "Kill the spreadsheet quote. Live visual quote builder that closes deals faster than your competitor's PDF.",
    href: "/arena/anti-cpq"
  },
  {
    id: "refinery",
    name: "The Refinery",
    role: "Idea Validation Engine",
    status: "ACTIVE",
    description: "48-hour idea validation sprints. From pain point to landing page to verdict. Watch ideas fight for survival.",
    href: "/refinery" 
  }
];

function getProductStyles(id: string, status: string) {
  // Base styles
  let borderClass = "border-white/20";
  let hoverShadow = "hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]";
  let textAccent = "group-hover:text-white";

  switch (id) {
    case "shiplog":
      borderClass = "border-l-4 border-l-emerald-500 border-y border-r border-white/20";
      hoverShadow = "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]";
      textAccent = "group-hover:text-emerald-400";
      break;
    case "armourmail":
      borderClass = "border-t-4 border-t-red-500 border-x border-b border-white/20";
      hoverShadow = "hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]";
      textAccent = "group-hover:text-red-400";
      break;
    case "chocks":
      borderClass = "border-t-4 border-t-blue-500 border-x border-b border-white/20";
      hoverShadow = "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]";
      textAccent = "group-hover:text-blue-400";
      break;
    case "glasswall":
      borderClass = "border-t-4 border-t-purple-500 border-x border-b border-white/20";
      hoverShadow = "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]";
      textAccent = "group-hover:text-purple-400";
      break;
    case "anti-cpq":
      borderClass = "border-t-4 border-t-amber-500 border-x border-b border-white/20";
      hoverShadow = "hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]";
      textAccent = "group-hover:text-amber-400";
      break;
    case "refinery":
      borderClass = "border-t-4 border-t-cyan-500 border-x border-b border-white/20";
      hoverShadow = "hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]";
      textAccent = "group-hover:text-cyan-400";
      break;
    default:
      borderClass = "border border-white/20";
  }

  return { borderClass, hoverShadow, textAccent };
}

function getStatusBadgeStyles(status: string) {
  switch (status) {
    case "LIVE":
      return "bg-emerald-500 text-black font-bold border-none shadow-[0_0_10px_rgba(16,185,129,0.4)]";
    case "ALPHA":
      return "bg-red-500/20 text-red-400 border-red-500/50";
    case "BETA":
      return "bg-blue-500/20 text-blue-400 border-blue-500/50";
    case "BUILDING":
      return "bg-amber-500/20 text-amber-400 border-amber-500/50";
    case "ACTIVE":
      return "bg-cyan-500/20 text-cyan-400 border-cyan-500/50";
    default:
      return "text-neutral-400 border-white/20";
  }
}

export function ProductGrid() {
  return (
    <section className="w-full py-24 border-t border-white/10 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-sm tracking-[0.3em] uppercase text-neutral-500 mb-4">Product Ecosystem</h2>
          <p className="text-2xl text-white font-light">
            Tools for builders, by builders.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const { borderClass, hoverShadow, textAccent } = getProductStyles(product.id, product.status);
            const statusStyles = getStatusBadgeStyles(product.status);
            
            return (
              <div 
                key={product.id} 
                className={cn(
                  "group relative bg-black p-8 transition-all duration-300 flex flex-col h-[400px]",
                  borderClass,
                  hoverShadow
                )}
              >
                <div className="flex justify-between items-start mb-6">
                  <span className={cn(
                    "text-[10px] uppercase tracking-widest px-2 py-1 border font-medium transition-all",
                    statusStyles
                  )}>
                    {product.status}
                  </span>
                  <ArrowUpRight className={cn("w-5 h-5 text-neutral-500 transition-colors", textAccent)} />
                </div>
                
                <h3 className={cn("text-2xl font-bold tracking-tighter text-white mb-4 transition-transform duration-300 group-hover:translate-x-1", textAccent)}>
                  {product.name}
                </h3>
                
                <p className="text-sm text-neutral-400 leading-relaxed font-mono flex-grow group-hover:text-neutral-300 transition-colors">
                  {product.description}
                </p>

                <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-end">
                  {product.id === "shiplog" ? (
                    <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">
                      Visit shiplog.io &rarr;
                    </span>
                  ) : (
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-neutral-300 transition-colors">
                      {product.role}
                    </span>
                  )}
                </div>

                <Link href={product.href} className="absolute inset-0 z-10 focus:outline-none focus:ring-2 focus:ring-emerald-500/50">
                  <span className="sr-only">View {product.name}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
