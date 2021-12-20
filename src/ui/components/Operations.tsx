import React from "react";
import styles from "@styles/Operations.module.css";
import { Book } from "ui/components/Book";

const Operations: React.FC = () => {
  return (
    <section className={styles.operation} id="operation">
      <h2>Escolha o início da sua jornada</h2>
      <div className={styles.operationBox}>
        <div className={styles.box}>
          <Book operator="minus" />
        </div>
        <div className={styles.box}>
          <Book operator="plus" />
        </div>
        <div className={styles.box}>
          <Book operator="divide" />
        </div>
        <div className={styles.box}>
          <Book operator="times" />
        </div>
      </div>
    </section>
  );
};

export { Operations };
