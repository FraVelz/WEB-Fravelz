import { cn } from "@/utils/cn";
import PdfViewerModal from "../PdfViewerModal";

import { CertCard } from "./component/CertCard";
import type { CertificatesWithViewerProps } from "./types";
import { usePdfViewer } from "./hook/usePdfViewer";

export default function CertificatesWithViewer({
  webCerts,
  hixecCerts,
  hack4uCerts,
  otherCerts,
  clickToViewText,
  closeText,
  downloadText,
  webTitle,
  hixecTitle,
  hack4uTitle,
  otherTitle,
}: CertificatesWithViewerProps) {
  const { modalState, openViewer, closeViewer } = usePdfViewer();

  return (
    <div className="flex flex-col gap-10">
      {webCerts.length > 0 && (
        <section className="space-y-4">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-slate-50">
            <span
              className={cn(
                "inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-cyan-700",
                "dark:bg-cyan-900/50 dark:text-cyan-200",
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
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25H12"
                />
              </svg>
            </span>
            {webTitle}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {webCerts.map((cert) => (
              <CertCard
                clickToViewText={clickToViewText}
                openViewer={openViewer}
                key={cert.id}
                cert={cert}
                borderClass="border-cyan-200/70 dark:border-cyan-700/60 bg-white/90 dark:bg-slate-900/80 hover:border-cyan-400/80"
              />
            ))}
          </div>
        </section>
      )}

      {hixecCerts.length > 0 && (
        <section className="space-y-4">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-slate-50">
            <span
              className={cn(
                "inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-amber-700",
                "dark:bg-amber-900/50 dark:text-amber-200",
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
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </span>
            {hixecTitle}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {hixecCerts.map((cert) => (
              <CertCard
                clickToViewText={clickToViewText}
                openViewer={openViewer}
                key={cert.id}
                cert={cert}
                borderClass="border-amber-200/70 dark:border-amber-700/60 bg-white/90 dark:bg-slate-900/80 hover:border-amber-400/80"
              />
            ))}
          </div>
        </section>
      )}

      {hack4uCerts.length > 0 && (
        <section className="space-y-4">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-slate-50">
            <span
              className={cn(
                "inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-800",
                "dark:bg-emerald-900/50 dark:text-emerald-200",
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
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            {hack4uTitle}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {hack4uCerts.map((cert) => (
              <CertCard
                clickToViewText={clickToViewText}
                openViewer={openViewer}
                key={cert.id}
                cert={cert}
                borderClass="border-emerald-200/80 dark:border-emerald-800/60 bg-white/90 dark:bg-slate-900/80 hover:border-emerald-400/80"
              />
            ))}
          </div>
        </section>
      )}

      {otherCerts.length > 0 && (
        <section className="space-y-4">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-slate-50">
            <span
              className={cn(
                "inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-700",
                "dark:bg-slate-800 dark:text-slate-200",
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </span>
            {otherTitle}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {otherCerts.map((cert) => (
              <CertCard
                clickToViewText={clickToViewText}
                openViewer={openViewer}
                key={cert.id}
                cert={cert}
                borderClass="border-slate-200/80 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 hover:border-cyan-400/80"
              />
            ))}
          </div>
        </section>
      )}

      <PdfViewerModal
        isOpen={modalState.isOpen}
        onClose={closeViewer}
        pdfUrl={modalState.pdfUrl}
        title={modalState.title}
        closeText={closeText}
        downloadText={downloadText}
      />
    </div>
  );
}
