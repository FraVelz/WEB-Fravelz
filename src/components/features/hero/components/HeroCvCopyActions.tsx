"use client";

import CopyEmailButton from "@/components/ui-react/CopyEmailButton";
import { usePdfViewer } from "@/components/ui-react/CertificatesWithViewer/hook/usePdfViewer";
import PdfViewerModal from "@/components/ui-react/PdfViewerModal";
import { cn } from "@/utils/cn";

const CV_PDF_PATH = `/pdfs/${encodeURIComponent("CV - ATS Harvard.pdf")}`;

type HeroCvCopyActionsProps = {
  email: string;
  copySuccessText: string;
  cvButtonText: string;
  cvModalTitle: string;
  closeText: string;
  downloadText: string;
};

export default function HeroCvCopyActions({
  email,
  copySuccessText,
  cvButtonText,
  cvModalTitle,
  closeText,
  downloadText,
}: HeroCvCopyActionsProps) {
  const { modalState, openViewer, closeViewer } = usePdfViewer();

  return (
    <>
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
        <CopyEmailButton email={email} successText={copySuccessText} variant="solid" />
        <button
          type="button"
          onClick={() => openViewer(CV_PDF_PATH, cvModalTitle)}
          className={cn(
            "group inline-flex min-h-[2.625rem] cursor-pointer items-center justify-center gap-2 rounded-lg px-3.5 text-sm font-semibold",
            "sm:px-4",
            "border-2 border-slate-200/90 bg-white/95 text-slate-800 shadow-sm backdrop-blur-sm",
            "ring-1 ring-slate-900/[0.05] transition-all",
            "hover:border-cyan-400/70 hover:bg-white hover:text-cyan-900 hover:shadow-md hover:ring-cyan-500/20",
            "active:scale-[0.99]",
            "dark:border-slate-500/80 dark:bg-slate-800/90 dark:text-slate-100 dark:shadow-lg dark:shadow-black/20",
            "dark:ring-white/[0.08]",
            "dark:hover:border-cyan-400/55 dark:hover:bg-slate-800 dark:hover:text-cyan-100 dark:hover:shadow-cyan-950/20",
            "focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:outline-none",
            "focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950",
          )}
          data-i18n="hero_cv_button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="size-5 shrink-0 text-cyan-600 transition-colors group-hover:text-cyan-800 dark:text-cyan-400 dark:group-hover:text-cyan-200"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v2.25A2.25 2.25 0 0 1 17.25 18.75h-10.5A2.25 2.25 0 0 1 4.5 16.5v-2.25M12 13.5 12 4.5m0 9-3 3m3-3 3 3M3.375 18.75h17.25"
            />
          </svg>
          {cvButtonText}
        </button>
      </div>
      <PdfViewerModal
        isOpen={modalState.isOpen}
        onClose={closeViewer}
        pdfUrl={modalState.pdfUrl}
        title={modalState.title}
        closeText={closeText}
        downloadText={downloadText}
      />
    </>
  );
}
