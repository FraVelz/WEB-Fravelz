"use client";

import "./not-found.css";

import { cn } from "@/utils/cn";
import { prefersReducedMotion } from "@/lib/motion";
import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";

const NOT_FOUND_ELEMENTS = ["#element-404-1", "#element-404-2", "#element-404-3", "#element-404-4"] as const;

export function NotFoundContent({
  lang,
  title,
  description,
  backHome,
}: {
  lang: string;
  title: string;
  description: string;
  backHome: string;
}) {
  useEffect(() => {
    if (prefersReducedMotion()) {
      gsap.set(NOT_FOUND_ELEMENTS, { clearProps: "all", opacity: 1, x: 0, y: 0 });
      return;
    }

    const tl = gsap.timeline();

    tl.to("#element-404-1", { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
      .to("#element-404-2", { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
      .to("#element-404-3", { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
      .to("#element-404-4", { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" });
  }, []);

  return (
    <main
      className={cn(
        "flex min-h-screen items-center justify-center bg-linear-to-b from-[rgb(var(--color-bg))] via-[rgb(var(--color-bg))] to-[rgb(var(--color-card))]",
      )}
    >
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
            className={cn("not-found-code text-9xl font-bold sm:text-[12rem]")}
            style={{ transform: "translate(-200px)", opacity: 0 }}
          >
            404
          </h1>
        </div>
        <div className="space-y-4">
          <h2
            id="element-404-2"
            className="text-3xl font-bold text-[rgb(var(--color-text))] sm:text-4xl"
            style={{ transform: "translate(200px)", opacity: 0 }}
          >
            {title}
          </h2>
          <p
            id="element-404-3"
            className="mx-auto max-w-md text-base text-[rgb(var(--color-text-muted))] sm:text-lg"
            style={{ transform: "translate(-200px)", opacity: 0 }}
          >
            {description}
          </p>
        </div>
        <div id="element-404-4" className="pt-4" style={{ transform: "translateY(200px)", opacity: 0 }}>
          <Link
            href={`/${lang}/`}
            className={cn(
              "inline-flex cursor-pointer items-center gap-2 rounded-xl px-6 py-3 text-lg font-bold text-white",
              "bg-linear-to-r from-cyan-500 to-purple-500 transition-all duration-300",
              "hover:scale-105 hover:from-cyan-400 hover:to-purple-400",
            )}
          >
            {backHome}
          </Link>
        </div>
      </div>
    </main>
  );
}
