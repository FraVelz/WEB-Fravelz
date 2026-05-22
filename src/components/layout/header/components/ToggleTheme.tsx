"use client";

import { setThemeCookieClient } from "@/lib/theme-cookie";
import { cn } from "@/utils/cn";
import { useCallback, useEffect, type MouseEvent } from "react";

const SUN_ICON_PATH =
  "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 " +
  "1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z";

const MOON_ICON_PATH =
  "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752" +
  "A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z";

type PersistMode = "explicit" | "auto";

export default function ToggleTheme({
  className,
  tabIndex,
}: {
  className?: string;
  tabIndex?: number;
}) {
  const applyTheme = useCallback((isDark: boolean, persist: PersistMode = "explicit") => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
    root.style.colorScheme = isDark ? "dark" : "light";
    root.setAttribute("data-theme-initialized", "true");

    if (persist === "explicit") {
      try {
        localStorage.setItem("theme", isDark ? "dark" : "light");
      } catch {
        /* noop */
      }
      setThemeCookieClient(isDark ? "dark" : "light");
    } else {
      try {
        localStorage.removeItem("theme");
      } catch {
        /* noop */
      }
      setThemeCookieClient("auto");
    }
  }, []);

  const handleToggle = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      const isDark = document.documentElement.classList.contains("dark");
      applyTheme(!isDark, "explicit");
    },
    [applyTheme],
  );

  useEffect(() => {
    const readSavedTheme = () => {
      try {
        return localStorage.getItem("theme");
      } catch {
        return null;
      }
    };

    const init = () => {
      const saved = readSavedTheme();
      if (saved === "dark") {
        applyTheme(true, "explicit");
      } else if (saved === "light") {
        applyTheme(false, "explicit");
      } else {
        applyTheme(document.documentElement.classList.contains("dark"), "auto");
      }
    };
    init();
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const savedTheme = readSavedTheme();
      if (savedTheme !== "dark" && savedTheme !== "light") {
        applyTheme(mq.matches, "auto");
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
    <div
      className={cn(
        "theme-toggle-control place-self-left flex items-center rounded-full p-0.5",
        className,
      )}
    >
      <span className="sr-only" data-i18n="theme_toggle_label">
        Cambiar tema
      </span>
      <button
        className={cn(
          "theme-toggle-btn relative h-8 w-14 shrink-0 cursor-pointer rounded-full border border-transparent",
          "transition-[border-color,box-shadow,background-color,transform] duration-300 ease-in-out",
        )}
        type="button"
        tabIndex={tabIndex}
        aria-label="Cambiar entre tema claro y oscuro"
        data-i18n-attr="aria-label:theme_toggle_aria"
        onClick={handleToggle}
      >
        <span
          className={cn(
            "theme-toggle-slider absolute top-1 left-0.5 flex h-6 w-6 translate-x-0 transform",
            "items-center justify-center rounded-full shadow-md transition-all duration-300",
            "ease-in-out dark:translate-x-6",
          )}
        >
          <svg
            className={cn(
              "theme-toggle-sun-icon h-4 w-4 opacity-100",
              "transition-opacity duration-300 dark:opacity-0",
            )}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={SUN_ICON_PATH} />
          </svg>
          <svg
            className={cn(
              "theme-toggle-moon-icon absolute h-4 w-4 opacity-0",
              "transition-opacity duration-300 dark:opacity-100",
            )}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={MOON_ICON_PATH} />
          </svg>
        </span>
      </button>
    </div>
  );
}
