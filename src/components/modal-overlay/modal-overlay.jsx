import React from 'react'
import styles from './modal-overlay.module.css'

export default function ModalOverlay ({ onClose, children }) {

    const closeModalOverlay = (e) => {
        if (e.target.classList.contains(styles.modalOverlay)) {
            onClose()
        }
    }

    return (
        <div className={styles.modalOverlay} onClick={closeModalOverlay}>
            {children}
        </div>
    )
}