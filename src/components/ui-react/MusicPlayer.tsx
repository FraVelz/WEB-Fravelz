import { useRef, useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlay, faPause, faMusic } from "@fortawesome/free-solid-svg-icons";

interface MusicPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export default function MusicPlayer({
  isOpen,
  onClose,
  className = "",
}: MusicPlayerProps) {
  const [translations, setTranslations] = useState<any>({});
  const audioRef = useRef<HTMLAudioElement>(null);
  const initializedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const baseUrl = (import.meta.env.BASE_URL || "/").replace(/([^/])$/, "$1/");

  const t = translations;

  const canciones = useMemo(() => {
    const getPath = (filename: string) =>
      `${baseUrl}music/${encodeURIComponent(filename)}`;
    return [
      {
        nombre: t.cancion_chopin,
        src: getPath("Chopin - Etude Op. 25 No. 11 (Winter Wind).mp3"),
      },
      {
        nombre: t.cancion_maluma,
        src: getPath("Maluma - Hawái (LetraLyrics).mp3"),
      },
      {
        nombre: t.cancion_bernes,
        src: getPath("Mark Bernes - Dark Night Марк Бернес - Тёмная Ночь.mp3"),
      },
      {
        nombre: t.cancion_bbno,
        src: getPath("bbno_-meant-to-be-_Sub.-español_.mp3"),
      },
      {
        nombre: t.cancion_skai,
        src: getPath("攬佬SKAI ISYOUGOD八方來財因果HD 高清官方完整版 MV.mp3"),
      },
    ];
  }, [t, baseUrl]);

  const [selectedSong, setSelectedSong] = useState(
    () =>
      `${baseUrl}music/${encodeURIComponent("Chopin - Etude Op. 25 No. 11 (Winter Wind).mp3")}`,
  );

  useEffect(() => {
    // Escuchar cambios de idioma
    const handleLanguageChange = (event: CustomEvent) => {
      setTranslations(event.detail.translations || {});
    };

    window.addEventListener(
      "language-changed",
      handleLanguageChange as EventListener,
    );

    // Get initial translation
    if (typeof window !== "undefined" && (window as any).i18n) {
      const currentLang = (window as any).i18n.getCurrentLanguage();
      const t = (window as any).i18n.getTranslations(currentLang);
      setTranslations(t || {});
    }

    return () => {
      window.removeEventListener(
        "language-changed",
        handleLanguageChange as EventListener,
      );
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
      if (!src) return "";
      try {
        const url = new URL(src, window.location.href);
        return url.pathname.split("/").pop();
      } catch {
        return src.split("/").pop();
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
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.error("Error al reproducir nueva canción:", err);
            setIsPlaying(false);
          });
      };

      if (audio.readyState >= 1) {
        tryPlay();
      } else {
        audio.addEventListener("loadedmetadata", tryPlay, { once: true });
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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 p-3 backdrop-blur-sm sm:p-4 md:p-6 dark:bg-black/60"
      onClick={onClose}
    >
      <div
        className={clsx(
          "relative z-10 mx-auto my-auto flex max-h-[90vh] w-full max-w-sm flex-col overflow-hidden rounded-xl",
          "border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50/50 shadow-2xl shadow-slate-300/50",
          "sm:max-h-[85vh] sm:max-w-md sm:rounded-2xl",
          "dark:border-cyan-500/40 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 dark:shadow-cyan-500/40",
          className,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={clsx(
            "sticky top-0 flex shrink-0 items-center justify-between gap-3 border-b border-slate-200",
            "bg-gradient-to-r from-cyan-100 via-slate-100 to-purple-100 px-4 py-4 backdrop-blur-sm",
            "sm:gap-4 sm:px-6 sm:py-5 md:px-8 md:py-6",
            "dark:border-cyan-500/40 dark:from-cyan-900/90 dark:via-gray-900/70 dark:to-purple-900/90",
          )}
        >
          <h3
            className={clsx(
              "flex flex-1 items-center gap-2 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text",
              "text-lg font-bold text-transparent sm:text-xl md:text-2xl dark:from-cyan-300 dark:to-purple-300",
            )}
          >
            {/* <FontAwesomeIcon icon={faMusic} className="text-base sm:text-lg md:text-xl" /> */}
            <span className="truncate">{t.selector_musica}</span>
          </h3>
          <button
            onClick={onClose}
            className={clsx(
              "flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-xl font-bold",
              "text-slate-500 transition-all duration-200 hover:scale-110 hover:bg-cyan-500/20 hover:text-cyan-600",
              "active:scale-95 active:text-cyan-700 sm:h-10 sm:w-10 sm:text-2xl md:h-12 md:w-12 md:text-3xl",
              "dark:text-gray-400 dark:hover:text-cyan-300 dark:active:text-cyan-400",
            )}
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto bg-white/50 px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 dark:bg-transparent">
          <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
            <select
              value={selectedSong}
              onChange={(e) => setSelectedSong(e.target.value)}
              className={clsx(
                "w-full cursor-pointer rounded-lg border-2 border-slate-300 bg-slate-100 px-3 py-2.5 text-sm text-slate-800",
                "shadow-md shadow-slate-200 transition-all hover:border-cyan-400 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none",
                "sm:px-4 sm:py-3 sm:text-base",
                "dark:border-cyan-500/30 dark:bg-gray-800 dark:text-cyan-200 dark:shadow-cyan-500/20 dark:hover:border-cyan-400/60",
              )}
            >
              {canciones.map((cancion, i) => (
                <option key={i} value={cancion.src}>
                  {cancion.nombre}
                </option>
              ))}
            </select>

            <button
              onClick={togglePlay}
              className={clsx(
                "flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500",
                "px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition",
                "hover:from-cyan-400 hover:to-purple-400 hover:shadow-cyan-500/50 sm:px-6 sm:py-3 sm:text-base",
                "dark:from-cyan-600 dark:to-purple-600 dark:hover:from-cyan-500 dark:hover:to-purple-500",
              )}
            >
              {/* <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="text-sm sm:text-base" /> */}
              {isPlaying ? t.pausar : t.reproducir}
            </button>

            <div className="w-full px-1">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange}
                className="h-2 w-full cursor-pointer accent-cyan-500 hover:accent-cyan-400 sm:h-2.5 dark:accent-cyan-400 dark:hover:accent-cyan-300"
              />
            </div>
          </div>
        </div>

        <div
          className={clsx(
            "h-1 shrink-0 bg-gradient-to-r from-cyan-400/60 via-purple-400/40 to-cyan-400/60",
            "dark:from-cyan-500/50 dark:via-purple-500/30 dark:to-cyan-500/50",
          )}
        ></div>
      </div>
    </div>
  );

  return (
    <>
      <audio ref={audioRef} preload="metadata" loop crossOrigin="anonymous" />

      {isOpen && typeof document !== "undefined"
        ? createPortal(modalContent, document.body)
        : null}
    </>
  );
}
