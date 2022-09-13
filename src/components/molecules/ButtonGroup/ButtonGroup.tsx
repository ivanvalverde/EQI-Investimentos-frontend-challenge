import React, { useContext, useState } from "react";
import CheckIcon from "../../atoms/CheckIcon";
import InfoIcon from "../../atoms/InfoIcon";
import { BtnActive, ButtonObj } from "../../../shared/types";
import { ActionsContext } from "../../context/ActionsContext";
import { labels } from "../../../shared/enums";

interface IButtonGroupProps {
  label: string;
  buttons: ButtonObj[];
}

export const ButtonGroup = ({
  buttons,
  label,
}: IButtonGroupProps): JSX.Element => {
  const { setBtnsPressed } = useContext(ActionsContext);
  const isActiveInitialValue = (): BtnActive => {
    const isActiveObj: BtnActive = {};
    buttons.forEach((btn) => {
      isActiveObj[btn.name] = btn.isActive;
    });
    return isActiveObj;
  };
  const [isActive, setIsActive] = useState<BtnActive>(isActiveInitialValue());

  const onPress = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { name } = e.currentTarget;
    const isActiveList = Object.keys(isActive);
    const newIsActiveObj: BtnActive = {};
    isActiveList.forEach((elem) => {
      newIsActiveObj[elem] = false;
    });
    setIsActive({ ...newIsActiveObj, [name]: true });
    setBtnsPressed((prevState) => ({
      ...prevState,
      ...newIsActiveObj,
      [name]: true,
    }));
  };
  return (
    <div className="flex flex-col mt-4">
      <div className="flex justify-between my-2">
        <label className="laptop:text-xs mobile:text-base">{label}</label>
        <div title={labels.TOOLTIP_TEXT + label}>
          <InfoIcon />
        </div>
      </div>
      <div className="flex">
        {buttons.map((btn, index) => {
          return (
            <button
              data-testid={`button${index}`}
              key={`${btn.name + index}`}
              name={`${btn.name}`}
              className={`border grow ${
                btn.leftBorderRound && "rounded-l-xl"
              } ${btn.rightBorderRound && "rounded-r-xl"} p-4 ${
                isActive[btn.name]
                  ? "bg-lightOrange text-coreWhite border-coreBlack"
                  : ""
              }`}
              type="button"
              onClick={(e) => {
                onPress(e);
              }}
            >
              <div className="flex items-center justify-center">
                <div
                  className={`${isActive[btn.name] ? "visible" : "invisible"}`}
                >
                  <CheckIcon />
                </div>
                <p>{btn.name}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
