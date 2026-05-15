import NavLink from "./components/NavLink";
import { Search } from "./components/Search";
import ToggleTheme from "./components/ToggleTheme";

import LanguageSelect from "./LanguageSelect";
import { GITHUB_MARK_PATH } from "@/utils/icons/github-mark";
import { cn } from "@/utils/cn";

const LANGUAGE_ICON_PATH =
  "m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 " +
  "2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 " +
  "1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802";

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

      <div id="header-opc1" className="flex justify-between sm:items-center lg:items-center lg:gap-5">
        <ToggleTheme className="order-1" />

        <div className="place-self-right flex items-center justify-end gap-1">
          <label htmlFor="select-language" className="sr-only" data-i18n="nav_select_language">
            Seleccionar idioma
          </label>

          <svg
            className={cn(
              "size-5 text-cyan-600 transition-colors hover:text-cyan-800",
              "dark:text-cyan-200 dark:hover:text-cyan-300",
            )}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={LANGUAGE_ICON_PATH} />
          </svg>

          <LanguageSelect />
        </div>
      </div>

      <div
        className={cn(
          "my-2 h-px w-full bg-linear-to-r from-transparent via-cyan-400/60 to-transparent lg:hidden",
          "dark:via-gray-600",
        )}
      />

      <div id="header-opc2" className="flex items-center justify-center gap-4">
        <a href="https://github.com/FraVelz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={cn(
              "size-6 text-slate-800 transition-colors hover:text-cyan-600",
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
