import { useState } from 'react';
import MusicPlayer from './MusicPlayer';

interface MusicButtonProps {
}

export default function MusicButton({}: MusicButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-slate-800 dark:text-gray-300 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors p-1 rounded-lg hover:bg-cyan-100 dark:hover:bg-cyan-900/20 shadow-sm hover:shadow-md shadow-cyan-500/10"
        aria-label="Abrir reproductor de música"
        title="Reproductor de música"
      >
        <svg
          className="size-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
          />
        </svg>
      </button>
      <MusicPlayer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
