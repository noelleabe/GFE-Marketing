import React, { ReactNode } from "react";

interface IDescriptionProps {
  children: ReactNode;
}
function Description({ children }: IDescriptionProps) {
  return <div className="px-4 py-6">{children}</div>;
}

export default Description;
