import React, { useState } from "react";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import { CustomButton, PostScript } from "../../components/Common";
import useMultistepForm from "../../hooks/useMultistepForm";
import CrptoAmountForm from "../../components/Dashboard/Forms/Crypto/CrptoAmountForm";
import CryptoRecipientInformationForm from "../../components/Dashboard/Forms/Crypto/CryptoRecipientInformationForm";
import CashRecipientInformationForm from "../../components/Dashboard/Forms/Cash/CashRecipientInformationForm";
import CashAmountForm from "../../components/Dashboard/Forms/Cash/CashAmountForm";
import SummaryForm from "../../components/Dashboard/Forms/Crypto/SummaryForm";
import SendForm from "../../components/Dashboard/Forms/Crypto/SendForm";
type PaymentMethod = "cash" | "crypto";
const SendPage: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("crypto");

  const handlePaymentMethodChange = (newPaymentMethod) => {
    setPaymentMethod(newPaymentMethod);
  };

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm(() => {
      if (paymentMethod.toLowerCase() === "crypto") {
        return [<CrptoAmountForm />, <CryptoRecipientInformationForm />,<SummaryForm/>,<SendForm/>];
      } else {
        return [<CashAmountForm />, <CashRecipientInformationForm />];
      }
    });
    

  return (
    <DashboardLayout showHeader={true} showSidebar={true} headerType="progress">
      <div className="flex justify-center w-full items-center flex-col gap-4">
        {isFirstStep && (
          <section className="mt-16 flex w-full justify-center gap-x-20">
            <CustomButton
              onClickFunction={() => handlePaymentMethodChange("crypto")}
            >
              Crypto
            </CustomButton>
            <CustomButton
              onClickFunction={() => handlePaymentMethodChange("cash")}
            >
              Cash
            </CustomButton>
          </section>
        )}
        {!isFirstStep && <button onClick={back} className="underline capitalize absolute left-4 cursor-pointer">Back</button>}
        <section className="flex w-full justify-center mt-10">{step}</section>
        <div className="w-[60%] mt-10">
          <CustomButton
            onClickFunction={next}
            size="big"
            isFilled={true}
            className="bg-primary w-full"
          >
            Continue
          </CustomButton>
        </div>
        {isFirstStep && (
          <PostScript normalText="By checking this box, I acknowledge and agree to the terms and services on behalf of Qoinpal" />
        )}
      </div>
    </DashboardLayout>
  );
};

export default SendPage;
