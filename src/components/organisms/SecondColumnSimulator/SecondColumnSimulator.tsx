import React, { useContext, useMemo } from "react";
import { labels } from "../../../shared/enums";
import { ChartInfo, KeysContributionTimes } from "../../../shared/types";
import ResultDisplayer from "../../atoms/ResultDisplayer";
import TitleH2 from "../../atoms/TitleH2";
import { ActionsContext } from "../../context/ActionsContext";
import BarChart from "../../molecules/BarChart";

interface ISecondColumnSimulatorProps {
  isVisible: boolean;
}

export const SecondColumnSimulator = ({
  isVisible,
}: ISecondColumnSimulatorProps): JSX.Element => {
  const { apiData } = useContext(ActionsContext);
  const formattingApiData = useMemo(() => {
    const isEmpty = Object.keys(apiData).length === 0;
    const displayerValues = {
      grossFinalValue: apiData?.valorFinalBruto,
      incomeTaxRate: apiData?.aliquotaIR,
      amountPaidInIr: apiData?.valorPagoIR,
      netFinalValue: apiData?.valorFinalLiquido,
      totalAmountInvested: apiData?.valorTotalInvestido,
      netGain: apiData?.ganhoLiquido,
    };
    const chartValues: ChartInfo[] = [];
    const keysChart = !isEmpty
      ? (Object.keys(
          apiData?.graficoValores?.comAporte
        ) as KeysContributionTimes[])
      : [];
    for (let i = 0; i < keysChart.length; i++) {
      chartValues.push({
        name: keysChart[i],
        "Com aporte": apiData?.graficoValores?.comAporte[`${keysChart[i]}`],
        "Sem aporte": apiData?.graficoValores?.semAporte[`${keysChart[i]}`],
      });
    }
    return {
      displayerValues,
      chartValues,
    };
  }, [apiData]);
  return (
    <>
      {isVisible && (
        <div className="laptop:flex laptop:flex-col laptop:mt-0 mobile:block mobile:mt-10">
          <TitleH2 text={labels.SIMULATION_RESULT} />
          <div className="flex laptop:mt-4 tablet:flex-row mobile:flex-col mobile:items-center">
            <ResultDisplayer
              title={labels.GROSS_FINAL_VALUE}
              value={formattingApiData?.displayerValues?.grossFinalValue}
            />
            <ResultDisplayer
              title={labels.INCOME_TAX_RATE}
              value={formattingApiData?.displayerValues?.incomeTaxRate}
              isPercentage
            />
            <ResultDisplayer
              title={labels.AMOUNT_PAID_IN_IR}
              value={formattingApiData?.displayerValues?.amountPaidInIr}
            />
          </div>
          <div className="flex tablet:flex-row mobile:flex-col mobile:items-center">
            <ResultDisplayer
              title={labels.NET_FINAL_VALUE}
              value={formattingApiData?.displayerValues?.netFinalValue}
              isColorful
            />
            <ResultDisplayer
              title={labels.TOTAL_AMOUNT_INVESTED}
              value={formattingApiData?.displayerValues?.totalAmountInvested}
            />
            <ResultDisplayer
              title={labels.NET_GAIN}
              value={formattingApiData?.displayerValues?.netGain}
              isColorful
            />
          </div>
          <BarChart apiData={formattingApiData?.chartValues} />
        </div>
      )}
    </>
  );
};
