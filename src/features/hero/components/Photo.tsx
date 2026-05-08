import { getTranslations } from "@/utils/i18n";
import { cn } from "@/utils/cn";
import Image from "next/image";

export function Photo() {
  const t = getTranslations("es");

  return (
    <div
      className={cn(
        "relative col-start-1 row-start-1",
        "h-28 w-28 shrink-0 sm:h-32 sm:w-32 lg:row-span-2 lg:h-52 lg:w-52 xl:h-56 xl:w-56",
      )}
    >
      <div
        className={cn(
          "absolute inset-0 animate-[spin_2s_linear_infinite] rounded-full bg-linear-to-r",
          "from-purple-500 via-transparent to-cyan-500 p-2.5 sm:p-3 lg:p-4",
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
          alt={t.hero_logo_alt || "Fravelz"}
          width={256}
          height={256}
        />
      </div>
    </div>
  );
}
