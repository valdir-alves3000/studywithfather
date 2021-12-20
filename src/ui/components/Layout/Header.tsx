import React, { useEffect } from "react";
import styles from "@styles/Header.module.css";
import Link from "next/link";
import { HeaderInterface } from "data/@types/HeaderInterface";

const Header = ({
  dark,
  handleSetDark,
  isActive,
  handleCloseMenu,
  handleOpenMenu,
}: HeaderInterface) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src={dark ? "./images/logo-dark.png" : "./images/logo.png"}
          alt="logo"
        />
        <h2>Estude com o pai</h2>
      </div>

      <div className={styles.icons}>
        <div
          className={dark ? "fas fa-sun" : "fas fa-moon"}
          id="menu-btn"
          onClick={() => {
            handleSetDark();
            handleCloseMenu();
          }}
        />
        <div className="fas fa-bars" id="menu-btn" onClick={handleOpenMenu} />
      </div>

      <nav
        onClick={handleCloseMenu}
        className={
          isActive ? `${styles.navbar} ${styles.active}` : `${styles.navbar}`
        }
      >
        <Link href="/#home">Home</Link>
        <Link href="/#operation">Operações</Link>
      </nav>
    </header>
  );
};

export { Header };
