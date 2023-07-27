import React from "react";

import { render, screen } from "@testing-library/react";
import { RowForm } from "../../components/RowForm";
import { StoreProvider } from "./provideForTest";

describe("RowForm Component", () => {
  it("The component must render with fill type", () => {
    render(
      <StoreProvider>
        <RowForm
          leftside={[
            {
              type: "select",
              onChange: () => {},
            },
          ]}
        />
      </StoreProvider>
    );
    const layoutContainer = screen.getByTestId("row-container");
    expect(layoutContainer).toBeTruthy();
  });
});
