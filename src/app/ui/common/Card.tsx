import React, { ReactNode } from "react";

interface ICard {
  children: ReactNode;
  fullWidth?: boolean;
  shadow?: boolean;
}

function Card({ children, fullWidth = false, shadow = false }: ICard) {
  return (
    <article
      id="card"
      className={`w-${fullWidth ? "full" : "[340px]"} bg-white rounded-lg overflow-hidden ${shadow ? "drop-shadow-3xl" : undefined}`}
    >
      {children}
    </article>
  );
}

export default Card;
