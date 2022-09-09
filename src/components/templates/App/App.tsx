import React from "react";
import { labels } from "../../../shared/enums";
import BackgroundContainer from "../../atoms/BackgroundContainer";
import TitleH1 from "../../atoms/TitleH1";
import { ActionsProvider } from "../../context/ActionsContext";
import SimulatorCalculator from "../../organisms/SimulatorCalculator";

export const App = (): JSX.Element => {
  return (
    <ActionsProvider>
      <BackgroundContainer>
        <TitleH1 text={labels.WEBSITE_TITLE} />
        <SimulatorCalculator />
      </BackgroundContainer>
    </ActionsProvider>
  );
};
