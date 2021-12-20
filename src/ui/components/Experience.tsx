import React, { useEffect } from "react";
import styles from "@styles/ExperienceBar.module.css";
import { IExperienceBar } from "data/@types/ExperienceInterface";

const ExperienceBar = ({
  currentExperience,
  experienceToNextLevel,
}: IExperienceBar) => {
  const percentToNextLevel =
    Math.round(Number(currentExperience) * 100) / Number(experienceToNextLevel);

  useEffect(() => {}, [currentExperience, experienceToNextLevel]);

  return (
    <section className={styles.experienceBar}>
      <span>0 px</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </section>
  );
};

export { ExperienceBar };
