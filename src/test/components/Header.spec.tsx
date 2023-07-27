import React from "react";

import { render } from "@testing-library/react";
import { Header } from "../../components/Header";

describe("Header Component", () => {
  it("The component must render with fill type", () => {
    render(<Header />);
  });
});
