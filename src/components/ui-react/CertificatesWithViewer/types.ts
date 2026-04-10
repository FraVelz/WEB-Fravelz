export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year?: number;
  category: string;
  pdfPath?: string;
  shortDescription?: string;
}

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
}

