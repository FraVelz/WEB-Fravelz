import { useCallback, useRef, useState } from "react";

type ViewerState = {
  isOpen: boolean;
  pdfUrl: string;
  title: string;
};

export const usePdfViewer = () => {
  const triggerRef = useRef<HTMLElement | null>(null);
  const [modalState, setModalState] = useState<ViewerState>({
    isOpen: false,
    pdfUrl: "",
    title: "",
  });

  const openViewer = useCallback((pdfPath: string, title: string, trigger?: HTMLElement | null) => {
    triggerRef.current = trigger ?? null;
    setModalState({ isOpen: true, pdfUrl: pdfPath, title });
  }, []);

  const closeViewer = useCallback(() => {
    setModalState((s) => ({ ...s, isOpen: false }));
    const trigger = triggerRef.current;
    triggerRef.current = null;
    if (trigger?.isConnected) {
      trigger.focus({ preventScroll: true });
    }
  }, []);

  return {
    modalState,
    openViewer,
    closeViewer,
  };
};
