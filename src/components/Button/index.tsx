import styles from "./styles.module.scss";
import React from "react";
import { useTranslation } from "react-i18next";

type ButtonProps = {
  i18nPath: string;
  type: "fill" | "empty";
  BGcolor?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "black"
    | "white"
    | "gray"
    | "default"
    | "error";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "black"
    | "white"
    | "gray"
    | "default"
    | "error";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({
  i18nPath,
  type,
  BGcolor = "primary",
  color = "primary",
  onClick,
}: ButtonProps) => {
  const { t } = useTranslation();

  let selectBGColor = {
    primary: styles.primaryBgColor,
    secondary: styles.secondaryBgColor,
    tertiary: styles.tertiaryBgColor,
    black: styles.blackBgColor,
    gray: styles.grayBgColor,
    white: styles.whiteBgColor,
    default: styles.defaultBgColor,
    error: styles.errorBgColor,
  }[BGcolor];

  let selectColor = {
    primary: styles.primaryColor,
    secondary: styles.secondaryColor,
    tertiary: styles.tertiaryColor,
    black: styles.blackColor,
    gray: styles.grayColor,
    white: styles.whiteColor,
    default: styles.defaultColor,
    error: styles.errorColor,
  }[color];

  if (type === "fill") {
    return (
      <button
        onClick={onClick}
        className={`${styles.containerButton} ${selectBGColor}`}
      >
        {t(i18nPath)}
      </button>
    );
  }
  return (
    <button
      className={`${styles.containerButton} ${selectColor}`}
      onClick={onClick}
    >
      {t(i18nPath)}
      <hr />
    </button>
  );
};
