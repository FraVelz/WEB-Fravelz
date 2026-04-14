import type { Certificate } from "../types";
import { cn } from "@/utils/cn";

type CertCardState = {
  cert: Certificate;
  borderClass: string;
  openViewer: (pdfPath: string, title: string) => void;
  clickToViewText: string;
};

export const CertCard = ({ cert, borderClass, openViewer, clickToViewText }: CertCardState) => (
  <article
    className={cn(
      "flex flex-col gap-2 rounded-2xl border p-4 shadow-sm backdrop-blur-sm transition-all",
      "hover:-translate-y-0.5 hover:shadow-lg",
      borderClass,
    )}
  >
    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">{cert.title}</h3>
    <p className="text-xs text-slate-600 dark:text-slate-400">
      {cert.issuer}
      {cert.year && <> · {cert.year}</>}
    </p>
    {cert.shortDescription && <p className="text-xs text-slate-600 dark:text-slate-300">{cert.shortDescription}</p>}
    {cert.pdfPath && (
      <button
        type="button"
        onClick={() => openViewer(cert.pdfPath!, cert.title)}
        className={cn(
          "mt-auto inline-flex cursor-pointer items-center gap-1 border-0 bg-transparent p-0 text-left",
          "text-xs text-cyan-700 hover:underline dark:text-cyan-300",
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-3.5 w-3.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0-6.75-6.75M12 19.5 18.75 12.75" />
        </svg>
        {clickToViewText}
      </button>
    )}
  </article>
);
