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
    <div data-testid="container" className="flex laptop:flex-row laptop:p-3 mobile:flex-col mobile:p-0">
      <div className="flex laptop:w-2/5 justify-center mobile:w-full">{firstChild}</div>
      <div className="flex laptop:w-3/5 justify-center mobile:w-full">{secondChild}</div>
    </div>
  );
};
