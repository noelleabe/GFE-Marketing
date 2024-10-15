import React, { ReactNode } from "react";

interface ILinkProps {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  to: string;
}

function Link({ children, leftIcon = null, rightIcon = null, to }: ILinkProps) {
  return (
    <a
      className="flex items-center text-indigo-700 font-semibold hover:underline hover:text-indigo-900"
      href={to}
    >
      {!!leftIcon && <span className="mr-1">{leftIcon}</span>}
      {children}
      {!!rightIcon && <span className="ml-1">{rightIcon}</span>}
    </a>
  );
}

export default Link;
