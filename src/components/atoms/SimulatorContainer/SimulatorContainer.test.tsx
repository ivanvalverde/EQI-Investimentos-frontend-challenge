import React from "react";
import { render, screen } from "@testing-library/react";
import { SimulatorContainer } from "./SimulatorContainer";
import { mockFirsctChild, mockSecondChild } from "../../../shared/mocks";

describe("<SimulatorContainer />", () => {
    const pElement = (text: string) => <p>{text}</p>
  test("should render the external div with it's children", () => {
    render(<SimulatorContainer firstChild={pElement(mockFirsctChild)} secondChild={pElement(mockSecondChild)}/>);
    expect(screen.getByTestId("container")).toBeDefined();
  });
});
