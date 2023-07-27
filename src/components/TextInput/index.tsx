import React from "react";
import styles from "./styles.module.scss";

export type UserInfo = {
  name: string;
  cpf: string;
  ierg: string;
  printAgency: string;
  telephone: string;
  cellphone: string;
  birth: string;
  country: string;
  state: string;
  cityBorn: string;
  maritalStatus: string;
  gender: string;
  balance?: number;
};

export type TextInputProps = {
  type: "select" | "text" | "date" | "cpf" | "rg" | "cellphone";
  width?: number | "100%";
  onChange: (event: any) => void;
  value?: any;
  placeholder?: string;
  option?: UserInfo[];
  defaultValue?: string;
};

export const TextInput = ({
  type = "text",
  width = "100%",
  onChange,
  value,
  placeholder,
  option,
  defaultValue,
}: TextInputProps) => {
  if (type === "select" && defaultValue) {
    return (
      <select
        name="select"
        style={{ width: width }}
        className={styles.select}
        onChange={onChange}
      >
        <option value={defaultValue} style={{ paddingLeft: 30 }}>
          {defaultValue}
        </option>
      </select>
    );
  }
  if (type === "select") {
    return (
      <select
        name="select"
        style={{ width: width }}
        className={styles.select}
        onChange={onChange}
      >
        {option?.map((item, index) => {
          return (
            <option key={index} value={item.name} style={{ paddingLeft: 30 }}>
              {item.name}
            </option>
          );
        })}
      </select>
    );
  }

  return (
    <input
      type={type}
      style={{ width: width }}
      className={styles.container}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
