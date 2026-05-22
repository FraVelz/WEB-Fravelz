import { ExerciseIcon, PoliticsIcon, TypingIcon } from "./../icons";
import { cn } from "@/utils/cn";
import { HobbyCard } from "./HobbyCard";

export function InteractiveBox2({ t }: { t: Record<string, string> }) {
  return (
    <>
      <HobbyCard
        cardId="politics"
        icon={<PoliticsIcon />}
        title={t.hobbies_politics}
        description={t.hobbies_politics_desc}
        titleKey="hobbies_politics"
        descriptionKey="hobbies_politics_desc"
        wrapperClassName="min-h-37.5"
        contentClassName="flex items-center justify-center gap-5"
      />

      <HobbyCard
        cardId="exercise"
        icon={<ExerciseIcon />}
        title={t.hobbies_exercise}
        description={t.hobbies_exercise_desc}
        titleKey="hobbies_exercise"
        descriptionKey="hobbies_exercise_desc"
        wrapperClassName="row-span-2 min-h-37.5"
        contentClassName="flex items-center justify-center gap-5 lg:flex-col lg:text-center"
        bodyClassName="flex max-w-[320px] flex-col gap-4"
      />

      <HobbyCard
        cardId="typing"
        icon={<TypingIcon />}
        title={t.hobbies_typing_label}
        description={t.hobbies_typing_desc}
        titleKey="hobbies_typing_label"
        descriptionKey="hobbies_typing_desc"
        wrapperClassName="col-span-2 min-h-37.5"
        contentClassName="flex items-center justify-center gap-5"
        footer={
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
            <span>{t.hobbies_typing_link}</span>
          </a>
        }
      />
    </>
  );
}
