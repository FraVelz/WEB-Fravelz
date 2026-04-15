"use client";

import type { ReactNode } from "react";

export default function NavLink({
  href,
  target = "_self",
  className = "",
  children,
}: {
  href: string;
  target?: string;
  className?: string;
  children: ReactNode;
}) {
  const isAnchor = href.startsWith("#");

  return (
    <a
      href={href}
      target={target}
      draggable={false}
      className={`link-animation font-medium text-slate-700 transition-colors select-none dark:text-slate-400 ${className}`}
      data-smooth-scroll={isAnchor ? "true" : undefined}
      onClick={(e) => {
        if (!isAnchor) return;
        const link = e.currentTarget;
        if (link.closest("#header-nav-desktop") && window.innerWidth >= 1024) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        const id = href.slice(1);
        const el = document.getElementById(id) || document.getElementsByName(id)[0];
        if (!el) return;
        const header = document.querySelector("header");
        const offset = header ? header.getBoundingClientRect().height + 8 : 8;
        const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
        if (history.pushState) {
          history.pushState(null, "", href);
        }
      }}
    >
      {children}
    </a>
  );
}
