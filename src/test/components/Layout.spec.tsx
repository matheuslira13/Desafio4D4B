import React from "react";

import { render, screen } from "@testing-library/react";
import Layout from "../../components/Layout";
import { Provider } from "react-redux";
import { createStore } from "@reduxjs/toolkit";
import { StoreProvider } from "./provideForTest";

describe("Layout Component", () => {
  it("The component must render with fill type", () => {
    const { getByTestId } = render(
      <StoreProvider>
        <Layout>
          <div></div>
        </Layout>
      </StoreProvider>
    );
    const layoutContainer = screen.getByTestId("layout-container");
    expect(layoutContainer).toBeTruthy();
  });
});
