import AboutMeSection from "@/features/about-me/AboutMeSection";
import ContactSection from "@/features/contact/ContactSection";
import HobbiesSection from "@/features/hobbies/HobbiesSection";
import HeroSection from "@/features/hero/HeroSection";
import ProjectsSection from "@/features/projects/ProjectsSection";
import TechnologiesSection from "@/features/technologies/TechnologiesSection";

import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/Footer";

import Particles from "./components/Particles";
import HomeScroll from "./HomeScroll";

import type { Language } from "@/lib/i18n-routing";
import { getTranslations } from "@/utils/i18n";

export default async function HomeMain({ lang }: { lang: Language }) {
  const t = getTranslations(lang);

  return (
    <>
      <Header t={t} />
      <Particles />
      <main className="relative z-10 overflow-x-hidden">
        <HeroSection lang={lang} />
        <div className="horizontal relative w-full overflow-x-hidden">
          <div className="containera flex min-h-full max-lg:flex-col max-lg:gap-14">
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
              classname="panel min-w-screen h-screen flex justify-center items-center space-y-8 p-10"
            />
            <HobbiesSection
              lang={lang}
              classname="panel min-w-screen h-fit lg:h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
            />
          </div>
        </div>

        <ContactSection lang={lang} />
        <HomeScroll />
      </main>
      <Footer lang={lang} />
    </>
  );
}
