import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { mockActionButtonLabel } from "../../../shared/mocks";
import { ActionButton } from "./ActionButton";
import { labels } from "../../../shared/enums";

describe("<ActionButton />", () => {
  const callBack = jest.fn();
  const setup = (props?: any) => (
    <ActionButton
      label={mockActionButtonLabel}
      callBack={callBack}
      {...props}
    />
  );
  test("should render the button", () => {
    render(setup());
    expect(screen.getByText(mockActionButtonLabel)).toBeDefined();
  });
  test("should execute callback when clicked", () => {
    render(setup());
    fireEvent.click(screen.getByText(mockActionButtonLabel));
    expect(callBack).toHaveBeenCalled();
  });
  test("should have a grey color when disabled and have the label 'Simulate'", () => {
    render(setup({ disabled: true, label: labels.SIMULATE_LABEL }));
    expect(screen.getByText(labels.SIMULATE_LABEL)).toHaveClass("bg-darkGrey");
  });
  test("should have a orange color when not disabled and have the label 'Simulate'", () => {
    render(setup({ disabled: false, label: labels.SIMULATE_LABEL }));
    expect(screen.getByText(labels.SIMULATE_LABEL)).toHaveClass(
      "bg-lightOrange"
    );
  });
  test("should have no color when disabled or not and have a different label than 'Simulate'", () => {
    render(setup({ disabled: false, label: mockActionButtonLabel }));
    expect(screen.getByText(mockActionButtonLabel)).toHaveClass(
      "bg-noColor"
    );
  });
});
