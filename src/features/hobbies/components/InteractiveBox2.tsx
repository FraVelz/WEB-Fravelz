import { ExerciseIcon, PoliticsIcon, TypingIcon } from "./../icons";
import { cn } from "@/utils/cn";

export function InteractiveBox2({ t }: { t: Record<string, string> }) {
  return (
    <>
      <div
        className={cn("card relative rounded-[10px] bg-[rgb(var(--color-white)/0.1)]", "min-h-37.5")}
        data-card="politics"
      >
        <div
          className={cn(
            "card-content absolute inset-px z-2 overflow-hidden rounded-[inherit]",
            "border border-[rgb(var(--color-white)/0.06)] bg-[rgb(var(--color-card))]",
            "px-5 py-2.5 shadow-[inset_0_0_0_1px_rgb(var(--color-black)/0.06)]",
            "flex items-center justify-center gap-5",
          )}
        >
          <div
            className={cn(
              "mb-0.5 grid min-h-10.5 min-w-10.5 shrink-0 place-items-center rounded-[14px] p-1",
              "border border-[rgb(var(--color-white)/0.06)] bg-[rgb(var(--color-white)/0.04)]",
              "text-(--card-accent) shadow-[0_10px_30px_rgb(var(--color-black)/0.12)]",
              "lg:size-full lg:max-h-31 lg:max-w-31",
            )}
            aria-hidden="true"
          >
            <PoliticsIcon />
          </div>

          <div className="max-w-[320px] space-y-3">
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
        className={cn("card relative rounded-[10px] bg-[rgb(var(--color-white)/0.1)]", "row-span-2 min-h-37.5")}
        data-card="exercise"
      >
        <div
          className={cn(
            "card-content absolute inset-px z-2 overflow-hidden rounded-[inherit]",
            "border border-[rgb(var(--color-white)/0.06)] bg-[rgb(var(--color-card))]",
            "px-5 py-2.5 shadow-[inset_0_0_0_1px_rgb(var(--color-black)/0.06)]",
            "flex items-center justify-center gap-5 lg:flex-col lg:text-center",
          )}
        >
          <div
            className={cn(
              "mb-0.5 grid min-h-10.5 min-w-10.5 shrink-0 place-items-center rounded-[14px] p-1",
              "border border-[rgb(var(--color-white)/0.06)] bg-[rgb(var(--color-white)/0.04)]",
              "text-(--card-accent) shadow-[0_10px_30px_rgb(var(--color-black)/0.12)]",
              "lg:size-full lg:max-h-31 lg:max-w-31",
            )}
            aria-hidden="true"
          >
            <ExerciseIcon />
          </div>

          <div className="flex max-w-[320px] flex-col gap-4">
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
        className={cn("card relative rounded-[10px] bg-[rgb(var(--color-white)/0.1)]", "col-span-2 min-h-37.5")}
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
    </>
  );
}
