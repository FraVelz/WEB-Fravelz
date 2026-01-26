import type { ReactNode } from "react";

interface ModalInfoProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function ModalInfo({ isOpen, onClose, title, children }: ModalInfoProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6" 
      onClick={onClose}
    >
      <div 
        className="relative z-10 
                   bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 
                   dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 
                   border-2 border-cyan-400/70 dark:border-cyan-500/40 
                   rounded-2xl 
                   shadow-2xl shadow-cyan-500/30 dark:shadow-cyan-500/40 
                   w-full max-w-3xl max-h-[85vh] sm:max-h-[90vh] 
                   overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 
                        bg-gradient-to-r from-cyan-100/90 via-blue-100/90 to-purple-100/90 
                        dark:from-cyan-900/40 dark:via-gray-900/40 dark:to-purple-900/40 
                        border-b-2 border-cyan-400/70 dark:border-cyan-500/40 
                        px-6 sm:px-8 py-5 sm:py-6 
                        flex items-center justify-between gap-4 
                        backdrop-blur-sm">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold 
                        bg-gradient-to-r from-cyan-600 to-purple-600 
                        dark:from-cyan-300 dark:to-purple-300 
                        bg-clip-text text-transparent flex-1">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="cursor-pointer shrink-0 
                      text-slate-700 dark:text-gray-400 
                      hover:text-cyan-700 dark:hover:text-cyan-300 
                      active:text-cyan-700 dark:active:text-cyan-400 
                      transition-all duration-200 
                      text-2xl sm:text-3xl font-bold 
                      hover:bg-cyan-500/20 dark:hover:bg-cyan-500/20 
                      rounded-full w-10 h-10 sm:w-12 sm:h-12 
                      flex items-center justify-center 
                      hover:scale-110 active:scale-95"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-6 sm:px-8 py-6 sm:py-8 
                       text-slate-800 dark:text-gray-200 
                       space-y-6 
                       scrollbar-thin scrollbar-thumb-cyan-500/40 dark:scrollbar-thumb-cyan-500/40 scrollbar-track-gray-200/50 dark:scrollbar-track-gray-900/50">
          <div className="space-y-5">
            {children}
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-cyan-500/50 via-purple-500/30 to-cyan-500/50 shrink-0"></div>
      </div>
    </div>
  );
}
