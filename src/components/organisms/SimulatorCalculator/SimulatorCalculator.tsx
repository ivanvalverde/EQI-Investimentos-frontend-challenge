import React, { useContext } from "react";
import { labels } from "../../../shared/enums";
import SimulatorContainer from "../../atoms/SimulatorContainer";
import TitleH1 from "../../atoms/TitleH1";
import { ActionsContext } from "../../context/ActionsContext";
import FirstColumnSimulator from "../FirstColumnSimulator";
import SecondColumnSimulator from "../SecondColumnSimulator";

export const SimulatorCalculator = (): JSX.Element => {
  const { apiData } = useContext(ActionsContext);
  const isEmpty = Object.keys(apiData).length === 0;
  return (
    <>
      <TitleH1 text={labels.WEBSITE_TITLE} />
      <SimulatorContainer
        firstChild={<FirstColumnSimulator />}
        secondChild={<SecondColumnSimulator isVisible={!isEmpty} />}
      />
    </>
  );
};
