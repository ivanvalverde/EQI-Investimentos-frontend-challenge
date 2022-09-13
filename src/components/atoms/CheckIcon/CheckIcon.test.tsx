import React from "react";
import { render, screen } from "@testing-library/react";
import { CheckIcon } from "./CheckIcon";

describe("<CheckIcon />", () => {
  test("should render the svg", () => {
    render(<CheckIcon />);
    expect(screen.getByTestId("svgCheck")).toBeDefined();
  });
});
