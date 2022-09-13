import axios, { AxiosResponse } from "axios";
import React, { useContext } from "react";
import { btnsIndexingTypes, btnsTerm } from "../../../shared/constants";
import { fieldNames, labels } from "../../../shared/enums";
import { lowerCaseAndRemoveAccents } from "../../../shared/functions";
import { ApiSimulationResponse, BtnActive } from "../../../shared/types";
import ActionButton from "../../atoms/ActionButton";
import TitleH2 from "../../atoms/TitleH2";
import UserInput from "../../atoms/UserInput";
import { ActionsContext } from "../../context/ActionsContext";
import ButtonGroup from "../../molecules/ButtonGroup";

export const FirstColumnSimulator = () => {
  const { text, setText, btnsPressed, setApiData } = useContext(ActionsContext);

  const onClearFields = () => {
    setText({
      initialContribution: "",
      term: "",
      ipca: "",
      montlyContribution: "",
      profitability: "",
      cdi: "",
    });
  };

  const searchForActiveBtns = (btns: BtnActive): string[] => {
    const activeBtns: string[] = [];
    for (let key in btns) {
      if (btns[key]) {
        activeBtns.push(key);
      }
    }
    return activeBtns;
  };

  const onFetchData = async (
    listParams: string[]
  ): Promise<AxiosResponse<ApiSimulationResponse[]>> => {
    const apiData = await axios.get<ApiSimulationResponse[]>(
      "http://localhost:3000/simulacoes",
      {
        params: {
          tipoRendimento: lowerCaseAndRemoveAccents(listParams[0]),
          tipoIndexacao:
            lowerCaseAndRemoveAccents(listParams[1]) === "fixado"
              ? "ipca"
              : lowerCaseAndRemoveAccents(listParams[1]),
        },
      }
    );
    return apiData;
  };

  return (
    <div className="mobile:w-full">
      <TitleH2 text={labels.SIMULATOR} />
      <div className="flex mobile:flex-col laptop:flex-row">
        <div className="flex flex-col mx-8">
          <ButtonGroup buttons={btnsTerm} label={labels.SIMULATOR_INCOME} />
          <UserInput
            label={labels.INITIAL_CONTRIBUTION}
            fieldName={fieldNames.INITIAL_CONTRIBUTION}
            text={text.initialContribution}
            setText={setText}
            isCurrency
          />
          <UserInput
            label={labels.TERM}
            fieldName={fieldNames.TERM}
            text={text.term}
            setText={setText}
          />
          <UserInput
            label={labels.IPCA}
            fieldName={fieldNames.IPCA}
            text={text.ipca}
            setText={setText}
            isPercentage
          />
        </div>
        <div className="flex flex-col mx-8">
          <ButtonGroup
            buttons={btnsIndexingTypes}
            label={labels.INDEXING_TYPES}
          />
          <UserInput
            label={labels.MONTHLY_CONTRIBUTION}
            fieldName={fieldNames.MONTHLY_CONTRIBUTION}
            text={text.montlyContribution}
            setText={setText}
            isCurrency
          />
          <UserInput
            label={labels.PROFITABILITY}
            fieldName={fieldNames.PROFITABILITY}
            text={text.profitability}
            setText={setText}
            isPercentage
          />
          <UserInput
            label={labels.CDI}
            fieldName={fieldNames.CDI}
            text={text.cdi}
            setText={setText}
            isPercentage
          />
        </div>
      </div>
      <div className="flex laptop:justify-evenly laptop:flex-row mobile:justify-center mobile:flex-col mobile:items-center">
        <ActionButton
          label={labels.CLEAR_FIELDS_LABEL}
          callBack={onClearFields}
        />
        <ActionButton
          label={labels.SIMULATE_LABEL}
          callBack={async () => {
            const listBtnsPressed = searchForActiveBtns(btnsPressed);
            const apiResponse = await onFetchData(listBtnsPressed);
            setApiData(apiResponse?.data[0]);
          }}
          disabled={
            !text.cdi.length ||
            !text.initialContribution.length ||
            !text.ipca.length ||
            !text.montlyContribution.length ||
            !text.profitability.length ||
            !text.term.length
          }
        />
      </div>
    </div>
  );
};
