"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function NotFound() {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const seg = window.location.pathname.split("/").filter(Boolean);
    const found = seg.find((s) => ["es", "en", "ru", "zh"].includes(s));
    // eslint-disable-next-line react-hooks/set-state-in-effect -- derive lang from URL once on mount
    setLang(found || "es");

    const tl = gsap.timeline();
    tl.to("#element-404-1", { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
      .to("#element-404-2", { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
      .to("#element-404-3", { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
      .to("#element-404-4", { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" });
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-b from-slate-100 via-blue-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="absolute inset-0 my-8 flex items-center justify-center">
        <svg
          id="animation-404-circle"
          className="h-64 w-64 overflow-visible text-cyan-500/30 sm:h-80 sm:w-80 dark:text-cyan-400/20"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-spin"
            style={{ animationDuration: "20s" }}
          />
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
          <circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.3" className="animate-pulse" />
          <circle cx="100" cy="100" r="5" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-2xl space-y-8 px-4 text-center">
        <div className="relative">
          <h1
            id="element-404-1"
            className={cn(
              "animate-pulse bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-9xl font-bold",
              "text-transparent sm:text-[12rem]",
            )}
            style={{ transform: "translate(-200px)", opacity: 0 }}
          >
            404
          </h1>
        </div>
        <div className="space-y-4">
          <h2
            id="element-404-2"
            className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-gray-100"
            style={{ transform: "translate(200px)", opacity: 0 }}
            data-i18n="error_404_title"
          >
            Página no encontrada
          </h2>
          <p
            id="element-404-3"
            className="mx-auto max-w-md text-base text-gray-600 sm:text-lg dark:text-gray-400"
            style={{ transform: "translate(-200px)", opacity: 0 }}
            data-i18n="error_404_description"
          >
            Parece que te has perdido en el ciberespacio.
          </p>
        </div>
        <div id="element-404-4" className="pt-4" style={{ transform: "translateY(200px)", opacity: 0 }}>
          <Link
            href={`/${lang}/`}
            className={cn(
              "inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3",
              "text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:from-cyan-400 hover:to-purple-400",
            )}
            data-i18n="error_404_back_home"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
