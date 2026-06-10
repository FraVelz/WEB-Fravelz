import "./hero.css";

import HeroCvCopyActions from "./components/HeroCvCopyActions";
import AvailabilityBadge from "./components/AvailabilityBadge";
import HeroFrameCorners from "./components/HeroFrameCorners";
import LocationBadge from "./components/LocationBadge";
import { Photo } from "./components/Photo";

import { HERO_AVAILABILITY_I18N_KEY, HERO_AVAILABILITY_STATUS } from "./heroAvailabilityConfig";

import { cn } from "@/utils/cn";
import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";

export default async function HeroSection({ lang }: { lang: Language }) {
  const t = getTranslations(lang);

  const availabilityKey = HERO_AVAILABILITY_I18N_KEY[HERO_AVAILABILITY_STATUS];
  const availabilityLabel = t[availabilityKey] ?? availabilityKey;

  return (
    <section
      id="presentation"
      data-hero-pending
      className="relative flex min-h-dvh w-full flex-col overflow-visible bg-transparent"
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5",
          "sm:px-6 lg:max-w-7xl lg:px-4 xl:px-6",
          "pt-[7.25rem] pb-14 sm:pt-32 lg:pt-36 lg:pb-20",
        )}
      >
        <div
          className={cn(
            "relative flex w-full flex-col-reverse gap-10",
            "sm:flex-row sm:gap-12 lg:items-center lg:justify-between lg:gap-20",
            "lg:px-10 lg:py-16 xl:gap-24",
          )}
        >
          <HeroFrameCorners />

          {/* Texto */}
          <div className="flex min-w-0 flex-1 flex-col">
            <p data-hero-enter="item" className="text-start text-base text-slate-800 sm:text-lg dark:text-gray-200">
              {t.hola}
            </p>

            <div
              className={cn(
                "mt-2 flex min-w-0 flex-col gap-2 self-stretch sm:mt-2.5 sm:gap-2.5",
                "lg:mt-3 lg:gap-3 lg:self-start lg:pt-0.5",
              )}
            >
              <h1
                data-hero-enter="item"
                className={cn(
                  "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-start text-xl font-bold tracking-tight",
                  "text-transparent sm:text-2xl lg:text-4xl",
                )}
              >
                Francisco J. Vélez O.
              </h1>
              <p
                data-hero-enter="item"
                className="text-start text-sm font-semibold text-cyan-700 sm:text-base lg:text-lg dark:text-cyan-300"
              >
                @Fravelz
              </p>

              <p
                data-hero-enter="item"
                className={cn("text-start text-lg font-bold text-cyan-700 sm:text-xl lg:text-xl", "dark:text-cyan-100")}
              >
                {t.hero_role || "Desarrollador Web - Frontend :)"}
              </p>

              <p
                data-hero-enter="item"
                className={cn(
                  "max-w-2xl text-start text-base leading-[1.65] text-slate-800",
                  "sm:text-[17px] sm:leading-relaxed lg:max-w-[46rem] lg:text-lg lg:leading-[1.7] dark:text-gray-300",
                )}
              >
                {t.about_current_text}
              </p>

              <div data-hero-enter="item" className="mt-1 sm:mt-1.5">
                <HeroCvCopyActions
                  email="fravelz@proton.me"
                  copySuccessText={t.hero_copy_success}
                  copyEmailAriaLabel={t.copy_email_aria}
                  cvButtonText={t.hero_cv_button}
                  cvModalTitle={t.hero_cv_title}
                  closeText={t.cert_viewer_close}
                  downloadText={t.cert_viewer_download}
                />
              </div>
            </div>
          </div>

          {/* Foto + badges */}
          <div
            data-hero-enter="visual"
            className={cn(
              "flex shrink-0 flex-col gap-4 pb-4",
              "items-center max-sm:justify-center lg:items-center lg:justify-center",
            )}
          >
            <Photo lang={lang} />

            <div className="flex flex-col items-center gap-2 sm:gap-2.5">
              <div data-hero-enter="badge">
                <AvailabilityBadge status={HERO_AVAILABILITY_STATUS} text={availabilityLabel} />
              </div>
              <div data-hero-enter="badge">
                <LocationBadge text={t.hero_location} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 hidden justify-center lg:flex">
        <a
          href="#projects"
          data-hero-enter="scroll-hint"
          className={cn(
            "hero-scroll-hint pointer-events-auto flex animate-bounce items-center gap-1 rounded-xl",
            "border-2 border-cyan-700/80 p-2 text-cyan-700 no-underline",
            "transition-all select-none",
            "hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20",
            "dark:border-cyan-400/40 dark:text-cyan-400",
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
          </svg>
          <span>{t.ir_abajo}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
