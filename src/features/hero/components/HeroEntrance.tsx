"use client";

import { useLayoutEffect } from "react";

import { runAnimation as runHeaderAnimation } from "@/components/layout/header/utils/header";

import { runHeroEntrance } from "../heroEntrance";

export default function HeroEntrance({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    return runHeroEntrance(() => runHeaderAnimation());
  }, []);

  return <div className="contents">{children}</div>;
}
