import React, { useContext, useEffect } from "react";
import styles from "@styles/Profile.module.css";
import { IProfile } from "data/@types/ProfileInterface";

const Profile = ({ level }: IProfile) => {
  return (
    <section className={styles.profileContainer}>
      <img src="images/user.svg" alt="User" />

      <div>
        <p>
          <img src="images/level.svg" alt="Level" />
          Level {` ${level}`}
        </p>
      </div>
    </section>
  );
};

export { Profile };
