import React from "react";

interface ISimulatorContainerProps {
  firstChild: JSX.Element;
  secondChild: JSX.Element;
}

export const SimulatorContainer = ({
  firstChild,
  secondChild,
}: ISimulatorContainerProps): JSX.Element => {
  return (
    <div className="flex p-3">
      <div className="flex w-2/5 justify-center">{firstChild}</div>
      <div className="flex w-3/5 justify-center">{secondChild}</div>
    </div>
  );
};
