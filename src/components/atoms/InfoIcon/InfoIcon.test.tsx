import React from "react";
import { render, screen } from "@testing-library/react";
import { InfoIcon } from "./InfoIcon";

describe("<InfoIcon />", () => {
  test("should render the svg", () => {
    render(<InfoIcon />);
    expect(screen.getByTestId("svgInfo")).toBeDefined();
  });
});
