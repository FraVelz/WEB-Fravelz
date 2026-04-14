"use client";

import { cn } from "@/utils/cn";
import type { ReactNode } from "react";
import { useEffect } from "react";

export default function MobileDrawer({ children }: { children: ReactNode }) {
  useEffect(() => {
    const openBtn = document.querySelector("[data-drawer-open]");
    const closeBtn = document.querySelector("[data-drawer-close]");
    const drawer = document.querySelector("[data-drawer]");
    const overlay = document.querySelector("[data-drawer-overlay]");

    const openDrawer = () => {
      drawer?.classList.remove("translate-x-full");
      overlay?.classList.remove("opacity-0", "pointer-events-none");
      openBtn?.setAttribute("aria-expanded", "true");
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("drawer-opened"));
      }, 100);
    };

    const closeDrawer = () => {
      drawer?.classList.add("translate-x-full");
      overlay?.classList.add("opacity-0", "pointer-events-none");
      openBtn?.setAttribute("aria-expanded", "false");
    };

    openBtn?.addEventListener("click", openDrawer);
    closeBtn?.addEventListener("click", closeDrawer);
    overlay?.addEventListener("click", closeDrawer);
    return () => {
      openBtn?.removeEventListener("click", openDrawer);
      closeBtn?.removeEventListener("click", closeDrawer);
      overlay?.removeEventListener("click", closeDrawer);
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

      <aside
        id="drawer-menu"
        data-drawer
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={cn(
          "drawer-panel fixed top-0 right-0 z-[60] h-dvh w-[85%] max-w-sm translate-x-full transform overflow-y-auto",
          "bg-[rgb(var(--color-surface))] shadow-2xl transition-transform duration-300 ease-in-out lg:hidden",
        )}
      >
        <div
          className={cn(
            "sticky top-0 z-10 flex items-center justify-between border-b border-[rgb(var(--color-drawer-border))]",
            "bg-[rgb(var(--color-surface))] p-5",
          )}
        >
          <span className="text-lg font-semibold text-[rgb(var(--color-text))]" data-i18n="nav_menu">
            Menú
          </span>

          <button
            data-drawer-close
            aria-label="Cerrar menú"
            data-i18n-attr="aria-label:nav_close_menu"
            className={cn(
              "text-2xl text-[rgb(var(--color-text))] transition-colors",
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
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-5 bg-[rgb(var(--color-surface))] p-5">{children}</div>
      </aside>
    </>
  );
}
