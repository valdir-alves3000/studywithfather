import React from "react";
import styles from "@styles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <p>
          &copy; copyright @ 2021 by <span>valdir alves</span>
        </p>
      </div>
    </div>
  );
};

export { Footer };
