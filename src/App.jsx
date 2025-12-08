import FrontPage from "./sessions/FronPage.jsx";
import InformationPage from "./sessions/InformationPage.jsx";

import { useTranslation } from 'react-i18next'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const { t, i18n } = useTranslation()
  return (
    <>
      <div className="
      flex flex-col items-center sm:justify-center
      gap-4
      h-fit min-h-screen
      ">
        <div className="
        hidden sm:block
        w-screen h-2/4 absolute top-0 left-0 -z-10
        bg-linear-to-t from-cyan-900/30 via-gray-900 to-purple-900/20
        "></div>

        <FrontPage />

        <div className="
        flex
        h-fit w-fit
        px-3 py-5
        justify-center
        ">
          <div className="
          bg-gray-900 text-cyan-300
          rounded-xl border-cyan-500/40 border-2
          hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20
          transition-all
          select-none
          animate-bounce
          z-10
          p-2
          ">
            <FontAwesomeIcon icon={faDownLong} /> {t('ir_abajo')} <FontAwesomeIcon icon={faDownLong} />
          </div>
        </div>
      </div>

      <InformationPage />

      <footer className="
        border-t-2 border-gray-700
        hover:border-cyan-400/80 hover:shadow-lg hover:shadow-cyan-500/20
        text-center
        py-8
        sm:mt-4
      ">
          <p className="text-gray-400 mb-2"><b className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{t('autor')}:</b> Fravelz</p>
      </footer>
    </>
  )
}