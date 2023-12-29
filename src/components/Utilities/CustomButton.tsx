import React from "react";

interface CustomButtonProps {
  isFilled?: boolean;
  color?: string;
  background?: string;
  size?: "big" | "small";
  isActive?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  textSize?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  color = "text-black",
  background,
  size,
  textSize = "text-sm",
  children,
  isFilled,
  className,
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
      className={`cursor-pointer ${className}  ${color} ${bg} ${getWidth()} ${border} rounded-full font-medium ${textSize} text-black`}
    >
      {children}
    </button>
  );
};

export default CustomButton;