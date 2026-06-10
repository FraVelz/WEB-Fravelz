"use client";

import "./header.css";

import Link from "next/link";

import { runAnimation } from "./utils/header";
import { cn } from "@/utils/cn";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { languages, type Language } from "@/lib/i18n-routing";
import type { Translations } from "@/types/translations";

import ElementsHeader from "./ElementsHeader";
import MobileDrawer from "./MobileDrawer";

function isHomePath(pathname: string | null) {
  if (!pathname) return false;
  const segment = pathname.split("/").filter(Boolean)[0];
  return segment != null && languages.includes(segment as Language) && pathname.split("/").filter(Boolean).length === 1;
}

export function Header({ t, lang }: { t: Translations; lang: Language }) {
  const pathname = usePathname();

  useEffect(() => {
    if (isHomePath(pathname)) return;
    runAnimation();
  }, [pathname]);

  return (
    <header
      id="header-main"
      className={cn(
        "fixed top-0 z-30 w-full border-b-2 bg-[rgb(var(--color-surface)/0.95)] shadow-md shadow-cyan-500/10 backdrop-blur-xl",
        "dark:border-[rgb(var(--color-drawer-border)/0.5)] dark:bg-[rgb(var(--color-surface)/0.5)] dark:shadow-none",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:justify-normal lg:gap-20">
        <Link
          id="logo"
          href={`/${lang}`}
          className={cn(
            "rounded-lg text-3xl font-bold text-[rgb(var(--color-text))] no-underline transition-colors",
            "hover:text-[rgb(var(--color-primary-hover))] dark:hover:text-[rgb(var(--color-primary))]",
          )}
        >
          Fravelz
        </Link>

        <div className="hidden flex-1 justify-between lg:flex">
          <ElementsHeader id="header-nav-desktop" t={t} lang={lang} />
        </div>

        <button
          type="button"
          data-drawer-open
          id="header-mobile-button"
          className={cn(
            "rounded-lg p-1 text-2xl text-[rgb(var(--color-text))] transition-colors lg:hidden",
            "hover:text-[rgb(var(--color-primary-hover))] dark:hover:text-[rgb(var(--color-primary))]",
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
