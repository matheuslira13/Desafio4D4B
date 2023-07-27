import React from "react";
import styles from "./style.module.scss";
import { Typography } from "../Typography";
import { Icons } from "../Icon";
import { useSelector } from "react-redux";
import { formatMoney } from "../../utils/format";

export const Balance = () => {
  //@ts-ignore
  const balance = useSelector((state) => state.user.balance);
  return (
    <div className={styles.container}>
      <div className={styles.balanceInfo}>
        <div className={styles.subBalanceInfo}>
          <Typography
            i18nPath="component.balanceComponent.balanceInfo"
            size={16}
            fontWeight="bold"
            color="white"
          />
          <Typography size={20} fontWeight="bold" color="primary">
            {formatMoney(balance)}
          </Typography>
        </div>
        <Icons name="down" height={6} width={10} color="primary" />
      </div>
    </div>
  );
};
