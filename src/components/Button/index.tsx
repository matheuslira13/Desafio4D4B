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
    | "default";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "black"
    | "white"
    | "gray"
    | "default";
};

export const Button = ({
  i18nPath,
  type,
  BGcolor = "primary",
  color = "primary",
}: ButtonProps) => {
  let selectBGColor = {
    primary: styles.primaryBgColor,
    secondary: styles.secondaryBgColor,
    tertiary: styles.tertiaryBgColor,
    black: styles.blackBgColor,
    gray: styles.grayBgColor,
    white: styles.whiteBgColor,
    default: styles.defaultBgColor,
  }[BGcolor];

  let selectColor = {
    primary: styles.primaryColor,
    secondary: styles.secondaryColor,
    tertiary: styles.tertiaryColor,
    black: styles.blackColor,
    gray: styles.grayColor,
    white: styles.whiteColor,
    default: styles.defaultColor,
  }[color];

  const { t } = useTranslation();
  if (type === "fill") {
    return (
      <button
        className={selectBGColor}
        style={{
          border: "none",
          whiteSpace: "nowrap",
        }}
      >
        {t(i18nPath)}
      </button>
    );
  }
  return (
    <button className={selectColor}>
      {t(i18nPath)}
      <hr />
    </button>
  );
};
