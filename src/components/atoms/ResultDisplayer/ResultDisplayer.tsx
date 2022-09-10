import React from "react";

interface IResultDisplayerProps {
  title: string;
  value: number;
  isPercentage?: boolean;
  isColorful?: boolean;
}

export const ResultDisplayer = ({
  title,
  value,
  isPercentage,
  isColorful,
}: IResultDisplayerProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center bg-intermediateGrey drop-shadow-lg w-[200px] h-[80px] justify-center mx-5 my-3">
      <h3 className="font-bold text-sm mb-3">{title}</h3>
      <p
        className={`text-sm mt-3 ${
          isColorful ? (value > 0 ? "text-lightGreen" : "text-warningRed") : ""
        }`}
      >
        {!isPercentage && "R$ "}
        {value}
        {isPercentage && "%"}
      </p>
    </div>
  );
};
