import React, { useEffect } from "react";
import styles from "@styles/LevelUpModal.module.css";

interface ILevelUpModal {
  level: number;
  closeLevelUpModal: () => void;
}

const LevelUpModal = ({ level, closeLevelUpModal }: ILevelUpModal) => {
  useEffect(() => {}, [level]);
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header> {level} </header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/images/close.svg" alt="Fechar Modal" />
        </button>
      </div>
    </div>
  );
};

export { LevelUpModal };
