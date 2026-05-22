import NavLink from "./components/NavLink";
import { Search } from "./components/Search";
import ToggleTheme from "./components/ToggleTheme";

import LanguageSelect from "./LanguageSelect";
import { GITHUB_MARK_PATH } from "@/utils/icons/github-mark";
import { cn } from "@/utils/cn";

export default function ElementsHeader({ id, t }: { id: string; t: Record<string, string> }) {
  return (
    <>
      <div id={id} className="flex flex-col items-center gap-5 lg:flex-row lg:gap-8">
        <NavLink href="#presentation">
          <span data-i18n="nav_presentation">{t.nav_presentation}</span>
        </NavLink>
        <NavLink href="#projects">
          <span data-i18n="nav_projects">{t.nav_projects}</span>
        </NavLink>
        <NavLink href="#technologies">
          <span data-i18n="nav_technologies">{t.nav_technologies}</span>
        </NavLink>
        <NavLink href="#about-me">
          <span data-i18n="nav_about">{t.nav_about}</span>
        </NavLink>
      </div>

      <div
        className={cn(
          "my-2 h-px w-full bg-linear-to-r from-transparent via-cyan-400/60 to-transparent lg:hidden",
          "dark:via-gray-600",
        )}
      />

      <div
        id="header-opc1"
        className="flex items-center justify-between gap-3 sm:items-center lg:gap-5"
      >
        <LanguageSelect />

        <ToggleTheme />
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

        <Search />
      </div>
    </>
  );
}
