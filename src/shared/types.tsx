export type ButtonObj = {
  name: string;
  leftBorderRound?: boolean;
  rightBorderRound?: boolean;
  isActive: boolean;
};

export type BtnActive = {
  [key: string]: boolean;
};

export type UserInputs = {
  initialContribution: string;
  term: string;
  ipca: string;
  montlyContribution: string;
  profitability: string;
  cdi: string;
};

export type ApiSimulationResponse = {
  tipoIndexacao: string;
  tipoRendimento: string;
  valorFinalBruto: number;
  aliquotaIR: number;
  valorPagoIR: number;
  valorTotalInvestido: number;
  valorFinalLiquido: number;
  ganhoLiquido: number;
  graficoValores: {
    comAporte: ContributionTimes;
    semAporte: ContributionTimes;
  };
};

type ContributionTimes = {
  "0": number;
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
  "6": number;
  "7": number;
  "8": number;
  "9": number;
  "10": number;
};

export type ApiIndicatorsResponse = {
  nome: string;
  valor: number;
};

export type KeysContributionTimes = keyof ContributionTimes;

export type ChartInfo = {
  name: keyof ContributionTimes;
  "Com aporte": number;
  "Sem aporte": number;
};
