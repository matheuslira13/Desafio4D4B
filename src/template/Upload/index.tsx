import React, { useState } from "react";
import styles from "./Upload.module.scss";
import { Typography, Icons, Button } from "../../components";
import { useTranslation } from "react-i18next";
import { useDropzone } from "react-dropzone";
import { ReactComponent as PDF } from "../../components/Icon/svgs/pdf.svg";
import { formatBrazilianDate, formatFileSize } from "../../utils/format";

const Upload = () => {
  const { t } = useTranslation();
  const [fileName, setFileName] = useState<any>(null);
  const [fileError, setFileError] = useState("");
  const [fileSucess, setSucess] = useState(false);
  const erraseStates = () => {
    setFileName(null);
    setSucess(false);
  };

  const maxSize = 10;

  const onDrop = async (acceptedFiles: any) => {
    const file = acceptedFiles?.[0];
    if (file) {
      if (file.size > maxSize * 1024 * 1024) {
        setFileName(file.name);
        setFileError("O arquivo é muito grande para upload.");
      } else {
        const fileData = {
          name: file.name,
          size: file.size,
          lastModified: file.lastModified,
        };
        setFileName(fileData);
        setSucess(true);
        const formData = new FormData();
        formData.append("file", file);
      }
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

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

      {fileSucess && (
        <div
          className={styles.containerForm}
          style={{ justifyContent: "space-between" }}
        >
          <div className={styles.wrapperError}>
            <PDF />

            <div className={styles.containerFileInfo}>
              <label className={styles.nameFilme}>{fileName?.name} </label>
              <label className={styles.sucessName}>{`${formatFileSize(
                fileName?.size
              )},${formatBrazilianDate(fileName?.lastModified)}`}</label>
            </div>
          </div>
          <div onClick={erraseStates} style={{ display: "flex" }}>
            <Icons name="error" height={22} width={22} color="error" />
            <div className={styles.wrapperIcon} style={{ rotate: "180deg" }}>
              <Icons name="up" height={11} width={11} color="secondary" />
            </div>
          </div>
        </div>
      )}

      {fileError && (
        <div
          className={styles.containerForm}
          style={{ borderColor: "#E8225F" }}
        >
          <div className={styles.wrapperError}>
            <PDF />
            <div className={styles.containerFileInfo}>
              <label className={styles.error}>{fileName?.name} </label>
              <label className={styles.errorMensager}>{fileError}</label>
            </div>
            <Icons height={22} width={22} name="repeat" color="secondary" />
          </div>
        </div>
      )}

      <div {...getRootProps()} className={styles.containerForm}>
        <input {...getInputProps()} accept="application/pdf" hidden />
        <div className={styles.containerDrop}>
          <div className={styles.containerTexts}>
            <p className={styles.title}>{t("upload.uploadTitle")}</p>
            <p className={styles.subTitle}>{t("upload.uploadSubTitle")}</p>
          </div>
          <div className={styles.wrapperIcon}>
            <Icons name="up" height={11} width={11} color="secondary" />
          </div>
        </div>
      </div>
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
