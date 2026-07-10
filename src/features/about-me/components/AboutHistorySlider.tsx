"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/ChevronIcons";
import { useCarouselIndex } from "@/hooks/useCarouselIndex";
import { cn } from "@/utils/cn";
import type { Language } from "@/lib/i18n-routing";

import { AboutTimelineIcon } from "../icons/AboutTimelineIcons";

type HistoryEntry = { i18nKey: string; year: string; text: string };

export type AboutHistorySliderLabels = {
  stageLabel: string;
  regionAria: string;
  tabsAria: string;
  prev: string;
  next: string;
  goToYear: string;
};

type AboutHistorySliderProps = {
  lang: Language;
  entries: HistoryEntry[];
  navCertifications: string;
  labels: AboutHistorySliderLabels;
};

function buildLinks(entry: HistoryEntry, lang: Language, navCertifications: string) {
  const links: { href: string; label: string; external?: boolean }[] = [];

  if (entry.year === "2021") {
    links.push({ href: "https://github.com/divelz", label: "Github", external: true });
  }
  if (entry.year === "2025") {
    links.push({ href: `/${lang}/certifications`, label: navCertifications || "Certificaciones" });
  }

  return links;
}

function formatGoToLabel(template: string, year: string) {
  return template.includes("{year}") ? template.replace("{year}", year) : `${template} ${year}`;
}

