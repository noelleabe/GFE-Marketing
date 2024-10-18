import React, { ReactNode } from "react";
import CardHeader from "../common/CardHeader";

interface ICardProps {
  children?: ReactNode;
}
function Card({ children }: ICardProps) {
  return (
    <article>
      <CardHeader>{children}</CardHeader>
    </article>
  );
}

export default Card;
