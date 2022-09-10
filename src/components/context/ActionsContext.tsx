import axios from "axios";
import React, { createContext, useLayoutEffect, useState } from "react";
import { allBtns } from "../../shared/constants";
import {
  ApiIndicatorsResponse,
  ApiSimulationResponse,
  BtnActive,
  UserInputs,
} from "../../shared/types";

interface ActionsContextProps {
  text: UserInputs;
  setText: React.Dispatch<React.SetStateAction<UserInputs>>;
  btnsPressed: BtnActive;
  setBtnsPressed: React.Dispatch<React.SetStateAction<BtnActive>>;
  apiData: ApiSimulationResponse;
  setApiData: React.Dispatch<React.SetStateAction<ApiSimulationResponse>>;
}

interface IActionsProvider {
  children: JSX.Element;
}

const ActionsContext = createContext<ActionsContextProps>(
  {} as ActionsContextProps
);

const ActionsProvider = ({ children }: IActionsProvider): JSX.Element => {
  const btnsPressedInitialState = (): BtnActive => {
    const initialState: BtnActive = {};
    allBtns.forEach((btn) => {
      initialState[btn.name] = btn.isActive;
    });
    return initialState;
  };

  const [text, setText] = useState<UserInputs>({
    initialContribution: "",
    term: "",
    ipca: "",
    montlyContribution: "",
    profitability: "",
    cdi: "",
  });
  const [btnsPressed, setBtnsPressed] = useState<BtnActive>(
    btnsPressedInitialState()
  );
  const [apiData, setApiData] = useState<ApiSimulationResponse>(
    {} as ApiSimulationResponse
  );

  const setCorrectIndicator = (
    indicator: string,
    list: ApiIndicatorsResponse[]
  ): number => {
    const indicatorValue = list.filter((ind) => {
      return ind?.nome === indicator;
    });
    return indicatorValue[0]?.valor;
  };

  useLayoutEffect(() => {
    const recoverCdiIpcaValues = async (): Promise<void> => {
      const apiData = await axios.get<ApiIndicatorsResponse[]>(
        "http://localhost:3000/indicadores"
      );
      setText({
        initialContribution: "",
        term: "",
        ipca: `${setCorrectIndicator("ipca", apiData?.data)}%`.replace('.',','),
        montlyContribution: "",
        profitability: "",
        cdi: `${setCorrectIndicator("cdi", apiData?.data)}%`.replace('.',','),
      });
    };
    recoverCdiIpcaValues();
  }, []);

  return (
    <ActionsContext.Provider
      value={{
        setText,
        text,
        btnsPressed,
        setBtnsPressed,
        apiData,
        setApiData,
      }}
    >
      {children}
    </ActionsContext.Provider>
  );
};

export { ActionsContext, ActionsProvider };
