import React from "react";

import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Balance } from "../../components/Balance";
import { Provider } from "react-redux";
type TChildren = {
  children: React.ReactNode;
};
const createTestStore = (FakeinitialState: any) =>
  createStore(() => FakeinitialState);

export const StoreProvider = ({ children }: TChildren) => {
  const FakeinitialState = {
    user: {
      balance: 5000,
    },
  };
  const defaultStore = createTestStore(FakeinitialState);
  return <Provider store={defaultStore}>{children}</Provider>;
};
