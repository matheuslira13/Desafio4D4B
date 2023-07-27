import React from "react";

import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Balance } from "../../components/Balance";
import { Provider } from "react-redux";
const createTestStore = (FakeinitialState: any) =>
  createStore(() => FakeinitialState);

describe("Must render Component Balance", () => {
  const FakeinitialState = {
    user: {
      balance: 5000,
    },
  };
  const store = createTestStore(FakeinitialState);
  it("Must render", () => {
    render(
      <Provider store={store}>
        <Balance />
      </Provider>
    );
  });
  it("Balance should be equal to FakeinitalState", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Balance />
      </Provider>
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const balanceElement = getByText("R$ 5.000,00");
    expect(balanceElement).toBeInTheDocument();
  });
});
