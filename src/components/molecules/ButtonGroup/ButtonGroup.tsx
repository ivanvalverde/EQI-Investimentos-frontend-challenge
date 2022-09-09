import React, { useState } from "react";
import CheckIcon from "../../atoms/CheckIcon";
import InfoIcon from "../../atoms/InfoIcon";

interface IButtonGroupProps {
  label: string;
  buttons: ButtonObj[];
}

type ButtonObj = {
  name: string;
  leftBorderRound?: boolean;
  rightBorderRound?: boolean;
};

type BtnActive = {
  [key: string]: boolean;
};

export const ButtonGroup = ({
  buttons,
  label,
}: IButtonGroupProps): JSX.Element => {
  const isActiveInitialValue = (): BtnActive => {
    const isActiveObj: BtnActive = {};
    buttons.forEach((btn, index) => {
      isActiveObj[btn.name + index] = index === 0 ? true : false;
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
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <label className="text-xs">{label}</label>
        <InfoIcon />
      </div>
      <div className="flex">
        {buttons.map((btn, index) => {
          const btnName = btn.name + index;
          return (
            <button
              key={`${btnName}`}
              name={`${btnName}`}
              className={`border grow ${btn.leftBorderRound && "rounded-l-xl"} ${
                btn.rightBorderRound && "rounded-r-xl"
              } p-4 ${
                isActive[btnName]
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
                  className={`${isActive[btnName] ? "visible" : "invisible"}`}
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
