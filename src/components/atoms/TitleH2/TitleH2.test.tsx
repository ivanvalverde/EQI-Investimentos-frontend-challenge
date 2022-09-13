import React from "react";
import { render, screen } from "@testing-library/react";
import { TitleH2 } from "./TitleH2";
import { mockTitleH2 } from "../../../shared/mocks";

describe("<TitleH2 />", () => {
  test("should render text on the screen", () => {
    render(<TitleH2 text={mockTitleH2} />);
    expect(screen.getByText(mockTitleH2)).toBeDefined();
  });
});
