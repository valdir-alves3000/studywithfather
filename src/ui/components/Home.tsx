import React from "react";
import styles from "@styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.content}>
        <h3>Vamos Calcular?</h3>
        <p>
          Temos operações simples que conta com o minímo de esforço para
          responder.
        </p>
        <p>
          <b> Escolha a operação</b> e venha aprender com a gente.
        </p>
      </div>
    </section>
  );
};

export { Home };
