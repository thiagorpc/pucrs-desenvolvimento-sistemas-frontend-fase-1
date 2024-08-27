import React, { useState } from "react";
import NavBar from "./../NavBar"; // Importa o componente NavBar
import styles from "./Header.module.css"; // Importa o módulo CSS para o Header

const Header = ({ appName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1>{appName}</h1>
        <div
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
        </div>
      </div>
      <NavBar isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
