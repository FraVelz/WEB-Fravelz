import { useRef, useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faMusic } from "@fortawesome/free-solid-svg-icons";

interface MusicPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export default function MusicPlayer({ isOpen, onClose, className = "" }: MusicPlayerProps) {
  const [translations, setTranslations] = useState<any>({});
  const audioRef = useRef<HTMLAudioElement>(null);
  const initializedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const baseUrl = (import.meta.env.BASE_URL || '/').replace(/([^/])$/, '$1/');

  const t = translations;

  const canciones = useMemo(() => {
    const getPath = (filename: string) => `${baseUrl}music/${encodeURIComponent(filename)}`;
    return [
      { nombre: t.cancion_chopin, src: getPath('Chopin - Etude Op. 25 No. 11 (Winter Wind).mp3') },
      { nombre: t.cancion_maluma, src: getPath('Maluma - Hawái (LetraLyrics).mp3') },
      { nombre: t.cancion_bernes, src: getPath('Mark Bernes - Dark Night Марк Бернес - Тёмная Ночь.mp3') },
      { nombre: t.cancion_bbno, src: getPath('bbno_-meant-to-be-_Sub.-español_.mp3') },
      { nombre: t.cancion_skai, src: getPath('攬佬SKAI ISYOUGOD八方來財因果HD 高清官方完整版 MV.mp3') },
    ];
  }, [t, baseUrl]);

  const [selectedSong, setSelectedSong] = useState(() =>
    `${baseUrl}music/${encodeURIComponent('Chopin - Etude Op. 25 No. 11 (Winter Wind).mp3')}`
  );

  useEffect(() => {
    // Escuchar cambios de idioma
    const handleLanguageChange = (event: CustomEvent) => {
      setTranslations(event.detail.translations || {});
    };

    window.addEventListener('language-changed', handleLanguageChange as EventListener);
    
    // Obtener traducción inicial
    if (typeof window !== 'undefined' && (window as any).i18n) {
      const currentLang = (window as any).i18n.getCurrentLanguage();
      const t = (window as any).i18n.getTranslations(currentLang);
      setTranslations(t || {});
    }

    return () => {
      window.removeEventListener('language-changed', handleLanguageChange as EventListener);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("Error al reproducir:", err);
      setIsPlaying(false);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const newTime = (audio.duration * parseFloat(e.target.value)) / 100;
    audio.currentTime = newTime;
    setProgress(parseFloat(e.target.value));
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || initializedRef.current) return;

    audio.src = selectedSong;
    audio.load();
    initializedRef.current = true;
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !initializedRef.current) return;

    const getFileName = (src: string) => {
      if (!src) return '';
      try {
        const url = new URL(src, window.location.href);
        return url.pathname.split('/').pop();
      } catch {
        return src.split('/').pop();
      }
    };

    const currentFileName = getFileName(audio.src);
    const newFileName = getFileName(selectedSong);
    
    if (currentFileName === newFileName) return;

    const wasPlaying = isPlaying && audio.currentTime > 0 && !audio.paused;
    
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    setProgress(0);

    audio.src = selectedSong;
    audio.load();

    if (wasPlaying) {
      const tryPlay = () => {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.error("Error al reproducir nueva canción:", err);
          setIsPlaying(false);
        });
      };

      if (audio.readyState >= 1) {
        tryPlay();
      } else {
        audio.addEventListener('loadedmetadata', tryPlay, { once: true });
      }
    }
  }, [selectedSong, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (!audio.duration) return;
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    const handleError = (e: Event) => {
      console.error("Error en el audio:", e);
      setIsPlaying(false);
    };

    const handleLoadedMetadata = () => {
      setProgress(0);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 dark:bg-black/60 backdrop-blur-sm p-3 sm:p-4 md:p-6"
      onClick={onClose}
    >
      <div
        className={`relative z-10 bg-gradient-to-br from-white via-slate-50 to-cyan-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 border border-slate-200 dark:border-cyan-500/40 rounded-xl sm:rounded-2xl shadow-2xl shadow-slate-300/50 dark:shadow-cyan-500/40 w-full max-w-sm sm:max-w-md max-h-[90vh] sm:max-h-[85vh] overflow-hidden flex flex-col mx-auto my-auto ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-gradient-to-r from-cyan-100 via-slate-100 to-purple-100 dark:from-cyan-900/90 dark:via-gray-900/70 dark:to-purple-900/90 border-b border-slate-200 dark:border-cyan-500/40 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between gap-3 sm:gap-4 backdrop-blur-sm shrink-0">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-300 dark:to-purple-300 bg-clip-text text-transparent flex-1 flex items-center gap-2">
            <FontAwesomeIcon icon={faMusic} className="text-base sm:text-lg md:text-xl" />
            <span className="truncate">{t.selector_musica}</span>
          </h3>
          <button
            onClick={onClose}
            className="cursor-pointer shrink-0 text-slate-500 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-300 active:text-cyan-700 dark:active:text-cyan-400 transition-all duration-200 text-xl sm:text-2xl md:text-3xl font-bold hover:bg-cyan-500/20 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 active:scale-95"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 min-h-0 bg-white/50 dark:bg-transparent">
          <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
            <select
              value={selectedSong}
              onChange={(e) => setSelectedSong(e.target.value)}
              className="
                w-full
                py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg
                bg-slate-100 dark:bg-gray-800 text-slate-800 dark:text-cyan-200 text-sm sm:text-base
                border-2 border-slate-300 dark:border-cyan-500/30
                hover:border-cyan-400 dark:hover:border-cyan-400/60
                shadow-md shadow-slate-200 dark:shadow-cyan-500/20
                cursor-pointer transition-all
                focus:outline-none focus:ring-2 focus:ring-cyan-500/50
              "
            >
              {canciones.map((cancion, i) => (
                <option key={i} value={cancion.src}>
                  {cancion.nombre}
                </option>
              ))}
            </select>

            <button
              onClick={togglePlay}
              className="
                bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-600 dark:to-purple-600 text-white
                hover:from-cyan-400 hover:to-purple-400 dark:hover:from-cyan-500 dark:hover:to-purple-500
                transition
                cursor-pointer
                px-5 sm:px-6 py-2.5 sm:py-3 rounded-full
                flex items-center gap-2
                font-semibold text-sm sm:text-base shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50
                w-full justify-center
              "
            >
              <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="text-sm sm:text-base" />
              {isPlaying ? t.pausar : t.reproducir}
            </button>

            <div className="w-full px-1">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange}
                className="
                  w-full cursor-pointer accent-cyan-500 dark:accent-cyan-400 hover:accent-cyan-400 dark:hover:accent-cyan-300
                  h-2 sm:h-2.5
                "
              />
            </div>
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-cyan-400/60 via-purple-400/40 to-cyan-400/60 dark:from-cyan-500/50 dark:via-purple-500/30 dark:to-cyan-500/50 shrink-0"></div>
      </div>
    </div>
  );

  return (
    <>
      <audio 
        ref={audioRef} 
        preload="metadata" 
        loop 
        crossOrigin="anonymous"
      />

      {isOpen && typeof document !== 'undefined' 
        ? createPortal(modalContent, document.body)
        : null
      }
    </>
  );
}
