import React from "react";
import { render, screen } from "@testing-library/react";
import { ResultDisplayer } from "./ResultDisplayer";
import {
  mockResultDisplayerTitle,
  mockResultDisplayerValue,
  mockResultDisplayerValueIsCurrency,
  mockResultDisplayerValueIsCurrencyNegative,
  mockResultDisplayerValueIsPercentage,
} from "../../../shared/mocks";

describe("<ResultDisplayer />", () => {
  const setup = (props?: any) => (
    <ResultDisplayer
      title={mockResultDisplayerTitle}
      value={mockResultDisplayerValue}
      {...props}
    />
  );
  test("should render the correct title and value (isCurrency)", () => {
    render(setup());
    expect(screen.getByText(mockResultDisplayerTitle)).toBeDefined();
    expect(screen.getByText(mockResultDisplayerValueIsCurrency)).toBeDefined();
  });
  test("should render the correct value (isPercentage)", () => {
    render(setup({ isPercentage: true }));
    expect(
      screen.getByText(mockResultDisplayerValueIsPercentage)
    ).toBeDefined();
  });
  test("should render a green value due to the positivity of its value", () => {
    render(setup({ isColorful: true }));
    expect(screen.getByText(mockResultDisplayerValueIsCurrency)).toHaveClass(
      "text-lightGreen"
    );
  });
  test("should render a red value due to the negativity of its value", () => {
    render(setup({ isColorful: true, value: -20 }));
    expect(
      screen.getByText(mockResultDisplayerValueIsCurrencyNegative)
    ).toHaveClass("text-warningRed");
  });
});
