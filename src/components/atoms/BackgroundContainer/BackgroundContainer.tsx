import React from "react";

interface IBackgroundContainerProps {
    children: JSX.Element,
}

export const BackgroundContainer = ({ children }: IBackgroundContainerProps): JSX.Element => {
  return (
    <div className="bg-lightGrey absolute top-0 bottom-0 left-0 right-0">{children}</div>
  );
};
