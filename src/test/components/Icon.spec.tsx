import React from "react";

import { render } from "@testing-library/react";
import { Icons } from "../../components/Icon";

describe("Icon Component", () => {
  it("The component must render with fill type", () => {
    render(<Icons height={10} name="bell" width={10} color="black" />);
  });
});
