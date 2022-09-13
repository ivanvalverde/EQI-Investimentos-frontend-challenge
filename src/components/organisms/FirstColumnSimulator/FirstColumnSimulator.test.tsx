import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { labels } from "../../../shared/enums";
import { ActionsContext } from "../../context/ActionsContext";
import {
  mockCdi,
  mockContextPropsFilledForm,
  mockContextPropsInitialState,
  mockIpca,
  mockSimulationsResponse,
} from "../../../shared/mocks";
import { FirstColumnSimulator } from "./FirstColumnSimulator";
import axios from "axios";
import { lowerCaseAndRemoveAccents } from "../../../shared/functions";

jest.mock("recharts", () => {
  return {};
});

jest.mock("../../../shared/functions", () => ({
  lowerCaseAndRemoveAccents: jest.fn((param) => param),
}));

jest.mock("axios");

describe("<FirstColumnSimulator />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const setTextMock = jest.fn();
  const setApiDataMock = jest.fn();
  const setup = (mock: { [key: string]: any }) => (
    <ActionsContext.Provider
      value={{
        apiData: mock.apiData,
        btnsPressed: mock.btnsPressed,
        text: mock.text,
        setText: setTextMock,
        setBtnsPressed: mock.setBtnsPressed,
        setApiData: mock.setApiData,
      }}
    >
      <FirstColumnSimulator />
    </ActionsContext.Provider>
  );
  test("should render every label in the component", () => {
    render(setup(mockContextPropsInitialState));
    expect(screen.getByText(labels.SIMULATOR)).toBeDefined();
    expect(screen.getByText(labels.SIMULATOR_INCOME)).toBeDefined();
    expect(screen.getByText(labels.INITIAL_CONTRIBUTION)).toBeDefined();
    expect(screen.getByText(labels.TERM)).toBeDefined();
    expect(screen.getByText(labels.IPCA)).toBeDefined();
    expect(screen.getByText(labels.INDEXING_TYPES)).toBeDefined();
    expect(screen.getByText(labels.MONTHLY_CONTRIBUTION)).toBeDefined();
    expect(screen.getByText(labels.PROFITABILITY)).toBeDefined();
    expect(screen.getByText(labels.CDI)).toBeDefined();
    expect(screen.getByText(labels.CLEAR_FIELDS_LABEL)).toBeDefined();
    expect(screen.getByText(labels.SIMULATE_LABEL)).toBeDefined();
  });
  test("should have a disabled simulate button", () => {
    render(setup(mockContextPropsInitialState));
    expect(screen.getByText(labels.SIMULATE_LABEL)).toHaveProperty(
      "disabled",
      true
    );
  });
  test("should have filled ipca and cdi inputs with values comming from context", () => {
    render(setup(mockContextPropsInitialState));
    expect(screen.getByLabelText(labels.IPCA)).toHaveValue(mockIpca);
    expect(screen.getByLabelText(labels.CDI)).toHaveValue(mockCdi);
  });
  test("should call setTextMock after pressing the clear fields button", () => {
    render(setup(mockContextPropsInitialState));
    fireEvent.click(screen.getByText(labels.CLEAR_FIELDS_LABEL));
    expect(setTextMock).toHaveBeenCalled();
  });
  test("should call axios, get the mocked data and call setApiData", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce(mockSimulationsResponse);
    render(setup(mockContextPropsFilledForm(setApiDataMock)));
    fireEvent.click(screen.getByText(labels.SIMULATE_LABEL));
    expect(lowerCaseAndRemoveAccents).toHaveBeenCalled();
    await waitFor(() => {
      expect(setApiDataMock).toHaveBeenCalled();
    });
  });
});
