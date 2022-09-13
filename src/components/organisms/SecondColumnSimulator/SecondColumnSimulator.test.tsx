import React from "react";
import { render, screen } from "@testing-library/react";
import { SecondColumnSimulator } from "./SecondColumnSimulator";
import { labels } from "../../../shared/enums";
import { ActionsContext } from "../../context/ActionsContext";
import {
  mockAmmountPaidInIr,
  mockContextPropsInitialState,
  mockGrossFinalValue,
  mockNetFinalValue,
  mockNetGain,
  mockSimulationsResponse,
  mockTaxRate,
  mockTotalInvestedAmmount,
} from "../../../shared/mocks";

jest.mock("../../molecules/BarChart", () => jest.fn(() => <div></div>));

describe("<SecondColumnSimulator />", () => {
  const setup = (props?: any) => (
    <ActionsContext.Provider
      value={{
        apiData: mockSimulationsResponse.data[0],
        btnsPressed: mockContextPropsInitialState.btnsPressed,
        text: mockContextPropsInitialState.text,
        setText: mockContextPropsInitialState.setText,
        setBtnsPressed: mockContextPropsInitialState.setBtnsPressed,
        setApiData: mockContextPropsInitialState.setApiData,
      }}
    >
      <SecondColumnSimulator {...props} />
    </ActionsContext.Provider>
  );
  test("should render labels on the screen", () => {
    render(setup({ isVisible: true }));
    expect(screen.getByText(labels.SIMULATION_RESULT)).toBeDefined();
    expect(screen.getByText(labels.GROSS_FINAL_VALUE)).toBeDefined();
    expect(screen.getByText(labels.INCOME_TAX_RATE)).toBeDefined();
    expect(screen.getByText(labels.AMOUNT_PAID_IN_IR)).toBeDefined();
    expect(screen.getByText(labels.NET_FINAL_VALUE)).toBeDefined();
    expect(screen.getByText(labels.TOTAL_AMOUNT_INVESTED)).toBeDefined();
    expect(screen.getByText(labels.NET_GAIN)).toBeDefined();
  });
  test("should not render labels on the screen", () => {
    render(setup({ isVisible: false }));
    expect(screen.queryByText(labels.SIMULATION_RESULT)).toBeNull();
    expect(screen.queryByText(labels.GROSS_FINAL_VALUE)).toBeNull();
    expect(screen.queryByText(labels.INCOME_TAX_RATE)).toBeNull();
    expect(screen.queryByText(labels.AMOUNT_PAID_IN_IR)).toBeNull();
    expect(screen.queryByText(labels.NET_FINAL_VALUE)).toBeNull();
    expect(screen.queryByText(labels.TOTAL_AMOUNT_INVESTED)).toBeNull();
    expect(screen.queryByText(labels.NET_GAIN)).toBeNull();
  });
  test("should render components with its respective values", () => {
    render(setup({ isVisible: true }));
    expect(screen.getByText(`${mockTaxRate}%`)).toBeDefined();
    expect(screen.getByText(`R$ ${mockAmmountPaidInIr}`)).toBeDefined();
    expect(screen.getByText(`R$ ${mockTotalInvestedAmmount}`)).toBeDefined();
    expect(screen.getByText(`R$ ${mockNetGain}`)).toBeDefined();
    expect(screen.getAllByText(`R$ ${mockGrossFinalValue}`)).toBeDefined();
    expect(screen.getAllByText(`R$ ${mockNetFinalValue}`)).toBeDefined();
  });
});
