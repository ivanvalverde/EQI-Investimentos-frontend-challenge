import React from "react";
import { labels } from "../../../shared/enums";
import ResultDisplayer from "../../atoms/ResultDisplayer";
import SimulatorContainer from "../../atoms/SimulatorContainer";
import TitleH1 from "../../atoms/TitleH1";
import TitleH2 from "../../atoms/TitleH2";
import BarChart from "../../molecules/BarChart";
import FirstColumnSimulator from "../FirstColumnSimulator";

export const SimulatorCalculator = () => {
  return (
    <>
      <TitleH1 text={labels.WEBSITE_TITLE} />
      <SimulatorContainer
        firstChild={<FirstColumnSimulator />}
        secondChild={
          <div className="flex flex-col">
            <TitleH2 text={labels.SIMULATION_RESULT}/>
            <div className="flex">
              <ResultDisplayer title="Valor final bruto" value={2000} />
              <ResultDisplayer title="Valor final bruto" value={2000} />
              <ResultDisplayer title="Valor final bruto" value={2000} />
            </div>
            <div className="flex">
              <ResultDisplayer title="Valor final bruto" value={2000} />
              <ResultDisplayer title="Valor final bruto" value={2000} />
              <ResultDisplayer title="Valor final bruto" value={2000} />
            </div>
            <BarChart />
          </div>
        }
      />
    </>
  );
};
