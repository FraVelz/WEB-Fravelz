import { useRef, useState, useEffect } from "react";

export default function ReproductorMusica({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(err => console.log("Error al reproducir:", err));
    }
    setIsPlaying(!isPlaying);
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

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => audio.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-2xl shadow-md w-80">
      <audio ref={audioRef} src={src} preload="metadata" />
      <button
        onClick={togglePlay}
        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
      >
        {isPlaying ? "⏸️ Pausar" : "▶️ Reproducir"}
      </button>

      <input
        type="range"
        value={progress}
        onChange={handleProgressChange}
        className="w-full mt-3 cursor-pointer accent-blue-500"
      />
    </div>
  );
}
