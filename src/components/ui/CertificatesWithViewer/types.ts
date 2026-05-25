import type { Certificate } from "@/utils/data/certificates";

export type { Certificate };
export type CertAccent = "cyan" | "amber" | "emerald" | "slate";

export type CertificatesWithViewerProps = {
  webCerts: Certificate[];
  hixecCerts: Certificate[];
  hack4uCerts: Certificate[];
  otherCerts: Certificate[];
  clickToViewText: string;
  closeText: string;
  downloadText: string;
  webTitle: string;
  hixecTitle: string;
  hack4uTitle: string;
  otherTitle: string;
};
