import React from "react";
import styles from "./Contato.module.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contato = () => {
  return (
    <div className={styles.contato_container}>
      <h1>Contato</h1>
      <form className={styles.contato_form}>
        <div className={styles.form_group}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className={styles.submit_button}>
          Enviar
        </button>
      </form>
      <div className={styles.contact_icons}>
        <a href="mailto:gabrielolivecos99@gmail.com">
          <FaEnvelope />
        </a>
        <a href="tel:+5561993070860">
          <FaPhone />
        </a>
        <a
          href="https://www.linkedin.com/in/devfullstackgabriieelcosta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Gabriieelcosta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Contato;
