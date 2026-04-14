"use client";

import { cn } from "@/utils/cn";
import { useCallback, useEffect } from "react";

export default function ToggleTheme({ className }: { className?: string }) {
  const applyTheme = useCallback((isDark: boolean) => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.removeAttribute("data-theme");
    }
    document.querySelectorAll(".theme-toggle-btn").forEach((toggle) => {
      const slider = toggle.querySelector(".theme-toggle-slider");
      const sunIcon = toggle.querySelector(".theme-toggle-sun-icon");
      const moonIcon = toggle.querySelector(".theme-toggle-moon-icon");
      if (isDark) {
        if (slider) (slider as HTMLElement).style.transform = "translateX(1.5rem)";
        if (sunIcon) (sunIcon as HTMLElement).style.opacity = "0";
        if (moonIcon) (moonIcon as HTMLElement).style.opacity = "1";
      } else {
        if (slider) (slider as HTMLElement).style.transform = "translateX(0)";
        if (sunIcon) (sunIcon as HTMLElement).style.opacity = "1";
        if (moonIcon) (moonIcon as HTMLElement).style.opacity = "0";
      }
    });
    void root.offsetHeight;
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    const onToggle = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t.closest(".theme-toggle-btn")) return;
      e.preventDefault();
      e.stopPropagation();
      const isDark = document.documentElement.classList.contains("dark");
      applyTheme(!isDark);
    };
    document.addEventListener("click", onToggle, true);
    return () => document.removeEventListener("click", onToggle, true);
  }, [applyTheme]);

  useEffect(() => {
    const init = () => {
      const saved = localStorage.getItem("theme");
      let isDark: boolean;
      if (saved === "dark") isDark = true;
      else if (saved === "light") isDark = false;
      else isDark = document.documentElement.classList.contains("dark");
      applyTheme(isDark);
    };
    init();
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const saved = localStorage.getItem("theme");
      if (saved !== "dark" && saved !== "light") {
        applyTheme(mq.matches);
      }
    };
    mq.addEventListener("change", onChange);
    const onDrawer = () => setTimeout(() => init(), 150);
    window.addEventListener("drawer-opened", onDrawer);
    return () => {
      mq.removeEventListener("change", onChange);
      window.removeEventListener("drawer-opened", onDrawer);
    };
  }, [applyTheme]);

  return (
    <div className={cn("place-self-left flex items-center", className)}>
      <span className="sr-only" data-i18n="theme_toggle_label">
        Cambiar tema
      </span>
      <button
        className="theme-toggle-btn relative h-8 w-14 cursor-pointer rounded-full border border-transparent transition-all duration-300 ease-in-out outline-none"
        type="button"
        aria-label="Cambiar entre tema claro y oscuro"
        data-i18n-attr="aria-label:theme_toggle_aria"
      >
        <span
          className="theme-toggle-slider absolute top-1 left-0.5 flex h-6 w-6 items-center justify-center rounded-full shadow-md transition-all duration-300 ease-in-out"
          style={{ transform: "translateX(0)" }}
        >
          <svg
            className="theme-toggle-sun-icon h-4 w-4 opacity-100 transition-opacity duration-300 dark:opacity-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
          <svg
            className="theme-toggle-moon-icon absolute h-4 w-4 opacity-0 transition-opacity duration-300 dark:opacity-100"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
