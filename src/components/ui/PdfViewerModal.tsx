"use client";

import "./pdf-viewer-modal.css";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/utils/cn";

const noopSubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

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
  const onCloseRef = useRef(onClose);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isMounted = useSyncExternalStore(noopSubscribe, getClientSnapshot, getServerSnapshot);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Keep <dialog> mounted and use showModal()/close() so the browser restores focus to the opener.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      onCloseRef.current();
    };
    dialog.addEventListener("close", handleClose);

    if (isOpen && !dialog.open) {
      dialog.showModal();
      closeButtonRef.current?.focus({ preventScroll: true });
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }

    return () => {
      dialog.removeEventListener("close", handleClose);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isMounted) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      className={cn(
        "fixed inset-0 z-100 m-0 h-auto max-h-none w-auto max-w-none border-0",
        "bg-black/70 p-4 text-inherit backdrop-blur-sm",
        "open:flex open:items-center open:justify-center",
      )}
      aria-labelledby="pdf-modal-title"
    >
      <button type="button" className="absolute inset-0 cursor-default" aria-label={closeText} onClick={onClose} />
      <div
        className={cn(
          "relative flex h-[calc(100dvh-2rem)] w-full max-w-4xl flex-col overflow-hidden rounded-2xl outline-none",
          "bg-white shadow-2xl dark:bg-slate-900",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between gap-4 border-b border-slate-200 bg-slate-50 px-4 py-3",
            "dark:border-slate-700 dark:bg-slate-800/50",
          )}
        >
          <h2
            id="pdf-modal-title"
            className={cn("flex-1 truncate text-sm font-semibold text-slate-900", "dark:text-slate-100")}
          >
            {title}
          </h2>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={pdfUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "pdf-modal-download inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium",
                "border-cyan-300/90 bg-cyan-100 text-cyan-900 shadow-sm transition-colors",
                "hover:border-cyan-400 hover:bg-cyan-200",
                "dark:border-cyan-700/50 dark:bg-cyan-900/40 dark:text-cyan-300",
                "dark:shadow-none dark:hover:border-cyan-600/60 dark:hover:bg-cyan-800/50",
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 " +
                    "12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  }
                />
              </svg>
              {downloadText}
            </a>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className={cn(
                "pdf-modal-close inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors",
                "cursor-pointer hover:bg-slate-200 hover:text-slate-900",
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
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-hidden">
          <iframe
            src={isOpen ? `${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1` : undefined}
            title={title}
            sandbox="allow-scripts allow-popups allow-downloads"
            className={cn(
              "h-full w-full border-0 outline-none",
              "focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-inset",
              "dark:focus-visible:ring-cyan-400",
            )}
          />
        </div>
      </div>
    </dialog>,
    document.body,
  );
}
