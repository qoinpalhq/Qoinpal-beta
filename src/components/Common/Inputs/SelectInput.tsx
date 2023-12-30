import React, { useState } from 'react'
interface CurrencyOption {
  id: string;
  name: string;
  logo?: string;
}
interface SelectInputProps {
  options: CurrencyOption[];
  selectedCurrency: string;
  onSelectCurrency: (currency: string) => void;
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  hasBorder?: boolean;
  isRounded?: boolean;
  customClassName?: string;
}

const SelectInput:React.FC<SelectInputProps> = ({
  options,
  selectedCurrency,
  onSelectCurrency,
  size = 'medium',
  backgroundColor = 'white',
  hasBorder = true,
  isRounded = true,
  customClassName = ""
}) => {

  const [dropdownVisible, setDropdownVisible] = useState <boolean > (false);
  const handleSelect = (currency: string) => {
    setDropdownVisible(false);
    onSelectCurrency(currency);
  };

  const containerClasses = `relative inline-block text-left ${customClassName}`;
  const buttonClasses = `inline-flex justify-center items-center w-full px-4 py-2 gap-1 text-lg font-medium focus:outline-none ${sizeClasses()} ${borderClasses()} ${roundedClasses()} ${backgroundColor}`;
  const dropdownClasses = `origin-top-right bg-white absolute left-0 mt-5 z-50 w-48 ${roundedClasses()}`;

  function sizeClasses() {
    switch (size) {
      case "small":
        return "text-sm";
      case "large":
        return "text-xl";
      default:
        return "text-lg";
    }
  }

  function borderClasses() {
    return hasBorder ? "border border-gray-300" : "";
  }

  function roundedClasses() {
    return isRounded ? "rounded-md" : "";
  }

  return (
    <div className={containerClasses}>
      <div>
        <button
          type="button"
          className={buttonClasses}
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          <div
            className={`flex gap-x-1 items-center ${
              backgroundColor !== "white" ? "text-white" : ""
            }`}
          >
            <img
              src={
                options?.find((option) => option.name === selectedCurrency)?.logo
              }
              className="w-8 h-8"
            />
            <p className="overflow-hidden whitespace-nowrap text-ellipsis">
              {selectedCurrency}
            </p>
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9401 7.56396L10.0501 12.454C9.47256 13.0315 8.52756 13.0315 7.95006 12.454L3.06006 7.56396"
                stroke="#111111"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
      {dropdownVisible && (
        <div className={dropdownClasses}>
          <div className="py-1">
            {options?.map(({ id, name, logo }) => (
              <div
                key={id}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer flex gap-2"
                onClick={() => handleSelect(name)}
              >
                <img src={logo} className="w-6 h-6" />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectInput