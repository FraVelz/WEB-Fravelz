import { useState } from "react";
import PdfViewerModal from "./PdfViewerModal";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year?: number;
  category: string;
  pdfPath?: string;
  shortDescription?: string;
}

interface CertificatesWithViewerProps {
  webCerts: Certificate[];
  hixecCerts: Certificate[];
  savitarCerts: Certificate[];
  clickToViewText: string;
  closeText: string;
  downloadText: string;
  webTitle: string;
  hixecTitle: string;
  savitarTitle: string;
}

export default function CertificatesWithViewer({
  webCerts,
  hixecCerts,
  savitarCerts,
  clickToViewText,
  closeText,
  downloadText,
  webTitle,
  hixecTitle,
  savitarTitle,
}: CertificatesWithViewerProps) {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    pdfUrl: string;
    title: string;
  }>({ isOpen: false, pdfUrl: "", title: "" });

  const openViewer = (pdfPath: string, title: string) => {
    setModalState({ isOpen: true, pdfUrl: pdfPath, title });
  };

  const closeViewer = () => {
    setModalState((s) => ({ ...s, isOpen: false }));
  };

  const CertCard = ({
    cert,
    borderClass,
  }: {
    cert: Certificate;
    borderClass: string;
  }) => (
    <article
      className={`flex flex-col gap-2 rounded-2xl border p-4 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-lg ${borderClass}`}
    >
      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
        {cert.title}
      </h3>
      <p className="text-xs text-slate-600 dark:text-slate-400">
        {cert.issuer}
        {cert.year && <> · {cert.year}</>}
      </p>
      {cert.shortDescription && (
        <p className="text-xs text-slate-600 dark:text-slate-300">
          {cert.shortDescription}
        </p>
      )}
      {cert.pdfPath && (
        <button
          type="button"
          onClick={() => openViewer(cert.pdfPath!, cert.title)}
          className="mt-auto inline-flex cursor-pointer items-center gap-1 border-0 bg-transparent p-0 text-left text-xs text-cyan-700 hover:underline dark:text-cyan-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-3.5 w-3.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m0 0-6.75-6.75M12 19.5 18.75 12.75"
            />
          </svg>
          {clickToViewText}
        </button>
      )}
    </article>
  );

  return (
    <>
      {webCerts.length > 0 && (
        <section className="space-y-4">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-slate-50">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-200">
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
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-200">
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
                key={cert.id}
                cert={cert}
                borderClass="border-amber-200/70 dark:border-amber-700/60 bg-white/90 dark:bg-slate-900/80 hover:border-amber-400/80"
              />
            ))}
          </div>
        </section>
      )}

      {savitarCerts.length > 0 && (
        <section className="space-y-4">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-slate-50">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
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
            {savitarTitle}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {savitarCerts.map((cert) => (
              <CertCard
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
    </>
  );
}
