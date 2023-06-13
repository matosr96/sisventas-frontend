import React from "react";
import styles from "./Modal.module.css";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ isOpen, setIsOpen, title, children }: Props) => {
  const handleCloseModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? styles.openModal : styles.closeModal}>
      <div className={styles.modal}>
        <div className={styles.header_modal}>
          <h3>{title}</h3>
          <button onClick={handleCloseModal}>X</button>
        </div>
        <div className={styles.body_modal}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;