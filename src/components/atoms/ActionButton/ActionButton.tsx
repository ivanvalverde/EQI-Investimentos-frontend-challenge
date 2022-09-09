import React from "react";
import { labels } from "../../../constants/enums";

interface IActionButtonProps {
  label: string;
  callBack: () => void;
}

export const ActionButton = ({
    label,
  callBack,
}: IActionButtonProps): JSX.Element => {
  return (
    <div className="flex">
      <button
        className={`border rounded-r-xl rounded-l-xl p-4 grow ${
            label === labels.SIMULATE_LABEL ? "bg-darkGrey" : "bg-noColor"
        }`}
        type="button"
        onClick={() => {
          callBack();
        }}
      >
        {label}
      </button>
    </div>
  );
};
