import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "../../components/Button";

describe("Button Component Balance", () => {
  it("The component must render with fill empty", () => {
    render(<Button i18nPath="a" type="empty" onClick={() => {}} />);
  });
  it("The component must render with fill type", () => {
    render(<Button i18nPath="a" type="fill" onClick={() => {}} />);
  });
  it("Show label equal to props", () => {
    render(<Button i18nPath="teste" type="empty" onClick={() => {}} />);
    const prop = screen.getByText("teste");
    expect(prop).toBeTruthy();
  });
});
