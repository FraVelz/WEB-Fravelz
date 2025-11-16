import ReproductorMusica from "./musica.jsx";
import Seccion from "./seccion.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next'

function Parrafo({ className = "", children }) {
  return (
    <p className={`
    wrap-break-word
    min-w-0
    text-justify
    ${className}
    `}>
      {children}
    </p>
  );
}

function Line() {
  return (
    <hr className="
    my-6
   border-gray-500 border-2
    " />
  );
}

function App() {
  const { t, i18n } = useTranslation()
  return (
    <>
      <div className="
      flex items-center justify-center
      h-fit min-h-screen
      py-3
      ">
        <div className="
        w-screen h-2/4 absolute top-0 left-0 -z-10
        bg-gradient-to-t from-gray-700 to-gray-900
        "></div>

        <ReproductorMusica className="
        fixed top-4 right-4
        bg-gray-900 text-gray-50
        rounded-xl border-gray-700 border-3
        hover:border-gray-500
        transition-all
        p-2 z-20
        " />

        <div className="
        w-96 pt-2 pb-4
        flex flex-col items-center justify-center

        rounded-2xl border-gray-700 border-3
        bg-gray-900 text-gray-50
        hover:border-gray-500
        transition-all
        ">
          <div className="relative h-64 w-64 mt-4">
            {/* Borde girando (grueso) */}
            <div
            className="
            absolute inset-0
            rounded-full
            p-4
            bg-gradient-to-r from-gray-500 to-gray-900
            animate-[spin_2s_linear_infinite]
            "
            ></div>

            {/* Imagen fija más pequeña para que deje ver el borde */}
            <div className="absolute inset-1 rounded-full bg-gray-900 z-10 overflow-hidden">
              <img
                draggable="false"
                className="h-full w-full rounded-full object-cover select-none"
                src={`${import.meta.env.BASE_URL}/logo-fravelz.jpg`}
                alt="Logo de Fravelz"
              />
            </div>
          </div>

          <h1 className="text-3xl pt-3">
            <strong>(FV) Fravelz</strong>
          </h1>

          <p className="
          text-lg mb-4 text-gray-300
          ">@fravelz</p>

          <p>{t('hola')}</p>
          <p>{t('futuro_pentester')}</p>

          <div className="
          text-4xl
          mt-4
          ">
            <a href="https://github.com/FraVelz" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href="https://www.youtube.com/@fravelz" target="_blank">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>

          <div className="idioma flex items-center gap-2 mt-4">
            <span className="text-sm text-gray-300">{t('change_language')}</span>
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="bg-gray-800 text-gray-200 rounded px-2 py-1 text-sm"
            >
              <option value="es">Español</option>
              <option value="zh">中文</option>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>

        <div className="
        absolute bottom-10
        bg-gray-900 text-gray-400
        rounded-xl border-gray-700 border-3
        transition-all
        select-none
        animate-bounce
        -z-10
        p-2
        ">
          <FontAwesomeIcon icon={faDownLong} /> {t('ir_abajo')} <FontAwesomeIcon icon={faDownLong} />
        </div>
      </div>

      <div className="
        min-h-screen h-fit w-screen 
        flex justify-center
        py-3
        ">
        <div className="
          w-xl h-fit p-8
          lg:w-3/4
          rounded-2xl border-gray-700 border-3
          bg-gray-900 text-gray-50
          hover:border-gray-500
          transition-all
          ">
          <h2 className="text-center text-2xl font-bold mb-4">{t('proyectos_personales')}</h2>

          <Seccion
            titulo={t('proyecto_notas_hacking_titulo')}
            enlace="https://fravelz.github.io/WEB-Notas-de-Hacking/"
            imagen={`./web-notas-hacking.png`}
            alt="Imagen Notas de Hacking"
            textoEnlace={t('proyecto_notas_hacking_enlace')}
          >{t('proyecto_notas_hacking_descripcion')}</Seccion>

          <Line />

          <Seccion
            titulo={t('proyecto_ctf_notas_titulo')}
            enlace="#"
            target="_self"
            imagen={`./logo-fravelz.jpg`}
            alt="Imagen Default"
            textoEnlace={t('proyecto_ctf_notas_enlace')}
          >
            {t('proyecto_ctf_notas_descripcion')}
          </Seccion>

          <Line />

          <Seccion
            titulo={t('proyecto_hyprdots_titulo')}
            enlace="https://fravelz.github.io/WEB-Hyprdots/"
            imagen={`./web-hyprdots.png`}
            alt="Imagen Default"
            textoEnlace={t('proyecto_hyprdots_enlace')}
          >
            {t('proyecto_hyprdots_descripcion')}
          </Seccion>

          <Line />

          <Seccion
            titulo={t('proyecto_arch_linux_titulo')}
            enlace="#"
            target="_self"
            imagen={`./logo-fravelz.jpg`}
            alt="Imagen Default"
            textoEnlace={t('proyecto_arch_linux_enlace')}
          >
            {t('proyecto_arch_linux_descripcion')}
          </Seccion>

          <Line />

          <Seccion
            titulo={t('proyecto_notas_vida_titulo')}
            enlace="#"
            target="_self"
            imagen={`./logo-fravelz.jpg`}
            alt="Imagen Default"
            textoEnlace={t('proyecto_notas_vida_enlace')}
            parrafo_default="false"
          >
            <Parrafo>
              {t('proyecto_notas_vida_parrafo1')}
            </Parrafo>

            <Parrafo>
              {t('proyecto_notas_vida_parrafo2')}
            </Parrafo>

            <Parrafo>{t('proyecto_notas_vida_parrafo3')}</Parrafo>
          </Seccion>


          <Line />

          <Seccion
            titulo={t('proyecto_politica_titulo')}
            enlace="#"
            imagen={`./logo-fravelz.jpg`}
            alt="Imagen Default"
            textoEnlace={t('proyecto_politica_enlace')}
          >
            {t('proyecto_politica_descripcion')}
          </Seccion>

          <Line />

          <p className="
            text-center
            text-gray-400
            "><b>{t('autor')}:</b> Fravelz</p>
        </div>
      </div>
    </>
  )
}

export default App
