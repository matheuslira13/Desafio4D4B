import React from "react";

import { render, screen } from "@testing-library/react";
import UploadTemplate from "../../template/Upload";
import { MemoryRouter } from "react-router-dom";
import { StoreProvider } from "../components/provideForTest";

describe("RowForm Component", () => {
  it("The component must render with fill type", () => {
    render(
      <MemoryRouter>
        <StoreProvider>
          <UploadTemplate
            handleGoTOPayment={() => {}}
            handlebackClient={() => {}}
            maxSize={10}
          />
        </StoreProvider>
      </MemoryRouter>
    );
    const layoutContainer = screen.getByTestId("container-upload");
    expect(layoutContainer).toBeTruthy();
  });
});
