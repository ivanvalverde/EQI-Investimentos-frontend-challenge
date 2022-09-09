import React from "react";
import { labels } from "../../../shared/enums";

interface IActionButtonProps {
  label: string;
  callBack: () => void;
  disabled?: boolean;
}

export const ActionButton = ({
  label,
  disabled,
  callBack,
}: IActionButtonProps): JSX.Element => {
  return (
    <div className="flex my-3">
      <button
        className={`border rounded-r-xl rounded-l-xl p-4 w-[240px] mx-3 font-bold ${
          label === labels.SIMULATE_LABEL
            ? disabled
              ? "bg-darkGrey"
              : "bg-lightOrange"
            : "bg-noColor"
        }`}
        type="button"
        onClick={() => {
          callBack();
        }}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};
