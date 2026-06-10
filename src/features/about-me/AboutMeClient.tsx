"use client";

import "./about-me.css";

import PanelReveal from "@/components/ui/PanelReveal";
import { cn } from "@/utils/cn";
import type { Language } from "@/lib/i18n-routing";

import { AboutHistorySlider, type AboutHistorySliderLabels } from "./components/AboutHistorySlider";

type Entry = { i18nKey: string; year: string; text: string };

type AboutMeClientProps = {
  lang: Language;
  classname?: string;
  historyEntries: Entry[];
  navCertifications: string;
  infoAboutTitle: string;
  sliderLabels: AboutHistorySliderLabels;
};

export default function AboutMeClient({
  lang,
  classname = "",
  historyEntries,
  navCertifications,
  infoAboutTitle,
  sliderLabels,
}: AboutMeClientProps) {
  return (
    <section id="about-me" className={cn("relative w-full min-w-0 shrink-0 overflow-x-hidden", classname)}>
      <PanelReveal className="flex w-full flex-col items-center justify-center">
        <div
          className={cn(
            "relative mx-auto flex w-full max-w-4xl min-w-0 flex-col items-center",
            "px-4 py-6 sm:px-6 lg:max-w-5xl lg:px-10",
          )}
        >
          <h2 className="about-timeline-title mb-3 w-full shrink-0 text-center text-3xl font-bold text-[rgb(var(--color-text))] sm:mb-4 sm:text-4xl lg:text-[2.5rem]">
            {infoAboutTitle}
          </h2>

          <AboutHistorySlider
            lang={lang}
            entries={historyEntries}
            navCertifications={navCertifications}
            labels={sliderLabels}
          />
        </div>
      </PanelReveal>
    </section>
  );
}
