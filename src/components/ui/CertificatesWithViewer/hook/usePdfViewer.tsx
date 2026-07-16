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
    // Backup if native <dialog> focus restore does not run (e.g. unmount path).
    if (trigger) {
      window.setTimeout(() => {
        if (trigger.isConnected) trigger.focus({ preventScroll: true });
      }, 0);
    }
  }, []);

  return {
    modalState,
    openViewer,
    closeViewer,
  };
};
