import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

type TypographyProps = {
  children?: React.ReactNode;
  i18nPath?: string;
  size: number;
  fontWeight?: "bold" | 400 | 500 | 600;
  orientation?: "center" | "left" | "right" | "justify";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "black"
    | "white"
    | "gray"
    | "default";
};

export const Typography = ({
  i18nPath,
  orientation,
  size,
  fontWeight = 400,
  color = "default",
  children,
}: TypographyProps) => {
  const textStyle = {
    padding: 4,
    fontSize: size,
    fontWeight,
    textAlign: orientation ? orientation : undefined,
  };
  let selectColor = {
    primary: styles.primary,
    secondary: styles.secondary,
    tertiary: styles.tertiary,
    black: styles.black,
    gray: styles.gray,
    white: styles.white,
    default: styles.default,
  }[color];
  const { t } = useTranslation();

  return (
    <p className={selectColor} style={textStyle}>
      {i18nPath && t(i18nPath)}
      {children}
    </p>
  );
};
