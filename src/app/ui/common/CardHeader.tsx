import React, { ReactNode } from "react";

interface ICardHeaderProps {
  children?: ReactNode;
}
function CardHeader({ children }: ICardHeaderProps) {
  return (
    <div className="py-6 mx-auto flex flex-col gap-1">
      {children}
    </div>
  );
}

export default CardHeader;
