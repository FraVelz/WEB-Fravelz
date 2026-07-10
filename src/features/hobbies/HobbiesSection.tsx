import PanelReveal from "@/components/ui/PanelReveal";
import { HobbyCard } from "./components/HobbyCard";
import { InteractiveBox2 } from "./components/InteractiveBox2";
import { HobbiesInteractiveGrid } from "./components/HobbiesInteractiveGrid";
import { LinuxIcon } from "./icons/LinuxIcon";
import { WebdevIcon } from "./icons/WebdevIcon";

import "./style.css";

import { cn } from "@/utils/cn";
import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";

export default async function HobbiesSection({ lang, classname = "" }: { lang: Language; classname?: string }) {
  const t = getTranslations(lang);

  return (
    <section id="hobbies" className={classname}>
      <PanelReveal className="flex flex-col items-center justify-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">{t.info_hobbies_title}</h2>

        <HobbiesInteractiveGrid
          className={cn(
            "flex w-full max-w-6xl flex-col gap-1",
            "md:grid md:auto-cols-[200px] md:grid-flow-row-dense md:auto-rows-[200px] md:grid-cols-3",
            "md:gap-2 lg:gap-4",
          )}
        >
          <HobbyCard
            cardId="webdev"
            icon={<WebdevIcon />}
            title={t.hobbies_webdev}
            description={t.hobbies_webdev_desc}
            wrapperClassName="row-span-2 min-h-[150px]"
            contentClassName="flex flex-row items-center justify-center gap-5 lg:flex-col lg:text-center"
            bodyClassName="flex max-w-[320px] flex-col gap-4"
          />

          <HobbyCard
            cardId="linux"
            icon={<LinuxIcon />}
            title={t.hobbies_linux}
            description={t.hobbies_linux_desc}
            wrapperClassName="col-span-2 min-h-[150px]"
            contentClassName="flex items-center justify-center gap-5"
          />

          <InteractiveBox2 t={t} />
        </HobbiesInteractiveGrid>
      </PanelReveal>
    </section>
  );
}
