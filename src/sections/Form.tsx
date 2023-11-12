import { CustomButton, CustomInput, PostScript, Title } from "../components";
import { useFormContext } from "../context/LoginContext";
import arrow from "../assets/Images/Icons/arrow-right.svg";
interface FormProps {
  title: string;
  name: string;
  buttonText: string;
  href: string;
  linkText?: string;
  linkColor?: string;
  normalText?: string;
  className?: string;
}

function Form({
  title,
  name: inputName,
  buttonText,
  href,
  linkText,
  normalText,
  linkColor,
  className,
}: FormProps) {
  const { formData, handleInputChange } = useFormContext();
  return (
    <div className={`w-full ${className} flex flex-col items-center gap-6 `}>
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
        {buttonText}
      </CustomButton>
      <PostScript
        href={href}
        linkText={linkText}
        normalText={normalText}
        linkColor={linkColor}
        className="pt-8"
        icon={arrow}
      />
    </div>
  );
}

export default Form;
