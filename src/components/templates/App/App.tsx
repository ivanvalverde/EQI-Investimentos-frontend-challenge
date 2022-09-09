import React from "react";
import { labels } from "../../../constants/enums";
import ActionButton from "../../atoms/ActionButton";
import BackgroundContainer from "../../atoms/BackgroundContainer";
import SimulatorContainer from "../../atoms/SimulatorContainer";
import TitleH1 from "../../atoms/TitleH1";
import UserInput from "../../atoms/UserInput";
import ButtonGroup from "../../molecules/ButtonGroup";

export const App = (): JSX.Element => {
  const btns = [
    {
      name: 'Bruto',
      leftBorderRound: true,
    },
    {
      name: 'Líquido',
      rightBorderRound: true,
    }
  ]

  return (
    <BackgroundContainer>
      <TitleH1 text={labels.WEBSITE_TITLE} />
      <SimulatorContainer
        firstChild={<UserInput fieldName="oloko" label="Drama" />}
        secondChild={<h2>Hello!</h2>}
      />
      <ButtonGroup buttons={btns} label={'Louca'}/>
      <ActionButton label={labels.SIMULATE_LABEL} callBack={() => {}}/>
    </BackgroundContainer>
  );
};
