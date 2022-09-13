import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { UserInput } from "./UserInput";
import {
  mockIsCurrencyCorrectMask,
  mockIsCurrencyValue,
  mockIsNumber,
  mockIsPercentageValue,
  mockUserInputFieldName,
  mockUserInputlabel,
  mockUserInputText,
} from "../../../shared/mocks";

jest.mock("recharts", () => {
  return {};
});

describe("<UserInput />", () => {
  const setText = jest.fn();
  const setup = (props?: any) => (
    <UserInput
      fieldName={mockUserInputFieldName}
      label={mockUserInputlabel}
      text={mockUserInputText}
      setText={setText}
      {...props}
    />
  );
  test("should render label", async () => {
    render(setup());
    expect(screen.getByText(mockUserInputlabel)).toBeDefined();
  });
  test("should call setText on change", async () => {
    render(setup());
    fireEvent.change(screen.getByLabelText(mockUserInputlabel), {
      target: { value: "10" },
    });
    expect(setText).toHaveBeenCalled();
  });
  test("should render a currency", async () => {
    const value = "10";
    render(setup({ isCurrency: true }));
    fireEvent.change(screen.getByLabelText(mockUserInputlabel), {
      target: { value },
    });
    expect(screen.getByLabelText(mockUserInputlabel)).toHaveValue(
      mockIsCurrencyValue
    );
  });
  test("should render a number in the correct mask of currency", async () => {
    const value = "10000000,00";
    render(setup({ isCurrency: true }));
    fireEvent.change(screen.getByLabelText(mockUserInputlabel), {
      target: { value },
    });
    expect(screen.getByLabelText(mockUserInputlabel)).toHaveValue(
      mockIsCurrencyCorrectMask
    );
  });
  test("should render a percentage", async () => {
    const value = "10";
    render(setup({ isPercentage: true }));
    fireEvent.change(screen.getByLabelText(mockUserInputlabel), {
      target: { value },
    });
    expect(screen.getByLabelText(mockUserInputlabel)).toHaveValue(
      mockIsPercentageValue
    );
  });
  test("should render a number without any unit", async () => {
    const value = "10";
    render(setup());
    fireEvent.change(screen.getByLabelText(mockUserInputlabel), {
      target: { value },
    });
    expect(screen.getByLabelText(mockUserInputlabel)).toHaveValue(
      mockIsNumber
    );
  });
});
