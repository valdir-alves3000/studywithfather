import { useState } from "react";
import Cookies from "js-cookie";

function useChallenges() {
  const [level, setLevel] = useState(Number(Cookies.get("level") ?? 1));
  const [currentExperience, setCurrentExperience] = useState(
    Number(Cookies.get("currentExperience") ?? 0)
  );

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const [amount, setAmount] = useState(35);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  const [erro, setErro] = useState(false);
  const [result, setResult] = useState(false);
  const [resultText, setResultText] = useState(0);

  function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const [primayNumber, setPrimaryNumber] = useState(randomNumber(10, 170));
  const [secundaryNumber, setSecundaryNumber] = useState(
    randomNumber(10, primayNumber)
  );

  function levelUp() {
    Cookies.set("level", String(level + 1));
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function setNumbers(operator: string) {
    let newPrimaryNumber = randomNumber(10, experienceToNextLevel);
    let newSecundaryNumber = randomNumber(10, primayNumber);

    setAmount(55 * level);
    setResult(false);
    setErro(false);

    if (operator == "divide") {
      let dividers = [];

      for (let i = 2; i <= newPrimaryNumber; i++) {
        if (newPrimaryNumber % i == 0) {
          dividers.push(i);
        }
      }
      const divider = randomNumber(0, dividers.length - 1);

      setPrimaryNumber(newPrimaryNumber);
      setSecundaryNumber(dividers[divider]);
      return;
    }

    if (operator == "times") {
      setSecundaryNumber(randomNumber(2, 15));
      setPrimaryNumber(newPrimaryNumber);
      return;
    }

    setPrimaryNumber(newPrimaryNumber);
    setSecundaryNumber(newSecundaryNumber);
    (operator == "plus" || operator == "minus") && setAmount(35 * level);
  }

  function operationsChallenges(answer: number, operator: string) {
    let newResult = primayNumber + secundaryNumber;

    operator == "+" && (newResult = primayNumber + secundaryNumber);
    operator == "-" && (newResult = primayNumber - secundaryNumber);
    operator == "*" && (newResult = primayNumber * secundaryNumber);
    operator == "/" && (newResult = primayNumber / secundaryNumber);

    if (newResult == answer) {
      setErro(false);
      setExperience();
    } else {
      setErro(true);
    }
    setResult(true);
    setResultText(newResult);
  }

  function calculate(operator: string, answer: number) {
    operator == "plus" && operationsChallenges(answer, "+");
    operator == "minus" && operationsChallenges(answer, "-");
    operator == "times" && operationsChallenges(answer, "*");
    operator == "divide" && operationsChallenges(answer, "/");
  }

  function setExperience() {
    let finalExperience = currentExperience + amount;
    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);

    Cookies.set("currentExperience", String(currentExperience));
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  return {
    level,
    currentExperience,
    experienceToNextLevel,
    amount,
    primayNumber,
    secundaryNumber,
    erro,
    result,
    calculate,
    setNumbers,
    resultText,
    closeLevelUpModal,
    isLevelUpModalOpen,
  };
}

export { useChallenges };
