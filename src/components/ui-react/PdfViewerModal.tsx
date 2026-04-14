"use client";

import { useEffect, useCallback } from "react";
import { cn } from "@/utils/cn";

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  closeText?: string;
  downloadText?: string;
}

export default function PdfViewerModal({
  isOpen,
  onClose,
  pdfUrl,
  title,
  closeText = "Cerrar",
  downloadText = "Descargar PDF",
}: PdfViewerModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-modal-title"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className={cn(
            "flex items-center justify-between gap-4 border-b border-slate-200 bg-slate-50 px-4 py-3",
            "dark:border-slate-700 dark:bg-slate-800/50",
          )}
        >
          <h2 id="pdf-modal-title" className="flex-1 truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
            {title}
          </h2>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={pdfUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg bg-cyan-100/80 px-3 py-1.5 text-xs font-medium",
                "text-cyan-700 transition-colors hover:bg-cyan-200/80",
                "dark:bg-cyan-900/40 dark:text-cyan-300 dark:hover:bg-cyan-800/50",
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              {downloadText}
            </a>
            <button
              onClick={onClose}
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors",
                "hover:bg-slate-200 hover:text-slate-900",
                "dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-100",
              )}
              aria-label={closeText}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* PDF viewer */}
        <div className="min-h-0 flex-1 overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
            title={title}
            className="h-[75vh] min-h-[400px] w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
