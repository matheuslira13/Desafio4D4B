import React, { Fragment, useState } from "react";
import styles from "./Upload.module.scss";
import { Typography, Icons, Button, Navbar } from "../../components";
import {
  UploadFile,
  FileInfoDetails,
  UploadFileProps,
} from "../../components/UploadFiles";

import { useTranslation } from "react-i18next";
import { useDropzone } from "react-dropzone";
import { ReactComponent as PDF } from "../../components/Icon/svgs/pdf.svg";
import { formatBrazilianDate, formatFileSize } from "../../utils/format";
import { t } from "i18next";

const Upload = () => {
  const maxSize = 10;
  const [file, setFile] = useState<FileInfoDetails[]>([]);

  const onDropAccepted = (files: FileInfoDetails[]) => {
    const uploadedFiles = files.map((file: FileInfoDetails) => ({
      file,
      id: file.name,
      name: file.name,
      size: file.size,
      progress: 0,
      uploaded: false,
      error: parseInt(file.size, 10) > maxSize * 1024 * 1024,
    }));

    setFile(uploadedFiles.concat(uploadedFiles));
  };
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      //@ts-ignore
      accept: "application/pdf",
      //@ts-ignore
      onDropAccepted,
    });

  return (
    <Fragment>
      <Navbar />
      <div className={styles.container} data-testid="container-upload">
        <Typography
          size={18}
          color="secondary"
          fontWeight="bold"
          i18nPath="upload.title"
          orientation="left"
        />
        <div className={styles.divider} />

        {!!file.length && (
          <UploadFile
            //@ts-ignore
            files={file}
            erase={setFile}
          />
        )}
        <div
          className={`${styles.containerForm} ${
            isDragActive && styles.sucess
          } ${isDragReject && styles.errorr}`}
          {...getRootProps()}
        >
          <div className={styles.containerDrop}>
            <div className={styles.containerTexts}>
              <p className={styles.title}>{t("upload.uploadTitle")}</p>
              <p className={styles.subTitle}>{t("upload.uploadSubTitle")}</p>
            </div>
          </div>
          <div style={{ display: "flex", flex: 1 }}>
            <Icons name="upCircle" height={22} width={22} color="secondary" />
          </div>
          <input {...getInputProps()} />
        </div>
        <div className={styles.separetor} />
        <div className={styles.wrapperButtons}>
          <Button
            i18nPath="upload.btn.firstBtn"
            type="fill"
            BGcolor="primary"
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
    </Fragment>
  );
};

export default Upload;
