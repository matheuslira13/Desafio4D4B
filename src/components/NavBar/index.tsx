import React, { Fragment } from "react";
import styles from "./style.module.scss";

interface NavbarProps {
  route: number;
}
export const Navbar = ({ route }: NavbarProps) => {
  const navBarOptions = [
    {
      info: "Produtos",
      currentState: false,
      pastState: false,
      normalState: false,
    },
    {
      info: "Cliente",
      currentState: false,
      pastState: false,
      normalState: false,
    },
    {
      info: "Anexar Arquivo",
      currentState: false,
      pastState: false,
      normalState: false,
    },
    {
      info: "Pagamentos",
      currentState: false,
      pastState: false,
      normalState: false,
    },
    {
      info: "Contrato",
      currentState: false,
      pastState: false,
      normalState: false,
    },
  ];
  for (let count = 0; count < navBarOptions.length; count++) {
    if (route - 1 === count) {
      navBarOptions[count].currentState = true;
    } else if (route > count) {
      navBarOptions[count].pastState = true;
    } else {
      navBarOptions[count].normalState = true;
    }
  }

  return (
    <nav className={styles.container}>
      <ul className={styles.ul}>
        {navBarOptions.map((item, index) => {
          return (
            <Fragment key={index}>
              {item.pastState && (
                <li className={styles.past}>
                  <span>{route}</span>
                  {item.info}
                </li>
              )}
              {item.currentState && (
                <li className={styles.current}>
                  <span>{route}</span>
                  {item.info}
                </li>
              )}
              {item.normalState && (
                <li>
                  <span>{route}</span>
                  {item.info}
                </li>
              )}
            </Fragment>
          );
        })}
      </ul>
    </nav>
  );
};
