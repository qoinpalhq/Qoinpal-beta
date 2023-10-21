import { CustomButton, CustomInput, Redirect, Title } from "../components";
import { useFormContext } from "../context/LoginContext";

interface FormProps {
  title: string;
  name: string;
}

function Form({ title, name }: FormProps) {
  const { formData, handleInputChange } = useFormContext();
  return (
    <div>
      <Title title={title} />
      <CustomInput
        value={formData[name]}
        placeholder={`enter your ${name} here`}
        type="text"
        onChange={handleInputChange}
      />
      <CustomButton>Log in</CustomButton>
      <Redirect
        href="#"
        linkText="Create an account"
        normalText="Don't have an account?"
        linkColor="text-secondary"
      />
    </div>
  );
}

export default Form;
