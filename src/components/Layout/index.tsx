import React from "react";
import styles from "./style.module.scss";
import { Typography } from "../Typography";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container} data-testid="layout-container">
      <aside className={styles.leftBlock}></aside>
      <section className={styles.mainContainer}>
        <div className={styles.rightBlock}>
          <div className={styles.titleContainer}>
            <Typography
              i18nPath="home.title"
              size={16}
              color="secondary"
              fontWeight="bold"
            />
            <Typography
              i18nPath="home.subTitle"
              size={20}
              color="primary"
              fontWeight="bold"
            />
          </div>

          <div className={styles.wrapperSpace}></div>
          {children}
        </div>
      </section>
    </div>
  );
};

export default Layout;
