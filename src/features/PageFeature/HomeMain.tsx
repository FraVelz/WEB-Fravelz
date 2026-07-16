import dynamic from "next/dynamic";

import AboutMeSection from "@/features/about-me/AboutMeSection";
import ContactSection from "@/features/contact/ContactSection";
import HobbiesSection from "@/features/hobbies/HobbiesSection";
import HeroSection from "@/features/hero/HeroSection";
import ProjectsSection from "@/features/projects/ProjectsSection";
import TechnologiesSection from "@/features/technologies/TechnologiesSection";

import Footer from "@/components/layout/Footer";

import Particles from "./components/Particles";

import homeStyles from "./HomeMain.module.css";

import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";

/** GSAP client islands — dynamic so ScrollTrigger/core stay off the critical RSC payload. */
const HeroEntrance = dynamic(() => import("@/features/hero/components/HeroEntrance"));
const HomeAmbientGlow = dynamic(() => import("./components/HomeAmbientGlow").then((m) => m.HomeAmbientGlow));
const HomeScroll = dynamic(() => import("./HomeScroll"));

export default async function HomeMain({ lang }: { lang: Language }) {
  const t = getTranslations(lang);

  return (
    <>
      <Particles />
      <HomeAmbientGlow />

      <main className="home-scroll-layer relative z-10 overflow-x-hidden">
        <section className="relative overflow-x-hidden overflow-y-visible">
          <HeroEntrance>
            <HeroSection lang={lang} />
          </HeroEntrance>
        </section>

        <div className="horizontal relative w-full overflow-x-hidden">
          <h2 className="sr-only">{t.home_horizontal_region_aria ?? "Portfolio sections with horizontal scroll"}</h2>
          <div className="home-panels-track flex min-h-full max-lg:flex-col max-lg:gap-14">
            <ProjectsSection
              lang={lang}
              classname="panel min-w-screen h-fit lg:h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8"
            />
            <TechnologiesSection
              lang={lang}
              classname="panel min-w-screen h-fit lg:h-screen flex justify-center items-center"
            />
            <AboutMeSection
              lang={lang}
              classname="panel min-w-screen h-fit lg:h-screen flex flex-col justify-center items-center p-6 sm:p-8 lg:p-10"
            />
            <HobbiesSection
              lang={lang}
              classname="panel min-w-screen h-fit lg:h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
            />
          </div>
        </div>

        <section className="relative overflow-hidden">
          <div
            className="via-primary/40 absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent to-transparent"
            aria-hidden="true"
          />
          <div data-home-reveal className={homeStyles.revealScroll}>
            <ContactSection lang={lang} />
          </div>
        </section>

        <HomeScroll />
      </main>

      <Footer lang={lang} />
    </>
  );
}