export function AboutHistorySlider({ lang, entries, navCertifications, labels }: AboutHistorySliderProps) {
  const count = entries.length;
  const tabsListRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const { displayIndex, setIndex, navigateByDelta, onTouchStart, onTouchEnd } = useCarouselIndex({
    count,
    swipeThreshold: 48,
    stopPropagationOnSwipe: true,
  });

  const focusTab = (i: number) => {
    tabRefs.current[i]?.focus();
  };

  const onTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (count <= 1) return;

    const last = count - 1;
    let next: number | null = null;

    if (e.key === "ArrowLeft") next = i > 0 ? i - 1 : last;
    else if (e.key === "ArrowRight") next = i < last ? i + 1 : 0;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;

    if (next === null) return;

    e.preventDefault();
    setIndex(next);
    focusTab(next);
  };

  const entry = entries[displayIndex];
  const links = entry ? buildLinks(entry, lang, navCertifications) : [];

  useEffect(() => {
    const list = tabsListRef.current;
    const tab = tabRefs.current[displayIndex];
    if (!list || !tab || list.scrollWidth <= list.clientWidth) return;

    const targetLeft = tab.offsetLeft - list.clientWidth / 2 + tab.offsetWidth / 2;
    list.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
  }, [displayIndex]);

  if (count === 0 || !entry) return null;

  const navBtnClass = cn(
    "about-history-nav flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full",
    "border border-[rgb(var(--color-drawer-border))] bg-[rgb(var(--color-surface))]",
    "text-[rgb(var(--color-text))] shadow-md transition-colors",
    "hover:border-[rgb(var(--color-primary)/0.55)] hover:text-[rgb(var(--color-primary))]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary)/0.5)]",
    "disabled:pointer-events-none disabled:opacity-40",
  );

  const showNav = count > 1;

  return (
    <div
      className="about-history-slider flex w-full min-w-0 flex-col gap-4 sm:gap-5"
      aria-label={labels.regionAria}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {showNav ? (
        <div
          ref={tabsListRef}
          className="about-history-tabs flex gap-2 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:thin] sm:flex-wrap sm:justify-center sm:overflow-visible [&::-webkit-scrollbar]:h-1.5"
          role="tablist"
          aria-label={labels.tabsAria}
        >
          {entries.map((item, i) => {
            const selected = i === displayIndex;
            return (
              <button
                key={item.i18nKey}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                tabIndex={selected ? 0 : -1}
                aria-selected={selected}
                aria-controls="about-history-panel"
                id={`about-history-tab-${item.i18nKey}`}
                onKeyDown={(e) => onTabKeyDown(e, i)}
                className={cn(
                  "about-history-tab flex min-w-[5.25rem] shrink-0 cursor-pointer snap-center flex-col items-center gap-2 rounded-xl border px-3 py-2.5 transition-all sm:min-w-[5.75rem]",
                  selected
                    ? "border-[rgb(var(--color-primary)/0.65)] bg-[rgb(var(--color-primary)/0.08)] shadow-sm"
                    : "border-[rgb(var(--color-drawer-border))] bg-[rgb(var(--color-surface))] hover:border-[rgb(var(--color-primary)/0.35)]",
                )}
                onClick={() => setIndex(i)}
              >
                <AboutTimelineIcon year={item.year} isActive={selected} />
                <span
                  className={cn(
                    "text-xs font-semibold tracking-wide sm:text-sm",
                    selected ? "text-[rgb(var(--color-primary))]" : "text-[rgb(var(--color-text-muted))]",
                  )}
                >
                  {item.year}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}

      <div
        className={cn(
          "about-history-panel relative overflow-hidden rounded-2xl border ring-1 ring-[rgb(var(--color-drawer-border)/0.6)]",
          showNav && "sm:px-12 lg:px-14",
        )}
        style={{
          borderColor: "rgb(var(--color-drawer-border))",
          boxShadow: "0 16px 48px rgb(var(--color-black) / 0.1)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-br from-[rgb(var(--color-primary)/0.05)] via-transparent to-[rgb(var(--color-accent)/0.04)]"
          aria-hidden
        />

        {showNav ? (
          <>
            <button
              type="button"
              className={cn(navBtnClass, "absolute top-1/2 left-2 z-10 -translate-y-1/2 max-sm:hidden")}
              onClick={() => navigateByDelta(-1)}
              aria-label={labels.prev}
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              className={cn(navBtnClass, "absolute top-1/2 right-2 z-10 -translate-y-1/2 max-sm:hidden")}
              onClick={() => navigateByDelta(1)}
              aria-label={labels.next}
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </>
        ) : null}

        <article
          key={entry.i18nKey}
          id="about-history-panel"
          role={showNav ? "tabpanel" : undefined}
          aria-labelledby={showNav ? `about-history-tab-${entry.i18nKey}` : undefined}
          className="animate-fadeIn relative bg-[rgb(var(--color-surface))] p-5 sm:p-7 lg:p-8"
        >
          <div className="mb-4 h-1 w-14 rounded-full bg-[rgb(var(--color-primary)/0.75)] sm:mb-5" aria-hidden />

          <header className="mb-4 flex items-start gap-3 sm:mb-5 sm:gap-4">
            <AboutTimelineIcon year={entry.year} isActive />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium tracking-widest text-[rgb(var(--color-text-muted))] uppercase">
                {labels.stageLabel}
              </p>
              <h3 className="text-2xl font-bold text-[rgb(var(--color-text))] sm:text-3xl">{entry.year}</h3>
            </div>
          </header>

          <p className="text-left text-sm leading-relaxed whitespace-pre-wrap text-[rgb(var(--color-text))] sm:text-base sm:leading-7 lg:text-[1.0625rem]">
            {entry.text}
          </p>

          {links.length > 0 ? (
            <footer
              className="mt-5 flex flex-wrap gap-4 border-t pt-4 sm:mt-6 sm:pt-5"
              style={{ borderColor: "rgb(var(--color-drawer-border) / 0.85)" }}
            >
              {links.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-link text-sm font-semibold underline underline-offset-4 sm:text-base"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="about-link text-sm font-semibold underline underline-offset-4 sm:text-base"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </footer>
          ) : null}
        </article>
      </div>

      {showNav ? (
        <>
          <div className="flex items-center justify-center gap-3 sm:hidden">
            <button type="button" className={navBtnClass} onClick={() => navigateByDelta(-1)} aria-label={labels.prev}>
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <p className="min-w-16 text-center text-sm text-[rgb(var(--color-text-muted))] tabular-nums">
              {displayIndex + 1} / {count}
            </p>
            <button type="button" className={navBtnClass} onClick={() => navigateByDelta(1)} aria-label={labels.next}>
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex justify-center gap-2" aria-label={labels.tabsAria}>
            {entries.map((item, i) => (
              <button
                key={item.i18nKey}
                type="button"
                aria-label={formatGoToLabel(labels.goToYear, item.year)}
                aria-pressed={i === displayIndex}
                className={cn(
                  "about-history-dot h-2.5 rounded-full transition-all duration-300",
                  "focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary)/0.45)] focus-visible:outline-none",
                  i === displayIndex
                    ? "w-9 bg-[rgb(var(--color-primary))]"
                    : "w-2.5 bg-[rgb(var(--color-card))] hover:bg-[rgb(var(--color-primary)/0.35)]",
                )}
                onClick={() => setIndex(i)}
              />
            ))}
          </nav>
        </>
      ) : null}
    </div>
  );
}
