import React from "react";

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import {
  RowForm,
  RowFormProps,
  TextInputWithLabelProps,
} from "../../components/RowForm";
import { UserInfo } from "../../components/TextInput";
import { StoreProvider } from "../components/provideForTest";
import HomeTemplate from "../../template/Home/Home";
import { mockuser } from "../../utils/mockUser";

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
      <MemoryRouter>
        <HomeTemplate formData={formData} />
      </MemoryRouter>
    );
    const layoutContainer = screen.getByTestId("home-container");
    expect(layoutContainer).toBeTruthy();
  });
});
