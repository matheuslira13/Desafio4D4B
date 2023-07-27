import { ReactComponent as Bell } from "./svgs/bell.svg";
import { ReactComponent as Profile } from "./svgs/profile.svg";
import { ReactComponent as Down } from "./svgs/down.svg";
import styles from "./styles.module.scss";

export type IconsProps = {
  name: "bell" | "profile" | "down";
  width: number;
  height: number;
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "black"
    | "white"
    | "gray"
    | "default";
};

export const Icons = ({ name, color = "black", height, width }: IconsProps) => {
  let selectColor = {
    primary: styles.primary,
    secondary: styles.secondary,
    tertiary: styles.tertiary,
    black: styles.black,
    gray: styles.gray,
    white: styles.white,
    default: styles.default,
  }[color];

  var show = {
    bell: <Bell className={selectColor} style={{ height, width }} />,
    profile: <Profile className={selectColor} style={{ height, width }} />,
    down: <Down className={selectColor} style={{ height, width }} />,
  };

  return show[name];
};
