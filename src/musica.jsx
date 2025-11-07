import { useRef, useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faMusic } from "@fortawesome/free-solid-svg-icons";

export default function ReproductorMusica({ className = "" }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedSong, setSelectedSong] = useState("/Chopin - Etude Op. 25 No. 11 (Winter Wind).mp3");

  // Lista de canciones disponibles
  const canciones = [
    { nombre: "Piano :v", src: "/Chopin - Etude Op. 25 No. 11 (Winter Wind).mp3" },
    { nombre: "Triste ._.", src: "/bbno_-meant-to-be-_Sub.-español_.mp3" },
    { nombre: "Depresiva :(", src: "/Lo Que Hay X Aqui La Receta & Kessoku Band.mp3" },
  ];

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (isPlaying) {
        audio.pause();
      } else {
        await audio.play();
      }
      setIsPlaying(!isPlaying);
    } catch (err) {
      console.log("Error al reproducir:", err);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const newTime = (audio.duration * e.target.value) / 100;
    audio.currentTime = newTime;
    setProgress(e.target.value);
  };

  // Detecta cuando cambia la canción seleccionada
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    audio.src = selectedSong;

    // Reproduce automáticamente la nueva canción
    const playNewSong = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.log("Autoplay bloqueado:", err);
        setIsPlaying(false);
      }
    };

    playNewSong();
  }, [selectedSong]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => audio.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <div className={`
    flex flex-col items-center
    bg-gray-200
    p-4 rounded-2xl shadow-md w-80
    ${className}
    `}>
      <h2 className="
      font-bold mb-3 text-lg select-none
      text-gray-200
      ">
        <FontAwesomeIcon icon={faMusic} /> Selector de música
        </h2>

      <div className="
      flex align-middle justify-between w-full
      gap-8
      ">
        {/* Selector de canciones */}
        <select
          value={selectedSong}
          onChange={(e) => setSelectedSong(e.target.value)}
          className="
          h-full w-full
          py-2 px-4 rounded-lg
          border border-gray-700
          hover:border-gray-600
          cursor-pointer
          "
        >
          {canciones.map((cancion, i) => (
            <option key={i} value={cancion.src}>
              {cancion.nombre}
            </option>
          ))}
        </select>

        {/* Reproductor */}
        <audio ref={audioRef} src={selectedSong} preload="metadata" autoPlay loop />

        <button
          onClick={togglePlay}
          className="
          bg-gray-600 text-gray-200
          hover:bg-gray-500
          transition
          cursor-pointer
          px-4 py-2 rounded-full
          flex items-center gap-2
          "
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          {isPlaying ? "Pausar" : "Reproducir"}
        </button>
      </div>

      {/* Barra de progreso */}
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleProgressChange}
        className="
        w-full mt-3 cursor-pointer accent-gray-400
        "
      />
    </div>
  );
}
