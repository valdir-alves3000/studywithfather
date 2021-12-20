import React, { useState } from "react";
import styles from "@styles/ChallengeBox.module.css";
import { IChallengeBox } from "data/@types/ChallengeBoxInterface";

const ChallengeBox = ({
  operator,
  amount,
  primayNumber,
  secundaryNumber,
  calculate,
  erro,
  result,
  setNumbers,
  resultText,
}: IChallengeBox) => {
  const [answer, setAnswer] = useState("");
  const [answerText, setAnswerText] = useState("");

  const [AnswerEmpty, setAnswerEmpty] = useState(false);
  const handleClick = () => {
    if (answer == "") return setAnswerEmpty(true);
    calculate(operator, Number(answer));
    setAnswerText(answer);
    setAnswer("");
    setAnswerEmpty(false);
  };
  return (
    <section className={styles.challengeBoxContainer}>
      <div className={styles.challengeActive}>
        <header>Ganhe {amount} xp</header>

        <main>
          <strong>Novo desafio</strong>
          <p>Qual o valor da Operação?</p>
          <div className={styles.oparation}>
            <h3> {primayNumber} </h3>
            <i className={`fas fa-${operator}`} />

            <h3> {secundaryNumber} </h3>
            <h3>
              {result ? (
                resultText
              ) : (
                <input
                  type="number"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Digite"
                />
              )}
            </h3>
          </div>

          {result && (
            <p>
              Você respondeu <span>{answerText}</span>.{" "}
              {erro ? "Errou" : "Acertou"}.
            </p>
          )}
          {result ? (
            <button
              onClick={() => {
                setNumbers(operator);
                setAnswerEmpty(false);
              }}
              className="btn"
            >
              Tentar outra vez
            </button>
          ) : (
            <>
              {AnswerEmpty && (
                <p style={{ color: "var(--erro)" }}>
                  Você precisa dar uma resposta para continuar
                </p>
              )}
              <div>
                <button
                  onClick={() => {
                    setNumbers(operator);
                    setAnswerEmpty(false);
                  }}
                  className="btn"
                >
                  Pular
                </button>
                <button className="btn" onClick={handleClick}>
                  Responder
                </button>
              </div>
            </>
          )}
        </main>
      </div>
    </section>
  );
};

export { ChallengeBox };
