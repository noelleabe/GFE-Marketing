import React, { ReactNode } from "react";

interface ICardContentProps {
  children?: ReactNode;
}
function CardContent({ children }: ICardContentProps) {
  return <div className="flex flex-col px-4">{children}</div>;
}

export default CardContent;
