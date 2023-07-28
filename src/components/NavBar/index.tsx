import React, { useEffect } from "react";
import styles from "./style.module.scss";
import { useParams } from "react-router-dom";

export const Navbar = () => {
  const { id } = useParams();

  return (
    <nav className={styles.container}>
      <ul className={styles.ul}>
        <li className={styles.past}>
          <span>1</span> Produtos
        </li>
        {!id && (
          <li className={styles.current}>
            <span>2</span> Cliente
          </li>
        )}
        {id === "doc" && (
          <>
            <li className={styles.past}>
              <span>2</span> Cliente
            </li>
            <li className={styles.current}>
              <span>3</span> Anexar Arquivo
            </li>
          </>
        )}
        {!id && (
          <li>
            <span>3</span> Anexar Arquivo
          </li>
        )}

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
