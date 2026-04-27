import CopyEmailButton from "@/components/ui-react/CopyEmailButton";
import LocationBadge from "@/components/ui/LocationBadge";
import { cn } from "@/utils/cn";
import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";
import Image from "next/image";

export default async function HeroSection({ lang }: { lang: Language }) {
  const t = getTranslations(lang);

  return (
    <section id="presentation" className="flex h-screen w-full flex-col items-center justify-center">
      <div
        className={cn(
          "mt-32 grid grid-cols-1 items-center gap-6 px-4 py-12 sm:py-16",
          "lg:grid-cols-[auto_1fr] lg:grid-rows-[auto_1fr_auto] lg:items-start lg:py-24",
        )}
      >
        <div
          className={cn(
            "relative row-span-2 mx-auto h-32 w-32 shrink-0 sm:h-48 sm:w-48",
            "lg:row-span-3 lg:mr-6 lg:h-64 lg:w-64",
          )}
        >
          <div
            className={cn(
              "absolute inset-0 animate-[spin_2s_linear_infinite] rounded-full bg-linear-to-r",
              "from-purple-500 via-transparent to-cyan-500 p-3 sm:p-4",
            )}
            aria-hidden="true"
          />
          <div
            className={cn(
              "absolute inset-1 z-10 overflow-hidden rounded-full border-2 border-cyan-200/50 bg-cyan-50 shadow-inner",
              "sm:inset-2 dark:border-transparent dark:bg-gray-900",
            )}
          >
            <Image
              draggable={false}
              className="h-full w-full rounded-full object-cover select-none"
              src="/images/image-hero.png"
              alt="Logo de Fravelz"
              width={256}
              height={256}
            />
          </div>
        </div>

        <div>
          <h1
            className={cn(
              "self-end bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-center text-2xl font-bold",
              "text-transparent sm:text-3xl lg:text-left lg:text-4xl",
            )}
          >
            Francisco J. Vélez O.
          </h1>

          <p className="text-center text-base font-semibold text-cyan-700 sm:text-lg lg:text-left dark:text-cyan-300">
            @Fravelz
          </p>

          <div className="mt-3 flex flex-col gap-4 lg:mt-10">
            <div className="flex flex-col gap-2 lg:col-start-2">
              <p
                className="text-center text-base text-slate-800 sm:text-lg lg:text-left dark:text-gray-200"
                data-i18n="hola"
              >
                {t.hola}
              </p>
              <p
                className="text-center text-lg font-bold text-cyan-700 sm:text-xl lg:text-left dark:text-cyan-100"
                data-i18n="hero_role"
              >
                {t.hero_role || "Desarrollador Web - Frontend :)"}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:justify-start">
              <LocationBadge text={t.hero_location} />
              <CopyEmailButton email="fravelz@proton.me" successText={t.hero_copy_success} />
            </div>
          </div>
        </div>

        <div className="col-span-1 mt-5 max-w-2xl lg:col-span-2">
          <p
            className={cn("min-w-0 text-center wrap-break-word text-slate-800 lg:text-left", "dark:text-gray-300")}
            data-i18n="about_current_text"
          >
            {t.about_current_text}
          </p>
        </div>
      </div>

      <div className="flex h-fit w-fit justify-center px-3 py-5 max-md:hidden">
        <div
          className={cn(
            "z-10 flex animate-bounce gap-1 rounded-xl border-2 border-cyan-700/80 p-2 text-cyan-700 transition-all select-none",
            "hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 dark:border-cyan-400/40 dark:text-cyan-400",
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
          </svg>
          <span data-i18n="ir_abajo">{t.ir_abajo}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
