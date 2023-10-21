import React from "react";

interface CustomButtonProps {
  isFilled?: boolean;
  color?: string;
  background?: string;
  size?: string;
  isActive?: boolean;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  // color,
  // background,
  // size,
  children,
  // isFilled = false,
  // isActive = true,
}) => {
  return (
    <button
      className={`cursor-pointer bg-transparent px-6 py-2 border border-black rounded-full font-medium text-sm text-black`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
