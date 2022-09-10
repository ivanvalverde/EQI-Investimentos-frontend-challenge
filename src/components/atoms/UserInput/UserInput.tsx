import React from "react";
import { NumericFormat } from "react-number-format";
import { UserInputs } from "../../../shared/types";

interface IUserInputProps {
  isCurrency?: boolean;
  isPercentage?: boolean;
  fieldName: string;
  label: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<UserInputs>>;
}

export const UserInput = ({
  isCurrency,
  isPercentage,
  fieldName,
  label,
  text,
  setText,
}: IUserInputProps): JSX.Element => {
  return (
    <div className="flex flex-col my-5">
      <label htmlFor={fieldName} className="text-xs my-2">
        {label}
      </label>

      <NumericFormat
        maxLength={!isCurrency && !isPercentage ? 3 : undefined}
        prefix={isCurrency ? "R$ " : ""}
        suffix={isPercentage ? "%" : ""}
        thousandSeparator="."
        decimalSeparator=","
        decimalScale={!isCurrency && !isPercentage ? 0 : 2}
        name={fieldName}
        value={text}
        onValueChange={(e) => {
          setText((prev) => ({ ...prev, [fieldName]: e.formattedValue }));
        }}
        type="text"
        className="bg-noColor outline-none border-b"
      />
    </div>
  );
};
