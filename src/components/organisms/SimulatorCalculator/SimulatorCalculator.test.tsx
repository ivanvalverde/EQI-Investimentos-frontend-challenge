import React from "react";
import { render, screen } from "@testing-library/react";
import { SimulatorCalculator } from "./SimulatorCalculator";
import { labels } from "../../../shared/enums";
import { ActionsContext } from "../../context/ActionsContext";
import { mockContextPropsInitialState } from "../../../shared/mocks";

jest.mock("recharts", () => {
  return {};
});

describe("<SimulatorCalculator />", () => {
  test("should render the components inside itself", () => {
    render(
      <ActionsContext.Provider
        value={{
          apiData: mockContextPropsInitialState.apiData,
          btnsPressed: mockContextPropsInitialState.btnsPressed,
          text: mockContextPropsInitialState.text,
          setText: mockContextPropsInitialState.setText,
          setBtnsPressed: mockContextPropsInitialState.setBtnsPressed,
          setApiData: mockContextPropsInitialState.setApiData,
        }}
      >
        <SimulatorCalculator />
      </ActionsContext.Provider>
    );
    expect(screen.getByText(labels.WEBSITE_TITLE)).toBeDefined();
    expect(screen.getByText(labels.SIMULATOR)).toBeDefined();
  });
});
