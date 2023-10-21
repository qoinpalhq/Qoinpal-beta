import React from "react";

interface CustomButtonProps {
  isFilled?: boolean;
  color?: string;
  background?: string;
  size?: "big" | "small";
  isActive?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  color = "text-black",
  background,
  size,
  children,
  isFilled,
  disabled,
}) => {
  function getWidth() {
    if (size === "big") return "px-24 py-4";
    return "px-6 py-2";
  }
  const bg = disabled
    ? "bg-neutral-7"
    : isFilled
    ? background
    : "bg-transparent";
  const border = isFilled ? "none" : "border border-black";
  return (
    <button
      className={`cursor-pointer  ${color} ${bg} ${getWidth()} ${border} rounded-full font-medium text-sm text-black`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
