"use client";

import { runAnimation } from "./utils/header";
import { cn } from "@/utils/cn";
import { useEffect } from "react";
import type { Language } from "@/lib/i18n-routing";
import type { Translations } from "@/types/translations";

import ElementsHeader from "./ElementsHeader";
import MobileDrawer from "./MobileDrawer";

export function Header({ t, lang }: { t: Translations; lang: Language }) {
  useEffect(() => {
    runAnimation();
  }, []);

  return (
    <header
      id="header-main"
      className={cn(
        "fixed top-0 z-30 w-full border-b-2 bg-white/95 shadow-md shadow-cyan-500/10 backdrop-blur-xl",
        "dark:border-gray-700/50 dark:bg-gray-900/50 dark:shadow-none",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:justify-normal lg:gap-20">
        <button
          type="button"
          id="logo"
          className={cn(
            "rounded-lg text-3xl font-bold text-slate-900 transition-colors hover:text-cyan-600",
            "dark:text-gray-100 dark:hover:text-cyan-300",
          )}
          onClick={() => window.location.reload()}
        >
          Fravelz
        </button>

        <div className="hidden flex-1 justify-between lg:flex">
          <ElementsHeader id="header-nav-desktop" t={t} lang={lang} />
        </div>

        <button
          type="button"
          data-drawer-open
          id="header-mobile-button"
          className={cn(
            "rounded-lg p-1 text-2xl text-slate-800 transition-colors hover:text-cyan-600 lg:hidden",
            "dark:text-gray-300 dark:hover:text-cyan-300",
          )}
          aria-label={t.nav_open_menu ?? "Abrir menú"}
          aria-expanded="false"
          aria-controls="drawer-menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <MobileDrawer menuLabel={t.nav_menu} closeMenuAria={t.nav_close_menu}>
        <ElementsHeader id="header-nav-mobile" t={t} lang={lang} />
      </MobileDrawer>
    </header>
  );
}
