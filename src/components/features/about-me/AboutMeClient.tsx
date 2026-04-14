"use client";

import { cn } from "@/utils/cn";
import type { Language } from "@/lib/i18n-routing";
import Link from "next/link";
import { useEffect } from "react";

const maxCharsMaxLg = 420;
const maxCharsLgToXl = 105;
const maxCharsXlPlus = 170;

type Entry = { i18nKey: string; year: string; text: string };

export default function AboutMeClient({
  lang,
  classname = "",
  historyEntries,
  readMoreLabel,
  closeModalAria,
  navCertifications,
  infoAboutTitle,
}: {
  lang: Language;
  classname?: string;
  historyEntries: Entry[];
  readMoreLabel: string;
  closeModalAria: string;
  navCertifications: string;
  infoAboutTitle: string;
}) {
  useEffect(() => {
    let aboutModalLastFocus: Element | null = null;

    function getMaxChars() {
      if (window.matchMedia("(max-width: 1023px)").matches) return maxCharsMaxLg;
      if (window.matchMedia("(max-width: 1279px)").matches) return maxCharsLgToXl;
      return maxCharsXlPlus;
    }

    function labelMore() {
      const key = "about_read_more";
      const tFn = (window as Window & { i18n?: { t: (k: string) => string } }).i18n?.t;
      if (!tFn) return readMoreLabel;
      const s = tFn(key);
      if (s && s !== key) return s;
      return readMoreLabel;
    }

    function getFullTimelineText(container: Element, span: Element) {
      const key = container.getAttribute("data-about-i18n-key");
      const tFn = (window as Window & { i18n?: { t: (k: string) => string } }).i18n?.t;
      if (key && tFn) {
        const fromDict = tFn(key);
        if (fromDict && fromDict !== key) return fromDict.trim();
      }
      return (span.textContent || "").trim();
    }

    function getModalEls() {
      const modal = document.querySelector("[data-about-timeline-modal]");
      if (!modal) return null;
      return {
        root: modal,
        year: modal.querySelector("[data-about-modal-year]"),
        text: modal.querySelector("[data-about-modal-text]"),
        backdrop: modal.querySelector("[data-about-modal-backdrop]"),
        closeBtn: modal.querySelector("[data-about-modal-close]"),
      };
    }

    function openAboutTextModal(year: string, fullText: string, triggerBtn: HTMLElement | null) {
      const els = getModalEls();
      if (!els?.year || !els.text) return;
      aboutModalLastFocus = triggerBtn && "focus" in triggerBtn ? triggerBtn : document.activeElement;
      els.year.textContent = year || "";
      els.text.textContent = fullText;
      els.root.classList.remove("hidden");
      els.root.classList.add("flex");
      els.root.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      if (els.closeBtn && "focus" in els.closeBtn) (els.closeBtn as HTMLElement).focus();
    }

    function closeAboutTextModal() {
      const els = getModalEls();
      if (!els?.root) return;
      els.root.classList.add("hidden");
      els.root.classList.remove("flex");
      els.root.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (aboutModalLastFocus && "focus" in aboutModalLastFocus) {
        (aboutModalLastFocus as HTMLElement).focus();
      }
      aboutModalLastFocus = null;
    }

    function onAboutModalKeydown(e: KeyboardEvent) {
      const modal = document.querySelector("[data-about-timeline-modal]");
      if (!modal || modal.classList.contains("hidden")) return;
      if (e.key === "Escape") {
        e.preventDefault();
        closeAboutTextModal();
      }
    }

    function applyExpandable(container: Element) {
      const span = container.querySelector("[data-about-timeline-text]");
      const btn = container.querySelector("[data-about-read-more]");
      if (!span || !btn) return;
      const full = getFullTimelineText(container, span);
      const max = getMaxChars();
      if (full.length <= max) {
        span.textContent = full;
        btn.classList.add("hidden");
        btn.setAttribute("aria-hidden", "true");
        return;
      }
      span.textContent = `${full.slice(0, max).trimEnd()}…`;
      (btn as HTMLElement).textContent = labelMore();
      btn.classList.remove("hidden");
      btn.removeAttribute("aria-hidden");
    }

    function bindExpandable(container: Element) {
      const btn = container.querySelector("[data-about-read-more]");
      if (!btn || (btn as HTMLElement).dataset.bound === "true") return;
      (btn as HTMLElement).dataset.bound = "true";
      btn.addEventListener("click", function () {
        const span = container.querySelector("[data-about-timeline-text]");
        if (!span) return;
        const full = getFullTimelineText(container, span);
        const year = container.getAttribute("data-about-year") || "";
        openAboutTextModal(year, full, btn as HTMLElement);
      });
    }

    function bindAboutModal() {
      const els = getModalEls();
      if (!els || (els.root as HTMLElement).dataset.modalBound === "true") return;
      (els.root as HTMLElement).dataset.modalBound = "true";
      els.backdrop?.addEventListener("click", closeAboutTextModal);
      els.closeBtn?.addEventListener("click", closeAboutTextModal);
      document.addEventListener("keydown", onAboutModalKeydown);
    }

    function refreshAllExpandables() {
      document.querySelectorAll("[data-about-expandable]").forEach((el) => {
        bindExpandable(el);
        applyExpandable(el);
      });
    }

    let resizeTimer: ReturnType<typeof setTimeout>;
    function onResize() {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.querySelectorAll("[data-about-expandable]").forEach((el) => {
          applyExpandable(el);
        });
      }, 120);
    }

    bindAboutModal();
    refreshAllExpandables();

    const onLang = () => {
      closeAboutTextModal();
      document.querySelectorAll("[data-about-expandable]").forEach((el) => {
        bindExpandable(el);
        applyExpandable(el);
      });
    };

    window.addEventListener("language-changed", onLang);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("language-changed", onLang);
      window.removeEventListener("resize", onResize);
    };
  }, [readMoreLabel]);

  return (
    <section
      id="about-me"
      className={cn(
        "relative h-screen max-h-screen min-h-0 w-full min-w-0 shrink-0 overflow-hidden overflow-x-hidden",
        classname,
      )}
    >
      <div className="relative mx-auto flex h-full min-h-0 w-full min-w-0 items-center justify-between overflow-hidden max-lg:flex-col max-lg:items-start">
        <h2
          className="left-0 mb-4 w-full text-center text-4xl font-bold lg:absolute lg:top-32"
          data-i18n="info_about_title"
        >
          {infoAboutTitle}
        </h2>

        <div
          className={cn(
            "about-timeline-line absolute top-1/2 left-0 z-10 h-1 w-full -translate-y-1/2",
            "max-lg:top-0 max-lg:left-5 max-lg:h-full max-lg:w-1 max-lg:translate-y-0",
          )}
        />

        {historyEntries.map((entry, index) => {
          const expandable = (
            <div
              key={`ex-${entry.i18nKey}`}
              data-about-expandable
              data-about-i18n-key={entry.i18nKey}
              data-about-year={entry.year}
              className="about-timeline-expandable"
            >
              <span
                data-i18n={entry.i18nKey}
                data-about-timeline-text
                className="about-timeline-text block break-words hyphens-auto"
              >
                {entry.text}
              </span>
              <button
                type="button"
                className="about-read-more about-link mt-1 hidden cursor-pointer text-sm font-semibold underline underline-offset-4 transition-colors"
                data-about-read-more
                aria-haspopup="dialog"
                aria-controls="about-timeline-modal-dialog"
              >
                {readMoreLabel}
              </button>
            </div>
          );

          return (
            <div
              key={`${entry.i18nKey}-${entry.year}`}
              className="relative z-20 w-full min-w-45 text-center max-lg:mb-12 max-lg:pl-12"
            >
              <div
                className={cn(
                  "absolute h-fit w-45 rounded-lg py-4 text-left max-lg:relative max-lg:top-0 max-lg:bottom-0 max-lg:w-full lg:text-center",
                  index % 2 === 0 ? "bottom-10" : "top-10",
                )}
              >
                <div className="about-timeline-year mb-2 font-bold">{entry.year}</div>

                {index !== 0 && index !== historyEntries.length - 1 ? (
                  <div className="lg:relative lg:left-[50%] lg:w-60 lg:-translate-x-1/2">{expandable}</div>
                ) : (
                  expandable
                )}

                {entry.year === "2021" ? (
                  <a
                    href="https://github.com/divelz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-link inline-flex items-center gap-2 font-semibold underline underline-offset-4 transition-colors"
                  >
                    Github
                  </a>
                ) : null}
                {entry.year === "2025" ? (
                  <Link
                    href={`/${lang}/certifications`}
                    className="about-link inline-flex items-center gap-2 font-semibold underline underline-offset-4 transition-colors"
                    data-i18n="nav_certifications"
                  >
                    {navCertifications || "Certificaciones"}
                  </Link>
                ) : null}
              </div>

              <div className="about-timeline-dot mx-auto h-5 w-5 rounded-full max-lg:absolute max-lg:top-5 max-lg:left-[11px]" />
            </div>
          );
        })}
      </div>

      <div
        className="fixed inset-0 z-[100] hidden items-center justify-center p-4"
        data-about-timeline-modal
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 bg-[rgb(var(--color-black)/0.45)] backdrop-blur-sm"
          data-about-modal-backdrop
        />
        <div
          id="about-timeline-modal-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="about-timeline-modal-title"
          className="relative z-10 flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-xl border border-[rgb(var(--color-drawer-border))] bg-[rgb(var(--color-surface))] shadow-2xl"
        >
          <div className="flex shrink-0 items-start justify-between gap-4 border-b border-[rgb(var(--color-drawer-border))] p-4 sm:p-5">
            <h3
              id="about-timeline-modal-title"
              className="text-lg font-bold text-[rgb(var(--color-text))]"
              data-about-modal-year
            />
            <button
              type="button"
              className="shrink-0 cursor-pointer rounded-md text-[rgb(var(--color-text))] transition-colors hover:text-[rgb(var(--color-primary))] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))]"
              data-about-modal-close
              aria-label={closeModalAria}
              data-i18n-attr="aria-label:cert_viewer_close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-5">
            <p
              className="text-left leading-relaxed whitespace-pre-wrap text-[rgb(var(--color-text))]"
              data-about-modal-text
            />
          </div>
        </div>
      </div>
    </section>
  );
}
