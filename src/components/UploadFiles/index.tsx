import React, { SetStateAction, useState } from "react";
import styles from "./styles.module.scss";
import { ReactComponent as PDF } from "../../components/Icon/svgs/pdf.svg";
import { Icons } from "../../components/Icon";
import { useTranslation } from "react-i18next";
import { formatBrazilianDate, formatFileSize } from "../../utils/format";
import Modal from "react-modal";
import { Typography } from "../Typography";
import { Button } from "../Button";

export type FileInfoDetails = {
  id: string;
  name: string;
  size: string;
  progress: number;
  uploaded: boolean;
  error: boolean;
};

export type UploadFileProps = {
  files: [FileInfoDetails];
  erase: React.Dispatch<React.SetStateAction<FileInfoDetails[]>>;
};

export const UploadFile = ({ files, erase }: UploadFileProps) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const eraseData = () => {
    setOpenModal(false);
    //erase(null as unknown as SetStateAction<FileInfoDetails[]>); fazer depois uma exclusão de estado
  };
  const { t } = useTranslation();
  if (files[0]?.error) {
    return (
      <div className={`${styles.containerForm} ${styles.borderError}`}>
        <div className={styles.wrapper}>
          <PDF />
          <div className={styles.containerFileInfo}>
            <label className={styles.errorFileName}>{files[0]?.name} </label>
            <label className={styles.errorMensager}>
              <Icons name="cancel" height={12} width={12} color="error" />
              {t("upload.component.errorMensage")}
            </label>
          </div>
        </div>
        <Icons height={22} width={22} name="repeat" color="secondary" />
      </div>
    );
  } else if (files[0]?.size) {
    return (
      <div className={`${styles.containerForm} ${styles.borderSucess}`}>
        <div className={styles.wrapper}>
          <PDF />
          <div className={styles.containerFileInfo}>
            <label className={styles.nameFilme}>{files[0]?.name} </label>
            <label className={styles.sucessName}>
              {`${formatFileSize(
                parseInt(files[0]?.size)
              )},${formatBrazilianDate(parseInt(files[0]?.size))}`}
            </label>
          </div>
        </div>
        <div onClick={handleOpenModal} className={styles.wrapperIconsSucess}>
          <Icons name="error" height={22} width={22} color="error" />

          <Icons name="downCircle" height={22} width={22} color="secondary" />
        </div>
        <Modal
          isOpen={openModal}
          className={styles.modalContainer}
          style={{
            overlay: {
              backgroundColor: "rgba(32, 82, 102, 0.77)",
            },
          }}
        >
          <div className={styles.boxModal}>
            <div
              className={styles.wrapperIconModal}
              onClick={() => setOpenModal(false)}
            >
              <Icons height={36} width={36} name="cancel" />
            </div>
            <div className={styles.containerInfoModal}>
              <Typography
                i18nPath="upload.modal.title"
                size={18}
                color="secondary"
                fontWeight="bold"
              />
              <div className={styles.divider} />
              <Typography
                i18nPath="upload.modal.subTitle"
                size={14}
                color="secondary"
                fontWeight={400}
              />
              <div className={styles.wrapperButtonModal}>
                <Button
                  i18nPath="upload.modal.btn.firstBtn"
                  type="empty"
                  onClick={() => setOpenModal(false)}
                  color="tertiary"
                />
                <Button
                  i18nPath="upload.modal.btn.secondBtn"
                  type="fill"
                  onClick={() => eraseData()}
                  BGcolor="error"
                />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
  return <></>;
};
