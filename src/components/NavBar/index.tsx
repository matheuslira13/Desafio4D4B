import React from "react";
import styles from "./style.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.ul}>
        <li className={styles.past}>
          <span>1</span> Produtos
        </li>
        <li className={styles.current}>
          <span>2</span> Cliente
        </li>
        <li>
          <span>3</span> Anexar Arquivo
        </li>
        <li>
          <span>4</span> Pagamentos
        </li>
        <li>
          <span>5</span> Contrato
        </li>
      </ul>
    </nav>
  );
};
