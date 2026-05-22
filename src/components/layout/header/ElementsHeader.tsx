import NavLink from "./components/NavLink";
import { Search } from "./components/Search";
import ToggleTheme from "./components/ToggleTheme";

import LanguageSelect from "./LanguageSelect";
import { GITHUB_MARK_PATH } from "@/utils/icons/github-mark";
import { cn } from "@/utils/cn";
import type { Language } from "@/lib/i18n-routing";

export default function ElementsHeader({ id, t, lang }: { id: string; t: Record<string, string>; lang: Language }) {
  return (
    <>
      <div id={id} className="flex flex-col items-center gap-5 lg:flex-row lg:gap-8">
        <NavLink href="#presentation">
          <span>{t.nav_presentation}</span>
        </NavLink>
        <NavLink href="#projects">
          <span>{t.nav_projects}</span>
        </NavLink>
        <NavLink href="#technologies">
          <span>{t.nav_technologies}</span>
        </NavLink>
        <NavLink href="#about-me">
          <span>{t.nav_about}</span>
        </NavLink>
      </div>

      <div
        className={cn(
          "my-2 h-px w-full bg-linear-to-r from-transparent via-cyan-400/60 to-transparent lg:hidden",
          "dark:via-gray-600",
        )}
      />

      <div id="header-opc1" className="flex items-center justify-between gap-3 sm:items-center lg:gap-5">
        <LanguageSelect
          selectLanguageLabel={t.nav_select_language}
          selectLanguageAria={t.nav_select_language_aria}
        />

        <ToggleTheme themeToggleLabel={t.theme_toggle_label} themeToggleAria={t.theme_toggle_aria} />
      </div>

      <div
        className={cn(
          "my-2 h-px w-full bg-linear-to-r from-transparent via-cyan-400/60 to-transparent lg:hidden",
          "dark:via-gray-600",
        )}
      />

      <div id="header-opc2" className="flex items-center justify-center gap-4">
        <a
          href="https://github.com/FraVelz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="inline-flex rounded-lg p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={cn(
              "size-5 text-slate-800 transition-colors hover:text-cyan-600",
              "dark:text-gray-300 dark:hover:text-cyan-400",
            )}
            fill="currentColor"
          >
            <path d={GITHUB_MARK_PATH} />
          </svg>
        </a>

        <Search t={t} lang={lang} />
      </div>
    </>
  );
}
