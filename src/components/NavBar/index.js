import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css"; // Importa o módulo CSS para a Navbar

const NavBar = ({ isMenuOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className={styles.navBar} aria-label="Primary navigation">
      <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ""}`}>
        <li className={styles.navItem}>
          <Link
            to="/"
            className={`${styles.navLink} ${
              currentPath === "/" ? styles.active : ""
            }`}
            aria-current={currentPath === "/" ? "page" : undefined}
          >
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            to="/carlist"
            className={`${styles.navLink} ${
              currentPath === "/carlist" ? styles.active : ""
            }`}
            aria-current={currentPath === "/carlist" ? "page" : undefined}
          >
            Lista de Carros
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            to="/about"
            className={`${styles.navLink} ${
              currentPath === "/about" ? styles.active : ""
            }`}
            aria-current={currentPath === "/about" ? "page" : undefined}
          >
            Sobre Nós
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
