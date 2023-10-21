import { CustomButton, CustomInput, Redirect, Title } from "../components";
import { useFormContext } from "../context/LoginContext";
import arrow from "../assets/Images/Icons/arrow-right.svg";
interface FormProps {
  title: string;
  name: string;
}

function Form({ title, name: inputName }: FormProps) {
  const { formData, handleInputChange } = useFormContext();
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Title title={title} />
      <CustomInput
        value={formData[inputName]}
        name={inputName}
        placeholder={`enter your ${inputName} here`}
        type="text"
        onChange={handleInputChange}
      />
      <CustomButton
        disabled={!formData[inputName]}
        color={!formData[inputName] ? "text-white" : "text-black"}
        background="bg-primary"
        isFilled
        size="big"
      >
        Log in
      </CustomButton>
      <Redirect
        href="#"
        linkText="Create an account"
        normalText="Don't have an account?"
        linkColor="text-secondary"
        className="pt-8"
        icon={arrow}
      />
    </div>
  );
}

export default Form;
