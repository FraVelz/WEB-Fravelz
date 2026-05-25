"use client";

import "./certificates.css";

import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

import PdfViewerModal from "@/components/ui/PdfViewerModal";
import { CertCard } from "./component/CertCard";

import type { CertAccent, Certificate, CertificatesWithViewerProps } from "./types";
import { usePdfViewer } from "./hook/usePdfViewer";

type CertGroupConfig = {
  certs: Certificate[];
  title: string;
  iconBg: string;
  icon: ReactNode;
  borderClass: string;
  accent: CertAccent;
};

function CertGroupSection({
  title,
  iconBg,
  icon,
  certs,
  borderClass,
  accent,
  clickToViewText,
  openViewer,
}: CertGroupConfig & {
  clickToViewText: string;
  openViewer: ReturnType<typeof usePdfViewer>["openViewer"];
}) {
  if (certs.length === 0) return null;

  return (
    <section className="space-y-4">
      <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-slate-50">
        <span className={cn("inline-flex h-7 w-7 items-center justify-center rounded-full", iconBg)}>{icon}</span>
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {certs.map((cert) => (
          <CertCard
            clickToViewText={clickToViewText}
            openViewer={openViewer}
            key={cert.id}
            cert={cert}
            borderClass={borderClass}
            accent={accent}
          />
        ))}
      </div>
    </section>
  );
}

const WEB_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-4 w-4"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25H12" />
  </svg>
);

const HIXEC_ICON = (
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
      d={
        "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 " +
        "5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-" +
        "3.196 0-6.1-1.248-8.25-3.285z"
      }
    />
  </svg>
);

const HACK4U_ICON = (
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
);

const OTHER_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-4 w-4"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

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

  const groups: CertGroupConfig[] = [
    {
      certs: webCerts,
      title: webTitle,
      iconBg: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-200",
      icon: WEB_ICON,
      borderClass: cn(
        "border-cyan-200/70 bg-white/90 dark:border-cyan-700/60 dark:bg-slate-900/80",
        "hover:border-cyan-400/80",
      ),
      accent: "cyan",
    },
    {
      certs: hixecCerts,
      title: hixecTitle,
      iconBg: "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-200",
      icon: HIXEC_ICON,
      borderClass: cn(
        "border-amber-200/70 bg-white/90 dark:border-amber-700/60 dark:bg-slate-900/80",
        "hover:border-amber-400/80",
      ),
      accent: "amber",
    },
    {
      certs: hack4uCerts,
      title: hack4uTitle,
      iconBg: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200",
      icon: HACK4U_ICON,
      borderClass: cn(
        "border-emerald-200/80 bg-white/90 dark:border-emerald-800/60 dark:bg-slate-900/80",
        "hover:border-emerald-400/80",
      ),
      accent: "emerald",
    },
    {
      certs: otherCerts,
      title: otherTitle,
      iconBg: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
      icon: OTHER_ICON,
      borderClass: cn(
        "border-slate-200/80 bg-white/90 dark:border-slate-700 dark:bg-slate-900/80",
        "hover:border-cyan-400/80",
      ),
      accent: "slate",
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      {groups.map((group) => (
        <CertGroupSection key={group.title} {...group} clickToViewText={clickToViewText} openViewer={openViewer} />
      ))}

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
