import React, { ReactNode } from "react";

interface ICard {
  children: ReactNode;
  shadow?: boolean;
}

function Card({ children, shadow = false }: ICard) {
  return (
    <article
      id="card"
      className={`w-[340px] bg-white rounded-lg overflow-hidden ${shadow ? "drop-shadow-3xl" : undefined}`}
    >
      {children}
    </article>
  );
}

export default Card;
