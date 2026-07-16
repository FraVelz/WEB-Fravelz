import { useCallback, useRef, useState } from "react";

type ViewerState = {
  isOpen: boolean;
  pdfUrl: string;
  title: string;
};

export const usePdfViewer = () => {
  const triggerRef = useRef<HTMLElement | null>(null);
  const triggerIdRef = useRef<string | null>(null);
  const [modalState, setModalState] = useState<ViewerState>({
    isOpen: false,
    pdfUrl: "",
    title: "",
  });

  const openViewer = useCallback((pdfPath: string, title: string, trigger?: HTMLElement | null) => {
    triggerRef.current = trigger ?? null;
    triggerIdRef.current = trigger?.id || null;
    // Keep opener focused until showModal() records it for native restore.
    trigger?.focus({ preventScroll: true });
    setModalState({ isOpen: true, pdfUrl: pdfPath, title });
  }, []);

  const closeViewer = useCallback(() => {
    setModalState((s) => ({ ...s, isOpen: false }));
    const trigger = triggerRef.current;
    const triggerId = triggerIdRef.current;
    triggerRef.current = null;
    triggerIdRef.current = null;

    const restore = (attemptsLeft: number) => {
      const byRef = trigger?.isConnected ? trigger : null;
      const byId = triggerId ? document.getElementById(triggerId) : null;
      const el = byRef ?? byId;
      if (el) {
        el.focus({ preventScroll: true });
        if (document.activeElement === el || attemptsLeft <= 0) return;
      } else if (attemptsLeft <= 0) {
        return;
      }
      window.setTimeout(() => restore(attemptsLeft - 1), 16);
    };
    window.setTimeout(() => restore(12), 0);
  }, []);

  return {
    modalState,
    openViewer,
    closeViewer,
  };
};
