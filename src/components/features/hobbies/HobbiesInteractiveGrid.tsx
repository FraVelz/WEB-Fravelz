"use client";

import { cn } from "@/utils/cn";
import type { ReactNode } from "react";
import { useEffect } from "react";

export default function HobbiesInteractiveGrid({ className, children }: { className?: string; children: ReactNode }) {
  useEffect(() => {
    const cards = document.getElementById("cards");
    if (!cards) return;
    const onMove = (e: MouseEvent) => {
      for (const card of document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
    cards.addEventListener("mousemove", onMove);
    return () => cards.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div id="cards" className={cn(className)}>
      {children}
    </div>
  );
}
