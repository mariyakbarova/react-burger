import React from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";

export default function Modal({ children, onClose, title }) {
  React.useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [])

  return createPortal((
    <>
      <ModalOverlay onClose={onClose} />
        <div className={`${styles.modalPopup} pt-10`}>
            <h2 className={`${styles.titleCard} text text_type_main-large ml-10`}>{title}</h2>
          <button
            className={`${styles.modalExit}`}
            onClick={onClose}
          >
            <CloseIcon type="primary" />
          </button>
          {children}
        </div>
    </>),
    document.getElementById('modals'));
}

