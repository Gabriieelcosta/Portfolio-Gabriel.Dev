import React from "react";
import { useEffect } from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>


      <div className={styles.container}>
        <div className={styles.text}>
          <p>Seja Bem-Vindo(a), me chamo</p>
          <h1 className={styles.name}>GABRIEL OLIVEIRA</h1>
          <p className={styles.name2}>Desenvolvedor Full-Stack.</p>
          <div className={styles.presentation}>
            <a href="./GabrielOliveira_Dev_CV.pdf" download>
              <button>Downloand CV</button>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.avatar}>
        <a href="https://github.com/Gabriieelcosta" target="_blank">
          <img src="../Assets/foto_gabs.jpg" alt="Gabriel Oliveira - Foto" />
        </a>
      </div>
    </div>
  );
};

export default Home;
