import React from "react";
import { NumericFormat } from "react-number-format";

interface IUserInputProps {
  isCurrency?: boolean;
  isPercentage?: boolean;
  defaultValue?: number;
  fieldName: string;
  label: string;
}

export const UserInput = ({
  isCurrency,
  isPercentage,
  defaultValue,
  fieldName,
  label,
}: IUserInputProps): JSX.Element => {
  return (
    <div className="flex flex-col">
      <label htmlFor={fieldName} className="text-xs">
        {label}
      </label>

      <NumericFormat
        maxLength={!isCurrency && !isPercentage ? 3 : undefined}
        prefix={isCurrency ? "R$ " : ""}
        suffix={isPercentage ? "%" : ""}
        defaultValue={defaultValue}
        thousandSeparator="."
        decimalSeparator=","
        decimalScale={!isCurrency && !isPercentage ? 0 : 2}
        name={fieldName}
        type="text"
        className="bg-noColor outline-none border-b"
      />
    </div>
  );
};
