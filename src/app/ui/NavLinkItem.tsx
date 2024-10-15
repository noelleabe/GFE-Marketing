import React from "react";

export interface INavLinkItem {
  title: string;
  to: string;
}
export default function NavLinkItem({ title, to }: INavLinkItem) {
  return (
    <li className="mb-2">
      <a href={to} className="hover:underline hover:text-pink-500">
        {title}
      </a>
    </li>
  );
}
