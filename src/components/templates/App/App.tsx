import React from "react";
import { labels } from "../../../constants/enums";
import BackgroundContainer from "../../atoms/BackgroundContainer";
import SimulatorContainer from "../../atoms/SimulatorContainer";
import TitleH1 from "../../atoms/TitleH1";
import UserInput from "../../atoms/UserInput";

export const App = (): JSX.Element => {
  return (
    <BackgroundContainer>
      <TitleH1 text={labels.WEBSITE_TITLE} />
      <SimulatorContainer
        firstChild={<UserInput fieldName="oloko" label="Drama" />}
        secondChild={<h2>Hello!</h2>}
      />
    </BackgroundContainer>
  );
};
