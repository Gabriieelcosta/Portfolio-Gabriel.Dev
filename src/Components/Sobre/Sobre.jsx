import React from "react";
import styles from "./Sobre.module.css";

const Sobre = () => {
  return (
    <div>
      <div className={styles.sobre_container}>
        <h1>Sobre mim</h1>

        <p className={styles.sobre_text}>
          Desenvolvedor Full-Stack
          apaixonado por tecnologia e sempre em busca de aprendizado. Minha
          trajetória começou na faculdade de Análise e Desenvolvimento de
          Sistemas (2022), e desde então venho me dedicando ao estudo e à
          prática no desenvolvimento de software. Durante meu estágio no SENAC,
          trabalhei na manutenção e evolução de sistemas internos, desenvolvendo
          novas funcionalidades e otimizando processos. Um dos desafios mais
          marcantes foi a criação de um CRUD para bloqueio de equipamentos no
          sistema i9 (antigo CEE), onde precisei lidar com AJAX, Vue.js, PHP,
          Laravel e Mysql, além de refatorar código para melhorar a performance e
          organização do projeto. Também tive a oportunidade de trabalhar com
          Scrum, o que me ajudou bastante na comunicação com a equipe e no
          entendimento do fluxo de trabalho ágil. Minhas principais habilidades
          incluem PHP, Laravel, Vue.js, JavaScript, TypeScript, React, MySQL, Java e React-Native. Atualmente, estou focado em aprimorar minhas
          habilidades em React, React Native e inglês, buscando sempre evoluir
          como profissional.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
