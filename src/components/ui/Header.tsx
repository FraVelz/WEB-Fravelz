import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faLanguage, faMusic, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import MusicPlayer from "./MusicPlayer";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import Enlace from "./Enlace";
import { type Language } from "../../utils/i18n";

interface HeaderProps {
  lang?: Language;
}

export default function Header({ lang = "es" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMusicModalOpen, setIsMusicModalOpen] = useState(false);

  return (
    <header className="
      fixed top-0 w-screen z-20
      flex justify-center
      bg-gray-950/90 backdrop-blur-xl
      border-b border-gray-800/50
      shadow-lg shadow-gray-900/50
    ">
      <div className="w-screen max-w-7xl">
        <div className="
          flex lg:justify-around items-center gap-5
          flex-col lg:flex-row lg:gap-0
          p-5
          bg-gradient-to-b from-gray-950/95 to-gray-900/80
        ">
          {/* Logo */}
          <div className="w-full flex justify-between items-center lg:mb-0">
            <button 
              onClick={() => window.location.reload()} 
              className="text-gray-100 hover:text-cyan-100 text-3xl font-bold transition-colors"
            >
              Fravelz
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
              className="text-2xl text-gray-300 lg:hidden"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          <div className={`${isMenuOpen ? "grid" : "hidden"} lg:hidden w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent`}></div>

          {/* Navegación */}
          <nav
            className={`
              ${isMenuOpen ? "flex" : "hidden"}
              flex-col gap-5 lg:flex-row lg:gap-12 text-center
            `}
          >
            <Enlace className="text-gray-300 hover:text-gray-100 transition-colors" href="#presentacion">Presentacion</Enlace>
            <Enlace className="text-gray-300 hover:text-gray-100 transition-colors" href="#tecnologia">Tecnologia</Enlace>
            <Enlace className="text-gray-300 hover:text-gray-100 transition-colors" href="#sobre-mi">Sobre Mi</Enlace>
            <Enlace className="text-gray-300 hover:text-gray-100 transition-colors" href="#proyectos">Proyectos</Enlace>
          </nav>

          <div className={`${isMenuOpen ? "grid" : "hidden"} lg:hidden w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent`}></div>

          {/* Acciones */}
          <div
            className={`
              ${isMenuOpen ? "grid" : "hidden"}
              w-full lg:w-fit gap-3 grid-cols-2 lg:justify-between lg:gap-2 max-lg:pt-3
            `}
          >
            <button
              onClick={() => setIsMusicModalOpen(true)}
              className="
                cursor-pointer
                text-right
                transition duration-300
                lg:py-1 lg:px-2
              "
              aria-label="Abrir reproductor de música"
            >
              <FontAwesomeIcon icon={faMusic} className="
                text-xl
                text-gray-300
                hover:text-gray-400
              " />
            </button>

            <a 
              href="https://github.com/FraVelz" 
              target="_blank"
              className="
                lg:py-1 lg:px-2
                text-left
              "
            >
              <FontAwesomeIcon icon={faGithub} className="
                text-2xl
                text-gray-300
                hover:text-gray-400
              " />
            </a>

            <ThemeSelector />

            <LanguageSelector lang={lang} />
          </div>
        </div>

        {/* Borde de abajo del header */}
        <div className="
          h-[1px]
          bg-gradient-to-r from-transparent via-gray-600 to-transparent
        "></div>
      </div>

      {/* Modal de Música */}
      <MusicPlayer
        isOpen={isMusicModalOpen}
        onClose={() => setIsMusicModalOpen(false)}
        lang={lang}
      />
    </header>
  );
}
