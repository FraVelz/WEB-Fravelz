import AboutMeSection from "@/components/features/about-me/AboutMeSection";
import ContactSection from "@/components/features/contact/ContactSection";
import Header from "@/components/features/header/Header";
import HobbiesSection from "@/components/features/hobbies/HobbiesSection";
import HomeScroll from "@/components/features/PageFeature/HomeScroll";
import ProjectsSection from "@/components/features/projects/ProjectsSection";
import TechnologiesSection from "@/components/features/technologies/TechnologiesSection";
import Footer from "@/components/ui/Footer";
import Particles from "@/components/ui/Particles";
import HeroSection from "@/components/features/hero/HeroSection";
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
