import HobbiesInteractiveGrid from "@/components/features/hobbies/HobbiesInteractiveGrid";
import { ExerciseIcon, LinuxIcon, PoliticsIcon, TypingIcon, WebdevIcon } from "@/components/features/hobbies/icons";
import "./style.css";

import { cn } from "@/utils/cn";
import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";

export default async function HobbiesSection({ lang, classname = "" }: { lang: Language; classname?: string }) {
  const t = getTranslations(lang);

  return (
    <section id="hobbies" className={classname}>
      <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100" data-i18n="info_hobbies_title">
        {t.info_hobbies_title}
      </h2>

      <HobbiesInteractiveGrid
        className={cn(
          "flex w-full max-w-6xl flex-col gap-1",
          "md:grid md:auto-cols-[200px] md:grid-flow-row-dense md:auto-rows-[200px] md:grid-cols-3",
          "md:gap-2 lg:gap-4",
        )}
      >
        <div
          className={cn("card relative rounded-[10px] bg-[rgb(var(--color-white)/0.1)]", "row-span-2 min-h-[150px]")}
          data-card="webdev"
        >
          <div
            className={cn(
              "card-content absolute inset-px z-[2] overflow-hidden rounded-[inherit]",
              "border border-[rgb(var(--color-white)/0.06)] bg-[rgb(var(--color-card))]",
              "px-5 py-2.5 shadow-[inset_0_0_0_1px_rgb(var(--color-black)/0.06)]",
              "flex flex-row items-center justify-center gap-5 lg:flex-col lg:text-center",
            )}
          >
            <div
              className={cn(
                "mb-0.5 grid min-h-[42px] min-w-[42px] shrink-0 place-items-center rounded-[14px] p-1",
                "border border-[rgb(var(--color-white)/0.06)] bg-[rgb(var(--color-white)/0.04)]",
                "text-[var(--card-accent)] shadow-[0_10px_30px_rgb(var(--color-black)/0.12)]",
                "lg:size-full lg:max-h-[124px] lg:max-w-[124px]",
              )}
              aria-hidden="true"
            >
              <WebdevIcon />
            </div>

            <div className="flex flex-col gap-4">
              <h3
                className="text-[0.95rem] leading-[1.1] font-extrabold tracking-tight text-[rgb(var(--color-text))]"
                data-i18n="hobbies_webdev"
              >
                {t.hobbies_webdev}
              </h3>
              <h4
                className="text-[0.82rem] leading-[1.35] text-[rgb(var(--color-text-muted))]"
                data-i18n="hobbies_webdev_desc"
              >
                {t.hobbies_webdev_desc}
              </h4>
            </div>
          </div>
        </div>

        <div
          className={cn("card relative rounded-[10px] bg-[rgb(var(--color-white)/0.1)]", "col-span-2 min-h-[150px]")}
          data-card="linux"
        >
          <div
            className={cn(
              "card-content absolute inset-px z-[2] overflow-hidden rounded-[inherit]",
              "border border-[rgb(var(--color-white)/0.06)] bg-[rgb(var(--color-card))]",
              "px-5 py-2.5 shadow-[inset_0_0_0_1px_rgb(var(--color-black)/0.06)]",
              "flex items-center justify-center gap-5",
            )}
          >
            <div
              className={cn(
                "mb-0.5 grid min-h-[42px] min-w-[42px] shrink-0 place-items-center rounded-[14px] p-1",
                "border border-[rgb(var(--color-white)/0.06)] bg-[rgb(var(--color-white)/0.04)]",
                "text-[var(--card-accent)] shadow-[0_10px_30px_rgb(var(--color-black)/0.12)]",
                "lg:size-full lg:max-h-[124px] lg:max-w-[124px]",
              )}
              aria-hidden="true"
            >
              <LinuxIcon />
            </div>

            <div className="max-w-[320px] space-y-3">
              <h3
                className="text-[0.95rem] leading-[1.1] font-extrabold tracking-tight text-[rgb(var(--color-text))]"
                data-i18n="hobbies_linux"
              >
                {t.hobbies_linux}
              </h3>
              <h4
                className="text-[0.82rem] leading-[1.35] text-[rgb(var(--color-text-muted))]"
                data-i18n="hobbies_linux_desc"
              >
                {t.hobbies_linux_desc}
              </h4>
            </div>
          </div>
        </div>

        <div
          className={cn("card relative rounded-[10px] bg-[rgb(var(--color-white)/0.1)]", "min-h-[150px]")}
          data-card="politics"
        >
          <div
            className={cn(
              "card-content absolute inset-px z-[2] overflow-hidden rounded-[inherit]",
              "border border-[rgb(var(--color-white)/0.06)] bg-[rgb(var(--color-card))]",
              "px-5 py-2.5 shadow-[inset_0_0_0_1px_rgb(var(--color-black)/0.06)]",
              "flex items-center justify-center gap-5",
            )}
          >
            <div
              className={cn(
                "mb-0.5 grid min-h-[42px] min-w-[42px] shrink-0 place-items-center rounded-[14px] p-1",
                "border border-[rgb(var(--color-white)/0.06)] bg-[rgb(var(--color-white)/0.04)]",
                "text-[var(--card-accent)] shadow-[0_10px_30px_rgb(var(--color-black)/0.12)]",
                "lg:size-full lg:max-h-[124px] lg:max-w-[124px]",
              )}
              aria-hidden="true"
            >
              <PoliticsIcon />
            </div>

            <div className="space-y-3">
              <h3
                className="text-[0.95rem] leading-[1.1] font-extrabold tracking-tight text-[rgb(var(--color-text))]"
                data-i18n="hobbies_politics"
              >
                {t.hobbies_politics}
              </h3>
              <h4
                className="text-[0.82rem] leading-[1.35] text-[rgb(var(--color-text-muted))]"
                data-i18n="hobbies_politics_desc"
              >
                {t.hobbies_politics_desc}
              </h4>
            </div>
          </div>
        </div>

        <div
          className={cn("card relative rounded-[10px] bg-[rgb(var(--color-white)/0.1)]", "row-span-2 min-h-[150px]")}
          data-card="exercise"
        >
          <div
            className={cn(
              "card-content absolute inset-px z-[2] overflow-hidden rounded-[inherit]",
              "border border-[rgb(var(--color-white)/0.06)] bg-[rgb(var(--color-card))]",
              "px-5 py-2.5 shadow-[inset_0_0_0_1px_rgb(var(--color-black)/0.06)]",
              "flex items-center justify-center gap-5 lg:flex-col lg:text-center",
            )}
          >
            <div
              className={cn(
                "mb-0.5 grid min-h-[42px] min-w-[42px] shrink-0 place-items-center rounded-[14px] p-1",
                "border border-[rgb(var(--color-white)/0.06)] bg-[rgb(var(--color-white)/0.04)]",
                "text-[var(--card-accent)] shadow-[0_10px_30px_rgb(var(--color-black)/0.12)]",
                "lg:size-full lg:max-h-[124px] lg:max-w-[124px]",
              )}
              aria-hidden="true"
            >
              <ExerciseIcon />
            </div>

            <div className="flex flex-col gap-4">
              <h3
                className="text-[0.95rem] leading-[1.1] font-extrabold tracking-tight text-[rgb(var(--color-text))]"
                data-i18n="hobbies_exercise"
              >
                {t.hobbies_exercise}
              </h3>
              <h4
                className="text-[0.82rem] leading-[1.35] text-[rgb(var(--color-text-muted))]"
                data-i18n="hobbies_exercise_desc"
              >
                {t.hobbies_exercise_desc}
              </h4>
            </div>
          </div>
        </div>

        <div
          className={cn("card relative rounded-[10px] bg-[rgb(var(--color-white)/0.1)]", "col-span-2 min-h-[150px]")}
          data-card="typing"
        >
          <div
            className={cn(
              "card-content absolute inset-px z-[2] overflow-hidden rounded-[inherit]",
              "border border-[rgb(var(--color-white)/0.06)] bg-[rgb(var(--color-card))]",
              "px-5 py-2.5 shadow-[inset_0_0_0_1px_rgb(var(--color-black)/0.06)]",
              "flex items-center justify-center gap-5",
            )}
          >
            <div
              className={cn(
                "mb-0.5 grid min-h-[42px] min-w-[42px] shrink-0 place-items-center rounded-[14px] p-1",
                "border border-[rgb(var(--color-white)/0.06)] bg-[rgb(var(--color-white)/0.04)]",
                "text-[var(--card-accent)] shadow-[0_10px_30px_rgb(var(--color-black)/0.12)]",
                "lg:size-full lg:max-h-[124px] lg:max-w-[124px]",
              )}
              aria-hidden="true"
            >
              <TypingIcon />
            </div>

            <div className="max-w-[320px] space-y-3">
              <h3
                className="text-[0.95rem] leading-[1.1] font-extrabold tracking-tight text-[rgb(var(--color-text))]"
                data-i18n="hobbies_typing_label"
              >
                {t.hobbies_typing_label}
              </h3>
              <h4
                className="text-[0.82rem] leading-[1.35] text-[rgb(var(--color-text-muted))]"
                data-i18n="hobbies_typing_desc"
              >
                {t.hobbies_typing_desc}
              </h4>
              <a
                href="https://monkeytype.com/profile/Fravelz"
                target="_blank"
                rel="noreferrer noopener"
                className={cn(
                  "mt-2 inline-flex w-fit cursor-pointer font-semibold underline decoration-2 underline-offset-2",
                  "text-[var(--card-accent)] transition-colors duration-200",
                  "[text-decoration-color:color-mix(in_oklab,var(--card-accent)_60%,transparent)]",
                  "hover:[text-decoration-color:var(--card-accent)]",
                )}
              >
                <span data-i18n="hobbies_typing_link">{t.hobbies_typing_link}</span>
              </a>
            </div>
          </div>
        </div>
      </HobbiesInteractiveGrid>
    </section>
  );
}
