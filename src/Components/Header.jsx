import { Link } from "react-router-dom";
import Logo from "../Assets/logo95.svg?react";
import styles from "./Header.module.css";
import MenuHamburguer from "./MenuHamburguer/MenuHamburguer";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Logo - Home">
          <Logo />
        </Link>
        <div className={`${styles.navItems}`}>
          <Link className={`${styles.headerItem} navItem`} to="/sobre">
            Sobre
          </Link>
          <Link className={`${styles.headerItem} navItem`} to="/habilidade">
            Habilidades
          </Link>
          <Link className={`${styles.headerItem} navItem`} to="/projetos">
            Projetos
          </Link>
          <Link className={`${styles.headerItem} navItem`} to="/contato">
            Contato
          </Link>
        </div>
        <MenuHamburguer />
      </nav>
    </header>
  );
};

export default Header;
