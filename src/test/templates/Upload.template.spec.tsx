import React from "react";

import { render, screen } from "@testing-library/react";
import { RowForm } from "../../components/RowForm";
import { UploadScreen } from "../../screens/Upload.Screen";

describe("RowForm Component", () => {
  it("The component must render with fill type", () => {
    render(<UploadScreen />);
    const layoutContainer = screen.getByTestId("container-upload");
    expect(layoutContainer).toBeTruthy();
  });
});
