import React from "react";
import { render, screen } from "@testing-library/react";
import { TitleH1 } from "./TitleH1";
import { mockTitleH1 } from "../../../shared/mocks";

describe("<TitleH1 />", () => {
  test("should render text on the screen", () => {
    render(<TitleH1 text={mockTitleH1} />);
    expect(screen.getByText(mockTitleH1)).toBeDefined();
  });
});
