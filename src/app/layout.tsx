import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GridOverlay } from "@/components/ui/GridOverlay";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "NEGATIVE ZERO",
  description: "MOTHERSHIP UNDER CONSTRUCTION",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} antialiased bg-black text-white`}>
      <body className="font-sans min-h-screen bg-black text-white relative selection:bg-white selection:text-black">
        <GridOverlay />
        {children}
      </body>
    </html>
  );
}
