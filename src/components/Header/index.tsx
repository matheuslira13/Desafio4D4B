import styles from "./styles.module.scss";
import { Icons } from "../Icon";

export const Header = () => {
  return (
    <header className={styles.container}>
      <img
        src="/logo.png"
        srcSet="/logo@2x.png 2x, /logo@3x.png 3x"
        alt="Logo"
      />

      <div className={styles.containerIcons}>
        <div className={styles.wrapperIcon}>
          <Icons name="bell" height={19.5} width={16} color="secondary" />
        </div>
        <div className={styles.wrapperIcon}>
          <Icons name="profile" height={19.5} width={16} color="secondary" />
        </div>
      </div>
    </header>
  );
};
