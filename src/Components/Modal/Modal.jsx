import React from 'react';
import styles from './Modal.module.css';
 
function Modal({ message, onConfirm, onCancel }) {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <p>{message}</p>
                <div className={`${styles.modalButtons} flexCenter`}>
                    <button className={`${styles.confirmButton} button`} onClick={onConfirm}>Yes</button>
                    <button className={`${styles.cancelButton}`} onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
 
export default Modal;