import React, { useEffect } from "react";
import { createPortal } from 'react-dom';
import styles from './modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from "../modal-overlay/modal-overlay";

export default function Modal ({children, onClose}) {

    useEffect(() => {
        function onKeyDown(e) {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('keydown', onKeyDown)

        return () => {
            document.removeEventListener('keydown', onKeyDown)
        }
    }, [])

    return createPortal (
        <>
        <ModalOverlay onClose={onClose}>
            <div className="modalPopup">
        <button className={`${styles.modalExit} mt-15 mr-10`} onClick={onClose}>
        <CloseIcon type="primary" />
        </button>
        {children}
        </div>
        </ModalOverlay>
        </>, 
        document.getElementById('modals')
    )
}