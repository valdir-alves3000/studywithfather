import React from "react";
import styles from "@styles/Book.module.css";
import { useRouter } from "next/router";
import { BookInterface } from "data/@types/BookInterface";

const Book = ({ operator }: BookInterface) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/studyroom?operator=${operator}`);
  };
  return (
    <div className={styles.box} onClick={handleClick}>
      <h3>
        Vamos começar
        {operator == "minus" && <span> Subtração</span>}
        {operator == "plus" && <span> Adição</span>}
        {operator == "divide" && <span> Divisão</span>}
        {operator == "times" && <span> Multiplicação</span>}
      </h3>
      <div className={styles.book}>
        <div className={`fas fa-${operator}  ${styles.cover}`} />
      </div>
    </div>
  );
};

export { Book };
