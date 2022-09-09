import { labels } from "./enums";
import { ButtonObj } from "./types";

export const btnsTerm: ButtonObj[] = [
  {
    name: labels.GROSS_INCOME,
    leftBorderRound: true,
    isActive: true,
  },
  {
    name: labels.NET_INCOME,
    rightBorderRound: true,
    isActive: false,
  },
];

export const btnsIndexingTypes: ButtonObj[] = [
  {
    name: labels.PRE,
    leftBorderRound: true,
    isActive: false,
  },
  {
    name: labels.POST,
    isActive: true,
  },
  {
    name: labels.FIXED,
    rightBorderRound: true,
    isActive: false,
  },
];

export const allBtns: ButtonObj[] = [
    ...btnsTerm,
    ...btnsIndexingTypes
]
