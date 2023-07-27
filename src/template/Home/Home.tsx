import React from "react";
import { useState } from "react";
import styles from "./Home.module.scss";

import { UserInfo } from "../../components/TextInput";
import { Typography, Navbar, Balance, Button } from "../../components";
import {
  RowForm,
  RowFormProps,
  TextInputWithLabelProps,
} from "../../components/RowForm";
import { Link } from "react-router-dom";

export type HomeProps = {
  formData: RowFormProps[];
};

const Home = ({ formData }: HomeProps) => {
  return (
    <div className={styles.containerForm}>
      <Typography
        i18nPath="home.form.searchTitle"
        size={18}
        color="secondary"
        fontWeight="bold"
        orientation="left"
      />
      <div className={styles.divider} />

      <div className={styles.subContainer}>
        {formData.map((item, index) => {
          return (
            <RowForm
              key={index}
              leftside={item.leftside}
              fullWeight={item?.fullWeight}
              firsLineRightSide={item?.firsLineRightSide}
              leftSideBtn={item?.leftSideBtn}
              space={item?.space}
            />
          );
        })}
      </div>
      <Button
        type="empty"
        i18nPath="home.form.btn.thirdBtn"
        color="secondary"
      />
      <div className={styles.separetor} />
      <div className={styles.footerForm}>
        <Link to="/doc" style={{ textDecoration: "none" }}>
          <Button
            i18nPath="home.form.btn.fourthBtn"
            type="fill"
            BGcolor="primary"
          />
        </Link>
        <Button
          i18nPath="home.form.btn.fifthBtn"
          type="empty"
          color="secondary"
        />
      </div>
    </div>
  );
};

export default Home;
