import type { CertAccent, Certificate } from "../types";
import { cn } from "@/utils/cn";

type CertCardState = {
  cert: Certificate;
  borderClass: string;
  accent: CertAccent;
  openViewer: (pdfPath: string, title: string, trigger?: HTMLElement | null) => void;
  clickToViewText: string;
};

const actionTextClass: Record<CertAccent, string> = {
  cyan: "text-cyan-700 hover:text-cyan-800 dark:text-cyan-300 dark:hover:text-cyan-200",
  amber: "text-amber-800 hover:text-amber-900 dark:text-amber-300 dark:hover:text-amber-200",
  emerald: "text-emerald-800 hover:text-emerald-900 dark:text-emerald-300 dark:hover:text-emerald-200",
  slate: "text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100",
};

export const CertCard = ({ cert, borderClass, accent, openViewer, clickToViewText }: CertCardState) => (
  <article
    data-cert-accent={accent}
    className={cn(
      "cert-card flex flex-col gap-2 rounded-2xl border p-4 shadow-sm backdrop-blur-sm transition-[box-shadow,transform]",
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
        onClick={(e) => openViewer(cert.pdfPath!, cert.title, e.currentTarget)}
        className={cn(
          "cert-card-action mt-auto inline-flex w-fit cursor-pointer items-center gap-1 rounded-sm border-0 bg-transparent px-1 py-0.5 text-left",
          "text-xs font-medium outline-none transition-colors hover:underline hover:underline-offset-2",
          actionTextClass[accent],
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
