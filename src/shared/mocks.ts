import {
  ApiSimulationResponse,
  BtnActive,
  ButtonObj,
  UserInputs,
} from "./types";

export const mockCdi = "10%";
export const mockIpca = "20%";
export const mockBtnName = "pre";
export const mockTitleH1 = "Título";
export const mockTitleH2 = "Título";
export const mockUserInputFieldName = "Nome do campo";
export const mockUserInputlabel = "Etiqueta";
export const mockUserInputText = "Texto";
export const mockIsCurrencyValue = "R$ 10";
export const mockIsPercentageValue = "10%";
export const mockIsCurrencyCorrectMask = "R$ 10.000.000,00";
export const mockIsNumber = "10";
export const mockFirsctChild = "Primeiro";
export const mockSecondChild = "Segundo";
export const mockResultDisplayerTitle = "Título";
export const mockResultDisplayerValue = 20;
export const mockResultDisplayerValueIsCurrency = "R$ 20";
export const mockResultDisplayerValueIsCurrencyNegative = "R$ -20";
export const mockResultDisplayerValueIsPercentage = "20%";
export const mockBackgroundContainerText = "Texto";
export const mockActionButtonLabel = "Botão";
export const mockButtonGroup = "Botões";
export const mockFirstBtnName = "First Button"
export const mockSecondBtnName = "Second Button"

export const btnsGroupMock: ButtonObj[] = [
  {
    name: mockFirstBtnName,
    leftBorderRound: true,
    isActive: true,
  },
  {
    name: mockSecondBtnName,
    rightBorderRound: true,
    isActive: false,
  },
];

export const mockBtnsPressed: BtnActive = {
  Bruto: true,
  Líquido: false,
  Pré: true,
  Pós: false,
  Fixado: false,
};

export const mockContextPropsInitialState = {
  apiData: {} as ApiSimulationResponse,
  btnsPressed: {} as BtnActive,
  text: {
    cdi: mockCdi,
    initialContribution: "",
    ipca: mockIpca,
    montlyContribution: "",
    profitability: "",
    term: "",
  } as UserInputs,
  setText: (() => {}) as React.Dispatch<React.SetStateAction<UserInputs>>,
  setBtnsPressed: (() => {}) as React.Dispatch<React.SetStateAction<BtnActive>>,
  setApiData: (() => {}) as React.Dispatch<
    React.SetStateAction<ApiSimulationResponse>
  >,
};

export const mockContextPropsFilledForm = (mock: () => void) => {
  return {
    apiData: {} as ApiSimulationResponse,
    btnsPressed: mockBtnsPressed,
    text: {
      cdi: mockCdi,
      initialContribution: "R$ 200",
      ipca: mockIpca,
      montlyContribution: "R$ 100",
      profitability: "R$ 300",
      term: "23",
    } as UserInputs,
    setText: () => {},
    setBtnsPressed: () => {},
    setApiData: mock,
  };
};

export const mockContextPropsFilledFormBtnGroup = (mock: () => void) => {
  return {
    apiData: {} as ApiSimulationResponse,
    btnsPressed: mockBtnsPressed,
    text: {
      cdi: mockCdi,
      initialContribution: "R$ 200",
      ipca: mockIpca,
      montlyContribution: "R$ 100",
      profitability: "R$ 300",
      term: "23",
    } as UserInputs,
    setText: () => {},
    setBtnsPressed: mock,
    setApiData: () => {},
  };
};

export const mockIndexingType = "pre";
export const mockIncomeType = "bruto";
export const mockGrossFinalValue = 2048.09;
export const mockTaxRate = 0;
export const mockAmmountPaidInIr = 0;
export const mockTotalInvestedAmmount = 1000;
export const mockNetFinalValue = 2048.09;
export const mockNetGain = 1048.08;

export const mockSimulationsResponse: { data: ApiSimulationResponse[] } = {
  data: [
    {
      tipoIndexacao: mockIndexingType,
      tipoRendimento: mockIncomeType,
      valorFinalBruto: mockGrossFinalValue,
      aliquotaIR: mockTaxRate,
      valorPagoIR: mockAmmountPaidInIr,
      valorTotalInvestido: mockTotalInvestedAmmount,
      valorFinalLiquido: mockNetFinalValue,
      ganhoLiquido: mockNetGain,
      graficoValores: {
        comAporte: {
          "0": 1000,
          "1": 1103.2737397822002,
          "2": 1206.8855709147763,
          "3": 1310.8366002208454,
          "4": 1415.1279381469494,
          "5": 1519.7606987749612,
          "6": 1624.7359998339643,
          "7": 1730.0549627121918,
          "8": 1835.7187124690122,
          "9": 1941.7283778469462,
          "10": 2048.0850912837323,
        },
        semAporte: {
          "0": 1000,
          "1": 1003.273739782199,
          "2": 1006.5581969365594,
          "3": 1009.853406548969,
          "4": 1013.1594038201774,
          "5": 1016.4762240661724,
          "6": 1019.8039027185573,
          "7": 1023.1424753249288,
          "8": 1026.4919775492574,
          "9": 1029.8524451722683,
          "10": 1033.2239140918239,
        },
      },
    },
  ],
};

export const mockInputLowercaseAndAccentsFunc = "TÍTULO";
export const mockOutputLowercaseAndAccentsFunc = "titulo";
