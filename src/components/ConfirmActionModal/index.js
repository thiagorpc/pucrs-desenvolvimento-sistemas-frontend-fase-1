import React from "react";
import styles from "./ConfirmActionModal.module.css";

const ConfirmActionModal = ({
  isOpen,
  onClose,
  onConfirm,
  titulo,
  mensagem,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{titulo}</h2>
        <p>{mensagem}</p>
        <div className={styles.modalActions}>
          <button onClick={onConfirm} className={styles.confirmButton}>
            Sim, Confirmar
          </button>
          <button onClick={onClose} className={styles.cancelButton}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmActionModal;
