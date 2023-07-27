import styles from "./Upload.module.scss";
import { Typography } from "../../components";

const Upload = () => {
  return (
    <div className={styles.container}>
      <Typography
        size={18}
        color="secondary"
        fontWeight="bold"
        i18nPath="upload.title"
        orientation="left"
      />
      <div className={styles.divider} />
      <input type="file" accept="application/pdf" />
      Essa e a pagina de upload de arquivos
    </div>
  );
};

export default Upload;
