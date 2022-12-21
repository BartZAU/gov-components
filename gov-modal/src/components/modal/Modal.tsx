import React, { useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: React.ReactNode;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose?: () => void;
};

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (closeButtonRef && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, []);

  if (!modalOpen) return null;

  return createPortal(
    <div role="dialog" className="modal">
      {children}
      <button
        type="button"
        onClick={() => setModalOpen(false)}
        ref={closeButtonRef}
      >
        close
      </button>
    </div>,
    document.body
  );
};

export default Modal;
