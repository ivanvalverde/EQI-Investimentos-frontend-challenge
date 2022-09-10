import React from "react";

interface IBackgroundContainerProps {
    children: JSX.Element,
}

export const BackgroundContainer = ({ children }: IBackgroundContainerProps): JSX.Element => {
  return (
    <div className="bg-lightGrey h-full">{children}</div>
  );
};
