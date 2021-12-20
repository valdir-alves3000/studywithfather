import React, { useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import { ExperienceBar } from "ui/components/Experience";
import Layout from "ui/components/Layout/Layout";

import styles from "@styles/StudyRoom.module.css";
import { Card } from "ui/components/Card";
import { Profile } from "ui/components/Profile";
import { ChallengeBox } from "ui/components/ChallengeBox";
import { useChallenges } from "@hooks/challenges/useChallenges";
import { LevelUpModal } from "ui/components/LevelUpModal";

const StudyRoom = () => {
  const router = useRouter();
  const isActiveOperator = router.query.operator as string;
  const {
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
  } = useChallenges();

  useEffect(() => {}, [primayNumber, secundaryNumber, isActiveOperator]);

  return (
    <Layout>
      <section>
        <ExperienceBar
          currentExperience={currentExperience}
          experienceToNextLevel={experienceToNextLevel}
        />
        <div className={styles.room}>
          <div>
            <Profile level={level} />
            <div className={styles.cardBox}>
              <Card
                background="#59c7e0"
                operator="minus"
                isActive={isActiveOperator == "minus" && true}
                setNumbers={setNumbers}
              />
              <Card
                background="#65ad5b"
                operator="plus"
                isActive={isActiveOperator == "plus" && true}
                setNumbers={setNumbers}
              />
              <Card
                background="#f29c35"
                operator="divide"
                isActive={isActiveOperator == "divide" && true}
                setNumbers={setNumbers}
              />
              <Card
                background="#da3a66"
                operator="times"
                isActive={isActiveOperator == "times" && true}
                setNumbers={setNumbers}
              />
            </div>
          </div>
          <ChallengeBox
            operator={isActiveOperator}
            amount={amount}
            primayNumber={primayNumber}
            secundaryNumber={secundaryNumber}
            calculate={calculate}
            result={result}
            erro={erro}
            setNumbers={setNumbers}
            resultText={resultText}
          />
        </div>
      </section>
      {isLevelUpModalOpen && (
        <LevelUpModal level={level} closeLevelUpModal={closeLevelUpModal} />
      )}
    </Layout>
  );
};

export default StudyRoom;
