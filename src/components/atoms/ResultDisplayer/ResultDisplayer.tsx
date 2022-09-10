import React from "react";

interface IResultDisplayerProps {
  title: string;
  value: number;
}

export const ResultDisplayer = ({
  title,
  value,
}: IResultDisplayerProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center bg-intermediateGrey drop-shadow-lg w-[200px] h-[80px] justify-center mx-5 my-3">
      <h3 className="font-bold text-sm mb-3">{title}</h3>
      <p className="text-sm mt-3">{value}</p>
    </div>
  );
};
