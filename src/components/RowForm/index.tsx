import React, { Fragment } from "react";
import { Typography } from "../Typography";
import { TextInput, TextInputProps } from "../TextInput";
import { Button } from "../Button";

import styles from "./styles.module.scss";

export type TextInputWithLabelProps = TextInputProps & {
  label?: string;
};

export type RowFormProps = {
  leftside: TextInputWithLabelProps[];
  leftSideBtn?: boolean;
  firsLineRightSide?: boolean;
  fullWeight?: string;
  space?: boolean;
};

export const RowForm = ({
  leftside,
  leftSideBtn,
  firsLineRightSide,
  fullWeight,
  space,
}: RowFormProps) => {
  return (
    <div data-testid="row-container">
      {fullWeight && (
        <Typography
          i18nPath={`home.form.${fullWeight}`}
          size={13}
          color="secondary"
          fontWeight="bold"
          orientation="left"
        />
      )}

      <div className={styles.cover}>
        <div className={styles.firsLineLeftSide}>
          <div className={styles.wrapper}>
            {leftside.map((item, index) => {
              return (
                <Fragment key={index}>
                  {!fullWeight ? (
                    <div>
                      <Typography
                        i18nPath={`home.form.${item.label}`}
                        size={13}
                        color="secondary"
                        fontWeight="bold"
                        orientation="left"
                      />

                      <TextInput
                        onChange={item.onChange}
                        placeholder={item.placeholder}
                        type={item.type}
                        value={item.value}
                        width={item.width}
                        defaultValue={item.defaultValue}
                      />
                    </div>
                  ) : (
                    <TextInput
                      onChange={item.onChange}
                      placeholder={item.placeholder}
                      type={item.type}
                      value={item.value}
                      width={item.width}
                      option={item.option}
                    />
                  )}
                </Fragment>
              );
            })}
            {leftSideBtn && (
              <Button
                i18nPath="home.form.btn.firstBtn"
                BGcolor="secondary"
                type="fill"
                onClick={() => {}}
              />
            )}
          </div>
        </div>
        <div className={styles.firsLineRightSide}>
          {firsLineRightSide && (
            <Button
              i18nPath="home.form.btn.secondBtn"
              BGcolor="tertiary"
              type="fill"
              onClick={() => {}}
            />
          )}
        </div>
      </div>
      {space && <div className={styles.separetor} />}
    </div>
  );
};
