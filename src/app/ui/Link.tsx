import React, { ReactNode } from "react";

interface ILinkProps {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  to: string;
  variant?: "link" | "button";
}

function Link({
  children,
  leftIcon = null,
  rightIcon = null,
  to,
  variant = "link",
}: ILinkProps) {
  return (
    <a
      className={
        variant === "link"
          ? "flex items-center text-indigo-700 hover:text-indigo-900 hover:underline font-semibold"
          : "bg-indigo-700 hover:bg-indigo-900 text-white rounded-md w-full py-2 text-center"
      }
      href={to}
    >
      {!!leftIcon && <span className="mr-1">{leftIcon}</span>}
      {children}
      {!!rightIcon && <span className="ml-1">{rightIcon}</span>}
    </a>
  );
}

export default Link;
