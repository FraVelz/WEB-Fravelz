import HeroCvCopyActions from "./components/HeroCvCopyActions";
import LocationBadge from "./components/LocationBadge";
import { Photo } from "./components/Photo";

import { cn } from "@/utils/cn";
import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";

export default async function HeroSection({ lang }: { lang: Language }) {
  const t = getTranslations(lang);

  return (
    <section id="presentation" className="relative flex min-h-dvh w-full flex-col bg-transparent">
      <div
        className={cn(
          "mx-auto flex w-full max-w-6xl flex-1 flex-col-reverse gap-10 px-5",
          "sm:flex-row sm:gap-12 sm:px-6 lg:items-center lg:gap-14 lg:px-8",
          "pt-[7.25rem] pb-14 sm:pt-32 lg:pt-36 lg:pb-20",
        )}
      >
        {/* Texto */}
        <div className="flex min-w-0 flex-1 flex-col">
          <p className="text-start text-base text-slate-800 sm:text-lg dark:text-gray-200" data-i18n="hola">
            {t.hola}
          </p>

          <div
            className={cn(
              "mt-2 flex min-w-0 flex-col gap-2 self-stretch sm:mt-2.5 sm:gap-2.5",
              "lg:mt-3 lg:gap-3 lg:self-start lg:pt-0.5",
            )}
          >
            <h1
              className={cn(
                "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-start text-xl font-bold tracking-tight",
                "text-transparent sm:text-2xl lg:text-4xl",
              )}
            >
              Francisco J. Vélez O.
            </h1>
            <p className="text-start text-sm font-semibold text-cyan-700 sm:text-base lg:text-lg dark:text-cyan-300">
              @Fravelz
            </p>

            <p
              className={cn("text-start text-lg font-bold text-cyan-700 sm:text-xl lg:text-xl", "dark:text-cyan-100")}
              data-i18n="hero_role"
            >
              {t.hero_role || "Desarrollador Web - Frontend :)"}
            </p>

            <p
              className={cn(
                "max-w-2xl text-start text-base leading-[1.65] text-slate-800",
                "sm:text-[17px] sm:leading-relaxed lg:max-w-[46rem] lg:text-lg lg:leading-[1.7] dark:text-gray-300",
              )}
              data-i18n="about_current_text"
            >
              {t.about_current_text}
            </p>

            <div className="mt-1 sm:mt-1.5">
              <HeroCvCopyActions
                email="fravelz@proton.me"
                copySuccessText={t.hero_copy_success}
                cvButtonText={t.hero_cv_button}
                cvModalTitle={t.hero_cv_title}
                closeText={t.cert_viewer_close}
                downloadText={t.cert_viewer_download}
              />
            </div>
          </div>
        </div>

        {/* Foto + badge de ciudad (absolute respecto a la foto) */}
        <div
          className={cn(
            "flex shrink-0 flex-col gap-4 pb-4",
            "max-sm:items-center max-sm:justify-center lg:items-center lg:justify-center",
          )}
        >
          <Photo />

          <LocationBadge text={t.hero_location} />
        </div>
      </div>

      {/* Solo desktop: fuera del flujo flex del contenido; anclado abajo del hero */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 hidden justify-center lg:flex">
        <div className="pointer-events-auto flex">
          <div
            className={cn(
              "flex animate-bounce gap-1 rounded-xl border-2 border-cyan-700/80 p-2 text-cyan-700 transition-all select-none",
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
      </div>
    </section>
  );
}
