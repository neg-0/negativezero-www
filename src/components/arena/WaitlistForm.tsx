"use client";

import { useState } from "react";
import { clsx } from "clsx";

export interface WaitlistTheme {
  // Input
  inputBg?: string;
  inputBorder?: string;
  inputText?: string;
  placeholder?: string;
  placeholderColor?: string;
  focusBorder?: string;
  focusBg?: string;

  // Button
  buttonBg?: string;
  buttonHover?: string;
  buttonText?: string;
  buttonLabel?: string;
  loadingLabel?: string;

  // Success state
  successBg?: string;
  successBorder?: string;
  successTitle?: string;
  successTitleColor?: string;
  successText?: string;
  successTextColor?: string;

  // Error state
  errorText?: string;

  // Footer text
  footerText?: string;
  footerColor?: string;

  // General
  font?: string;
  rounded?: string;
  shadow?: string;
}

const defaultTheme: WaitlistTheme = {
  inputBg: "bg-black/40",
  inputBorder: "border-white/10",
  inputText: "text-white",
  placeholder: "enter_email_address...",
  placeholderColor: "placeholder-white/20",
  focusBorder: "focus:border-green-500/50",
  focusBg: "focus:bg-black/60",

  buttonBg: "bg-green-500",
  buttonHover: "hover:bg-green-400",
  buttonText: "text-black",
  buttonLabel: "JOIN_List",
  loadingLabel: "[...]",

  successBg: "bg-green-900/10",
  successBorder: "border-green-500/20",
  successTitle: "ACCESS GRANTED",
  successTitleColor: "text-green-400",
  successText: "We'll notify you when deployment begins.",
  successTextColor: "text-green-300/60",

  errorText: "text-red-500",

  footerText: "// encrypted_transmission // no_spam",
  footerColor: "text-white/30",

  font: "font-mono",
  rounded: "rounded-none",
  shadow: "",
};

interface WaitlistFormProps {
  product: string;
  theme?: WaitlistTheme;
}

export function WaitlistForm({ product, theme = {} }: WaitlistFormProps) {
  // Merge default theme with provided theme
  const t = { ...defaultTheme, ...theme };

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, product }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess(true);
      setCount(data.count);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className={clsx(
        "text-center p-6 border animate-in fade-in slide-in-from-bottom-2 duration-500",
        t.successBg,
        t.successBorder,
        t.rounded,
        t.shadow
      )}>
        <h3 className={clsx("text-xl font-bold mb-2", t.successTitleColor, t.font)}>
          {t.successTitle}
        </h3>
        <p className={clsx("text-sm", t.successTextColor, t.font)}>
          {count ? `You are #${count} in the queue.` : ""}
          <br/>
          {t.successText}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex w-full shadow-sm">
          <input
            type="email"
            placeholder={t.placeholder}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={clsx(
              "flex-1 px-4 py-3 border focus:outline-none transition-all text-sm w-full",
              t.inputBg,
              t.inputBorder,
              t.inputText,
              t.placeholderColor,
              t.focusBorder,
              t.focusBg,
              t.font,
              // Handle rounded corners for input group
              t.rounded === "rounded-none" ? "rounded-none" : `${t.rounded} rounded-r-none border-r-0`
            )}
          />
          <button
            type="submit" 
            disabled={loading} 
            className={clsx(
              "font-bold px-6 transition-colors flex items-center justify-center whitespace-nowrap",
              t.buttonBg,
              t.buttonHover,
              t.buttonText,
              t.font,
              // Handle rounded corners for input group
              t.rounded === "rounded-none" ? "rounded-none" : `${t.rounded} rounded-l-none`
            )}
          >
            {loading ? t.loadingLabel : t.buttonLabel}
          </button>
        </div>
        
        {error && (
          <p className={clsx("text-xs mt-1", t.errorText, t.font)}>
            Error: {error}
          </p>
        )}
        
        <p className={clsx(
          "text-[10px] text-center uppercase tracking-widest mt-2",
          t.footerColor,
          t.font
        )}>
          {t.footerText}
        </p>
      </form>
    </div>
  );
}
