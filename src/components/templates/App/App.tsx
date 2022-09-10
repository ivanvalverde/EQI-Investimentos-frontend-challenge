import React from "react";
import BackgroundContainer from "../../atoms/BackgroundContainer";
import { ActionsProvider } from "../../context/ActionsContext";
import SimulatorCalculator from "../../organisms/SimulatorCalculator";

export const App = (): JSX.Element => {
  return (
    <ActionsProvider>
      <BackgroundContainer>
        <SimulatorCalculator />
      </BackgroundContainer>
    </ActionsProvider>
  );
};
