import React from "react";

interface IChipProps {
  text: string;
}
function Chip({ text }: IChipProps) {
  return (
    <div className="w-fit bg-green-50 border-green-200 border rounded-full text-green-700 px-2">
      {text}
    </div>
  );
}

export default Chip;
