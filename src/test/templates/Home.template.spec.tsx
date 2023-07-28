import React from "react";

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import {
  RowFormProps,
  TextInputWithLabelProps,
} from "../../components/RowForm";
import HomeTemplate from "../../template/Home/Home";
import { mockuser } from "../../utils/mockUser";
import { StoreProvider } from "../components/provideForTest";

describe("RowForm Component", () => {
  const rowName: TextInputWithLabelProps[] = [
    {
      onChange: () => {},
      type: "select",
      value: "",
      option: mockuser,
    },
  ];
  const formData: RowFormProps[] = [
    {
      leftside: rowName,
      fullWeight: "clientName",
      firsLineRightSide: true,
      leftSideBtn: true,
    },
  ];
  it("The component must render with fill type", () => {
    render(
      <StoreProvider>
        <MemoryRouter>
          <HomeTemplate
            formData={formData}
            goToDoc={() => {}}
            goToProduct={() => {}}
          />
        </MemoryRouter>
      </StoreProvider>
    );
    const layoutContainer = screen.getByTestId("home-container");
    expect(layoutContainer).toBeTruthy();
  });
});
