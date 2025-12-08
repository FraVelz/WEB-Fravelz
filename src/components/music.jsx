import { useRef, useState, useEffect, useMemo } from "react";
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faMusic } from "@fortawesome/free-solid-svg-icons";

export default function ReproductorMusica({ className = "" }) {
  const { t, i18n } = useTranslation();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedSong, setSelectedSong] = useState(`./canciones/Chopin - Etude Op. 25 No. 11 (Winter Wind).mp3`);

  // Lista de canciones disponibles (se actualiza cuando cambia el idioma)
  const canciones = useMemo(() => [
    { nombre: t('cancion_chopin'), src: `./canciones/Chopin - Etude Op. 25 No. 11 (Winter Wind).mp3` },
    { nombre: t('cancion_maluma'), src: `./canciones/Maluma - Hawái (LetraLyrics).mp3` },
    { nombre: t('cancion_bernes'), src: `./canciones/Mark Bernes - Dark Night Марк Бернес - Тёмная Ночь.mp3` },
    { nombre: t('cancion_bbno'), src: `./canciones/bbno_-meant-to-be-_Sub.-español_.mp3` },
    { nombre: t('cancion_skai'), src: `./canciones/攬佬SKAI ISYOUGOD八方來財因果HD 高清官方完整版 MV.mp3` },
  ], [t, i18n.language]);

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
    setIsPlaying(false);
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
    bg-gray-900 border border-cyan-500/30
    p-4 rounded-2xl shadow-lg shadow-cyan-500/10 w-80
    hover:border-cyan-400/60 transition-all
    ${className}
    `}>
      <h2 className="
      font-bold mb-3 text-lg select-none
      text-cyan-300
      ">
        <FontAwesomeIcon icon={faMusic} /> {t('selector_musica')}
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
          bg-gray-800 text-cyan-200
          border border-cyan-500/30
          hover:border-cyan-400/60
          cursor-pointer transition-all
          "
        >
          {canciones.map((cancion, i) => (
            <option key={i} value={cancion.src}>
              {cancion.nombre}
            </option>
          ))}
        </select>

        {/* Reproductor */}
        <audio ref={audioRef} src={selectedSong} preload="metadata" loop />

        <button
          onClick={togglePlay}
          className="
          bg-linear-to-r from-cyan-600 to-purple-600 text-white
          hover:from-cyan-500 hover:to-purple-500
          transition
          cursor-pointer
          px-4 py-2 rounded-full
          flex items-center gap-2
          font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50
          "
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          {isPlaying ? t('pausar') : t('reproducir')}
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
        w-full mt-3 cursor-pointer accent-cyan-400 hover:accent-cyan-300
        "
      />
    </div>
  );
}
