import styles from "./Upload.module.scss";
import { Typography, Icons, Button } from "../../components";
import { useTranslation } from "react-i18next";

const Upload = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container} data-testid="container-upload">
      <Typography
        size={18}
        color="secondary"
        fontWeight="bold"
        i18nPath="upload.title"
        orientation="left"
      />
      <div className={styles.divider} />

      <form
        action=""
        className={styles.containerForm}
        onClick={() => document.getElementById("file")?.click()}
      >
        <input id="file" type="file" accept="application/pdf" hidden />
        <div className={styles.containerDrop}>
          <div className={styles.containerTexts}>
            <p className={styles.title}>{t("upload.uploadTitle")}</p>
            <p className={styles.subTitle}>{t("upload.uploadSubTitle")}</p>
          </div>
          <div className={styles.wrapperIcon}>
            <Icons name="up" height={11} width={11} color="secondary" />
          </div>
        </div>
      </form>
      <div className={styles.separetor} />
      <div className={styles.wrapperButtons}>
        <Button
          i18nPath="upload.btn.firstBtn"
          type="fill"
          BGcolor="secondary"
          onClick={() => {}}
        />
        <Button
          i18nPath="upload.btn.secondBtn"
          type="empty"
          color="secondary"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Upload;
