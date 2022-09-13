import React from "react";
import { render, screen } from "@testing-library/react";
import { BackgroundContainer } from "./BackgroundContainer";
import { mockBackgroundContainerText } from "../../../shared/mocks";

describe("<BackgroundContainer />", () => {
  test("should render the external div with it's children", () => {
    render(<BackgroundContainer><p>{mockBackgroundContainerText}</p></BackgroundContainer>);
    expect(screen.getByText(mockBackgroundContainerText)).toBeDefined();
  });
});
