import React, { useState } from "react";
import CurrencyAmountInput from "../../Inputs/CurrencyAmountInput";
import cryptoCurrencies from "./cryptoCurrencies.js";

interface CryptoAmountFormProps {

}

const CryptoAmountForm: React.FC<CryptoAmountFormProps> = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USDT");

  const handleSelect = (currency: string) => {
    setSelectedCurrency(currency);
  };

  return (
    <div className="flex flex-col gap-6 w-full items-center">
      <CurrencyAmountInput
        type="sender"
        selectedCurrency={selectedCurrency}
        cryptoCurrencies={cryptoCurrencies}
        handleSelect={handleSelect}
        placeholder="100"
      />
      <CurrencyAmountInput
        type="receiver"
        selectedCurrency={selectedCurrency}
        cryptoCurrencies={cryptoCurrencies}
        handleSelect={handleSelect}
        placeholder="98000"
      />
        <div className="flex w-[50%] justify-between">
          <p className="underline">Total Cost</p>
          <p>$70</p>
        </div>
    </div>
  );
};

export default CryptoAmountForm;