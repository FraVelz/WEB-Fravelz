import ReproductorMusica from "./musica.jsx";
import Seccion from "./seccion.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";

function Parrafo({ className="", children }){
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
  return (
    <>
      <div className="
      flex items-center justify-center h-screen
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
        p-2
        " />

        <div className="
        w-96 pt-2 pb-4
        flex flex-col items-center justify-center
        rounded-2xl border-gray-700 border-3
        bg-gray-900 text-gray-50
        hover:border-gray-500
        transition-all
        ">
          <img draggable="false" className="
          rounded-full select-none
          h-64 w-64
          border-gray-700 border-4
          m-4
          " src="/logo-fravelz.jpg" alt="Logo de Fravelz" />

          <h1 className="text-3xl">
            <strong>(FV) Fravelz</strong>
            </h1>

          <p className="
          text-lg mb-4 text-gray-300
          ">@fravelz</p>

          <p>Hola :v, que tal?</p>
          <p>Futuro Pentester Web :)</p>

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
        </div>

        <div className="
        absolute bottom-10
        bg-gray-900 text-gray-50
        rounded-xl border-gray-700 border-3
        hover:border-gray-500
        transition-all
        select-none
        animate-bounce
        -z-10
        p-4z
        ">
          <FontAwesomeIcon icon={faDownLong} /> Ir Abajo <FontAwesomeIcon icon={faDownLong} />
        </div>
      </div>

      <div className="
        min-h-screen w-screen 
        flex justify-center
        pb-3
        ">
          <div className="
          w-xl h-fit p-8
          lg:w-3/4
          rounded-2xl border-gray-700 border-3
          bg-gray-900 text-gray-50
          hover:border-gray-500
          transition-all
          ">
            <h2 className="text-center text-2xl font-bold mb-4">Proyectos Personales</h2>

            <Seccion
            titulo="Notas de Hacking"
            enlace="https://fravelz.github.io/WEB-Notas-de-Hacking/"
            imagen="/logo-fravelz.jpg"
            alt="Imagen Notas de Hacking"
            textoEnlace="Ir a Notas de Hacking (En construcción)"
            >Pagina web, que contiene todos mis notas y aprendizajes en hacking en un orden estructurado, para repasar y para aprender.</Seccion>

            <Line />

            <Seccion
            titulo="CTF Notas"
            enlace="#"
            imagen="/logo-fravelz.jpg"
            alt="Imagen Default"
            textoEnlace="Ir a CTF Notas (No disponible)"
            >
              En un Futuro cercano tendre un apartado especial para notas de CTFs que vaya realizando, todo lo necesario.
            </Seccion>

            <Line />

            <Seccion
            titulo="Hyprdots"
            enlace="#"
            imagen="/logo-fravelz.jpg"
            alt="Imagen Default"
            textoEnlace="Ir a Hyprdots (configuraciones del pc) (No disponible)"
            >
              En un futuro, la web de hyprdots, estaran las configuraciones de mi pc, todo lo que es las diferentes pre-visualizaciones de mi perzonalizacion del pc, y sus respectivas configuraciones con atajos de teclados, y mucho mas. (configuraciones con Arch Linux, implementando el gestor de ventanas de Hyprland, mas informacion en la web).
            </Seccion>

            <Line />

            <Seccion
            titulo="Notas de Arch Linux"
            enlace="#"
            imagen="/logo-fravelz.jpg"
            alt="Imagen Default"
            textoEnlace="Ir a Notas de Arch Linux (No disponible)"
            >
              En el futuro, pagina web, que recopilara una serie de informacion corta y resumida acerca el funcionamiento de arch linux y su configuraciones enfocadas en la utilizacion de Arch con hyprland, desde la instalacion hasta la configuraciones de atajos de teclados.
            </Seccion>

            <Line />

            <Seccion
            titulo="Notas de la Vida"
            enlace="#"
            imagen="/logo-fravelz.jpg"
            alt="Imagen Default"
            textoEnlace="Ir a Notas de la Vida (No disponible)"
            parrafo_default="false"
            >
              <Parrafo>
                En el futuro, pagina web, que tendra el proposito de ser un recopilamiento de consejos y buenas practicas en la vida en general, lo se, parece, raro, o da mucho de que pensar, pero estas notas se basaran en ayudar y orientar a jovenes o adultos que quieran aprender, a como realmente es vivir la vida, sera una recopilacion de consejos de cosas sencillas como aprender a socializar, a manejar la economia, el estudio, el tiempo, a conseguir novia/novio, a manejar pensamientos, e incluso puede que si no has encontrado un proposito en la vida y te sientas vacio esta pagina web sera de gran ayuda.
              </Parrafo>

              <Parrafo>
                Y si todo lo anterior no es poco, vamos a ver como es que pensaban nuestros antepasados en diferentes regiones del mundo y pensameintos de la vida que hasta el dia de hoy nos han influenciado(filosofia), tocando temas de religiones y otras formas de pensamiento.
              </Parrafo>

              <Parrafo>Todo lo anterior lo estaremos aprendiendo de la mano, a medida que yo vaya aprendiendo, lo estare, enseñando en la web.</Parrafo>
            </Seccion>


            <Line />

            <Seccion
            titulo="Notas de Politica"
            enlace="#"
            imagen="/logo-fravelz.jpg"
            alt="Imagen Default"
            textoEnlace="Ir a Notas de Politica (No disponible)"
            >
              En el futuro se desarrollará una página web en formato de blog que recopilará información sobre el funcionamiento de la política y los distintos ideales, presentada de forma resumida y precisa. Su propósito será analizar los factores internos y externos de cada país, respetando sus principios y tradiciones, para proponer estrategias y planes orientados al progreso y a la resolución de problemas sociales a nivel global, abordando cada nación de manera individual como parte de un proyecto personal y de entretenimiento.
            </Seccion>

            <Line />

            <p className="
            text-center
            text-gray-400
            "><b>Autor:</b> Fravelz</p>
          </div>
      </div>
    </>
  )
}

export default App
