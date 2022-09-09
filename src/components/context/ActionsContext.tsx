import React, { createContext, useState } from "react";
import { allBtns } from "../../shared/constants";
import { ApiResponse, BtnActive, UserInputs } from "../../shared/types";

interface ActionsContextProps {
  text: UserInputs;
  setText: React.Dispatch<React.SetStateAction<UserInputs>>;
  btnsPressed: BtnActive;
  setBtnsPressed: React.Dispatch<React.SetStateAction<BtnActive>>;
  apiData: ApiResponse;
  setApiData: React.Dispatch<React.SetStateAction<ApiResponse>>;
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
  const [apiData, setApiData] = useState<ApiResponse>({} as ApiResponse);

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
