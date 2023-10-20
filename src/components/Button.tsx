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
  isFilled = false,
  color,
  background,
  size,
  children,
  isActive,
}) => {
  return <button>{children}</button>;
};

export default CustomButton;
