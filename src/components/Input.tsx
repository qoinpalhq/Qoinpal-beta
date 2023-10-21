import React, { ChangeEvent } from "react";

interface CustomInputProps {
  type: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  placeholder,
  onChange,
  className,
  value,
}) => {
  return (
    <input
      className={className}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default CustomInput;
