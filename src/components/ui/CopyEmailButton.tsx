"use client";

import { cn } from "@/utils/cn";
import { useState } from "react";

const COPY_CLIPBOARD_OUTLINE_PATH =
  "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 " +
  "0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 " +
  "2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 " +
  "2.25 0 0 1-1.07-1.916V6.75";

const COPY_DOCUMENT_OUTLINE_PATH =
  "M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 " +
  "0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 " +
  "0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 " +
  "2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184";

interface CopyEmailButtonProps {
  email: string;
  successText: string;
  ariaLabel?: string;
  /** `solid`: fondo plano tipo botón (p. ej. hero). `outlined`: borde y fondo suave (p. ej. contacto). */
  variant?: "outlined" | "solid";
}

export default function CopyEmailButton({
  email,
  successText,
  ariaLabel = "Copiar dirección de correo electrónico",
  variant = "outlined",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (err) {
      console.error("Error copying email:", err);
      window.prompt("Copia el correo (Ctrl+C y cierra):", email);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "flex max-w-fit cursor-pointer items-center gap-2 text-sm transition-all duration-300",
        variant === "solid" &&
          cn(
            "hero-btn-solid min-h-[2.625rem] items-center justify-center rounded-lg px-3.5 py-2.5 font-medium sm:px-4",
            "focus-visible:z-[1]",
          ),
        variant === "outlined" &&
          cn(
            "rounded-full border px-3.5 py-1.5",
            "z-[1] outline-none focus-visible:border-[rgb(var(--color-primary))] focus-visible:shadow-[var(--focus-ring-shadow)]",
          ),
        copied &&
          (variant === "solid"
            ? cn(
                "scale-[1.01] border-0 bg-gradient-to-r from-emerald-600 to-teal-600 text-white",
                "shadow-md shadow-emerald-600/30 dark:from-emerald-500 dark:to-teal-500 dark:shadow-emerald-900/40",
              )
            : cn(
                "scale-[1.02] border border-emerald-500/60 bg-emerald-50/80 text-emerald-700 shadow-none",
                "dark:border-emerald-500/40 dark:bg-emerald-950/30 dark:text-emerald-400",
              )),
        !copied &&
          (variant === "solid"
            ? cn(
                "border-0 bg-gradient-to-r from-cyan-500 to-purple-500 text-white",
                "shadow-md ring-1 shadow-cyan-500/25 ring-white/25",
                "hover:from-cyan-400 hover:to-purple-400 hover:shadow-lg hover:shadow-cyan-500/30",
                "dark:from-cyan-500 dark:to-purple-600 dark:shadow-purple-950/50 dark:ring-white/10",
                "dark:hover:from-cyan-400 dark:hover:to-purple-500",
              )
            : cn(
                "border border-slate-300/80 bg-transparent font-medium text-slate-700 shadow-none",
                "hover:border-cyan-500/55 hover:text-cyan-800",
                "dark:border-slate-600/80 dark:text-slate-300",
                "dark:hover:border-cyan-400/45 dark:hover:text-cyan-200",
              )),
      )}
      aria-label={ariaLabel}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={cn("shrink-0", variant === "solid" ? "size-5" : "size-6")}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={COPY_CLIPBOARD_OUTLINE_PATH} />
      </svg>

      <span
        className={cn(
          "email-text",
          copied && "whitespace-nowrap",
          !copied && variant === "solid" && "max-w-[min(100vw-6rem,16rem)] truncate text-[13px] sm:text-sm",
          !copied && variant === "outlined" && "whitespace-nowrap",
        )}
      >
        {copied ? successText : email}
      </span>

      {copied ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className={cn("size-5", variant === "solid" ? "text-white" : "text-green-500")}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={cn("shrink-0", variant === "solid" ? "size-5" : "size-6")}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={COPY_DOCUMENT_OUTLINE_PATH} />
        </svg>
      )}
    </button>
  );
}
