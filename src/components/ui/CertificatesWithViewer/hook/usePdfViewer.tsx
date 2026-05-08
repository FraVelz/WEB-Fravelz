import { useState } from "react";

type ViewerState = {
  isOpen: boolean;
  pdfUrl: string;
  title: string;
};

export const usePdfViewer = () => {
  const [modalState, setModalState] = useState<ViewerState>({
    isOpen: false,
    pdfUrl: "",
    title: "",
  });

  const openViewer = (pdfPath: string, title: string) => {
    setModalState({ isOpen: true, pdfUrl: pdfPath, title });
  };

  const closeViewer = () => {
    setModalState((s) => ({ ...s, isOpen: false }));
  };

  return {
    modalState,
    openViewer,
    closeViewer,
  };
};
