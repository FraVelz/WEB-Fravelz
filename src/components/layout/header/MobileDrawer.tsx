"use client";

import { cn } from "@/utils/cn";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getFocusableElements(container: Element) {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (el) => !el.hasAttribute("disabled"),
  );
}

export default function MobileDrawer({
  children,
  menuLabel = "Menú",
  closeMenuAria = "Cerrar menú",
}: {
  children: ReactNode;
  menuLabel?: string;
  closeMenuAria?: string;
}) {
  const drawerRef = useRef<HTMLDialogElement>(null);
  const previouslyFocusedRef = useRef<Element | null>(null);

  useEffect(() => {
    const openBtn = document.querySelector<HTMLElement>("[data-drawer-open]");
    const closeBtn = document.querySelector<HTMLElement>("[data-drawer-close]");
    const drawer = drawerRef.current;
    const overlay = document.querySelector<HTMLElement>("[data-drawer-overlay]");

    if (!drawer) return;

    const isOpen = () => !drawer.classList.contains("translate-x-full");

    const focusFirst = () => {
      const focusables = getFocusableElements(drawer);
      const target = closeBtn && focusables.includes(closeBtn) ? closeBtn : focusables[0];
      target?.focus();
    };

    const closeDrawer = () => {
      drawer.classList.add("translate-x-full");
      overlay?.classList.add("opacity-0", "pointer-events-none");
      openBtn?.setAttribute("aria-expanded", "false");
      if (drawer.open) {
        drawer.close();
      }

      const toFocus = previouslyFocusedRef.current;
      previouslyFocusedRef.current = null;

      if (toFocus instanceof HTMLElement) {
        toFocus.focus();
      } else {
        openBtn?.focus();
      }
    };

    const openDrawer = () => {
      previouslyFocusedRef.current = document.activeElement;
      if (!drawer.open) {
        drawer.showModal();
      }
      drawer.classList.remove("translate-x-full");
      overlay?.classList.remove("opacity-0", "pointer-events-none");
      openBtn?.setAttribute("aria-expanded", "true");

      requestAnimationFrame(() => {
        focusFirst();
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent("drawer-opened"));
        }, 100);
      });
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (!isOpen()) return;

      if (event.key === "Escape") {
        event.preventDefault();
        closeDrawer();
        return;
      }

      if (event.key !== "Tab") return;

      const focusables = getFocusableElements(drawer);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey) {
        if (active === first || !drawer.contains(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const onCancel = (event: Event) => {
      event.preventDefault();
      closeDrawer();
    };

    openBtn?.addEventListener("click", openDrawer);
    closeBtn?.addEventListener("click", closeDrawer);
    overlay?.addEventListener("click", closeDrawer);
    document.addEventListener("keydown", onKeyDown);
    drawer.addEventListener("cancel", onCancel);

    return () => {
      openBtn?.removeEventListener("click", openDrawer);
      closeBtn?.removeEventListener("click", closeDrawer);
      overlay?.removeEventListener("click", closeDrawer);
      document.removeEventListener("keydown", onKeyDown);
      drawer.removeEventListener("cancel", onCancel);
    };
  }, []);

  return (
    <>
      <div
        data-drawer-overlay
        className={cn(
          "pointer-events-none fixed inset-0 z-50 bg-[rgb(var(--color-black)/0.45)] opacity-0 backdrop-blur-sm",
          "transition-opacity duration-300 lg:hidden",
        )}
      />

      <dialog
        ref={drawerRef}
        id="drawer-menu"
        data-drawer
        aria-label={menuLabel}
        className={cn(
          "drawer-panel fixed top-0 right-0 z-[60] m-0 h-dvh max-h-none w-[85%] max-w-sm translate-x-full",
          "transform overflow-y-auto border-0 bg-[rgb(var(--color-surface))] p-0 text-inherit shadow-2xl",
          "transition-transform duration-300 ease-in-out backdrop:bg-transparent lg:hidden",
        )}
      >
        <div
          className={cn(
            "sticky top-0 z-10 flex items-center justify-between border-b border-[rgb(var(--color-drawer-border))]",
            "bg-[rgb(var(--color-surface))] p-5",
          )}
        >
          <span className="text-lg font-semibold text-[rgb(var(--color-text))]">{menuLabel}</span>

          <button
            data-drawer-close
            aria-label={closeMenuAria}
            className={cn(
              "rounded-lg p-1 text-2xl text-[rgb(var(--color-text))] transition-colors",
              "hover:text-[rgb(var(--color-primary))] dark:hover:text-[rgb(var(--color-white))]",
            )}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-10"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-5 bg-[rgb(var(--color-surface))] p-5">{children}</div>
      </dialog>
    </>
  );
}
