import React from "react";
import { useRouter } from "next/router";
import styles from "@styles/Card.module.css";
import { ICard } from "data/@types/CardInterface";

const Card = ({ background, operator, isActive, setNumbers }: ICard) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/studyroom?operator=${operator}`);
    setNumbers(operator);
  };
  return (
    <section>
      <div
        onClick={handleClick}
        className={`${styles.card} ${isActive && styles.active}`}
      >
        <div style={{ background: `${background}` }}>
          <i className={`fas fa-${operator}`}></i>
        </div>
        {operator == "minus" && <p>Subtração</p>}
        {operator == "plus" && <p>Adição</p>}
        {operator == "divide" && <p>Divisão</p>}
        {operator == "times" && <p>Multiplicação</p>}
      </div>
    </section>
  );
};

export { Card };
