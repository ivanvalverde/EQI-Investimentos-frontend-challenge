import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import {
  btnsGroupMock,
  mockButtonGroup,
  mockContextPropsFilledFormBtnGroup,
  mockFirstBtnName,
  mockSecondBtnName,
} from "../../../shared/mocks";
import { ButtonGroup } from "./ButtonGroup";
import { ActionsContext } from "../../context/ActionsContext";

describe("<ButtonGroup />", () => {
  const setBtnsPressed = jest.fn();
  const contextProps = mockContextPropsFilledFormBtnGroup(setBtnsPressed)
  const setup = (
    <ActionsContext.Provider
      value={{
        apiData: contextProps.apiData,
        btnsPressed: contextProps.btnsPressed,
        text: contextProps.text,
        setText: contextProps.setText,
        setBtnsPressed: contextProps.setBtnsPressed,
        setApiData: contextProps.setApiData,
      }}
    >
      <ButtonGroup label={mockButtonGroup} buttons={btnsGroupMock} />
    </ActionsContext.Provider>
  );
  test("should render label on the screen and the buttons text", () => {
    render(setup);
    expect(screen.getByText(mockButtonGroup)).toBeDefined();
    expect(screen.getByText(mockFirstBtnName)).toBeDefined();
    expect(screen.getByText(mockSecondBtnName)).toBeDefined();
  });
  test("should have classes in the buttons according to is active state and properties", () => {
    render(setup);
    expect(screen.getByTestId("button0")).toHaveClass("bg-lightOrange");
    expect(screen.getByTestId("button0")).toHaveClass("rounded-l-xl");
    expect(screen.getByTestId("button1")).not.toHaveClass("bg-lightOrange");
    expect(screen.getByTestId("button1")).toHaveClass("rounded-r-xl");
  });
  test("should have successfully rendered the icons", () => {
    render(setup);
    expect(screen.getByTestId("svgInfo")).toBeDefined();
    expect(screen.getAllByTestId("svgCheck")).toBeDefined();
  });
  test("should call a function when pressed and apply correct classes", () => {
    render(setup);
    expect(screen.getByTestId("button1")).not.toHaveClass("bg-lightOrange");
    fireEvent.click(screen.getByTestId("button1"));
    expect(screen.getByTestId("button1")).toHaveClass("bg-lightOrange");
    expect(setBtnsPressed).toHaveBeenCalled();
  });
});
