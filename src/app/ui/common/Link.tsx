import React, { ReactNode } from "react";

interface ILinkProps {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  style?: "primary" | "secondary";
  to: string;
  variant?: "link" | "button";
}

function Link({
  children,
  leftIcon = null,
  rightIcon = null,
  style = "primary",
  to,
  variant = "link",
}: ILinkProps) {
  let className;
  let bgColor;
  let textColor;
  let hoverColor;

  if (variant === "link") {
    className = `flex items-center text-indigo-700 hover:text-indigo-900 hover:underline font-semibold`;
  } else {
    console.log("style", style);
    if (style === "primary") {
      bgColor = "bg-indigo-700";
      hoverColor = "hover:bg-indigo-900";
      textColor = "text-white";
    } else {
      bgColor = "bg-white";
      hoverColor = "hover:bg-neutral-100";
      textColor = "text-neutral-900";
    }

    className = `${bgColor} ${hoverColor} ${textColor} px-6 py-4 font-medium border border-neutral-200 rounded-[4px] text-center drop-shadow-sm`;
  }

  return (
    <a className={className} href={to}>
      <div className="flex flex-row items-center justify-between">
        <div className={`mr-1 ${variant === "button" ? "min-w-6" : undefined}`}>
          {leftIcon}
        </div>
        <div>{children}</div>
        <div className={`ml-1 ${variant === "button" ? "min-w-6" : undefined}`}>
          {rightIcon}
        </div>
      </div>
    </a>
  );
}

export default Link;
