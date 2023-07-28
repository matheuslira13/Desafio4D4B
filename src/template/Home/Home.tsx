import React, { Fragment } from "react";
import styles from "./Home.module.scss";

import { Typography, Navbar, Balance, Button } from "../../components";
import { RowForm, RowFormProps } from "../../components/RowForm";

export type HomeProps = {
  formData: RowFormProps[];
  goToDoc: () => void;
  goToProduct: () => void;
};

const Home = ({ formData, goToDoc, goToProduct }: HomeProps) => {
  return (
    <Fragment>
      <Navbar route={2} />
      <Balance />
      <div className={styles.containerForm} data-testid="home-container">
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
          onClick={() => {}}
        />
        <div className={styles.separetor} />
        <div className={styles.footerForm}>
          <Button
            i18nPath="home.form.btn.fourthBtn"
            type="fill"
            BGcolor="primary"
            onClick={goToDoc}
          />

          <Button
            i18nPath="home.form.btn.fifthBtn"
            type="empty"
            color="secondary"
            onClick={goToProduct}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
