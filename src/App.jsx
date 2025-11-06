import ReproductorMusica from "./musica.jsx";

function App() {
  return (
    <>
    <div className="
    w-96 flex flex-col items-center justify-center
    bg-gray-900 text-gray-50
    rounded-xl border-gray-700 border-3
    ">
      <img className="
      rounded-full
      h-64 w-64
      m-4
      " src="./../public/logo-fravelz.jpg" alt="Logo de Fravelz" />

      <h1 className="text-3xl">(FV) Fravelz</h1>

      <p className="
      text-lg mb-4
      ">@fravelz</p>

      <ReproductorMusica src="/src/assets/musica/Chopin - Etude Op. 25 No. 11 (Winter Wind).mp3" />
    </div>
    </>
  )
}

export default App
