import { ReactComponent as Bell } from "./svgs/bell.svg";
import { ReactComponent as Profile } from "./svgs/profile.svg";
import { ReactComponent as Down } from "./svgs/down.svg";
import { ReactComponent as Up } from "./svgs/up.svg";
import { ReactComponent as Repeat } from "./svgs/repeat.svg";
import { ReactComponent as Error } from "./svgs/error.svg";
import { ReactComponent as Cancel } from "./svgs/cancel.svg";
import { ReactComponent as DownCircle } from "./svgs/downCircle.svg";
import { ReactComponent as UpCircle } from "./svgs/upCircle.svg";
import styles from "./styles.module.scss";

export type IconsProps = {
  name:
    | "bell"
    | "profile"
    | "down"
    | "up"
    | "repeat"
    | "error"
    | "cancel"
    | "upCircle"
    | "downCircle";
  width: number;
  height: number;
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "black"
    | "white"
    | "gray"
    | "error"
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
    error: styles.error,
    default: styles.default,
  }[color];

  var show = {
    bell: <Bell className={selectColor} style={{ height, width }} />,
    profile: <Profile className={selectColor} style={{ height, width }} />,
    down: <Down className={selectColor} style={{ height, width }} />,
    up: <Up className={selectColor} style={{ height, width }} />,
    repeat: <Repeat className={selectColor} style={{ height, width }} />,
    error: <Error className={selectColor} style={{ height, width }} />,
    cancel: <Cancel className={selectColor} style={{ height, width }} />,
    upCircle: <UpCircle className={selectColor} style={{ height, width }} />,
    downCircle: (
      <DownCircle className={selectColor} style={{ height, width }} />
    ),
  };

  return show[name];
};
