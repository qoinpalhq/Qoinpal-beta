import Nav from "../../components/Nav/OnboardingNav";
import { Form } from "../../components/Onboarding/sections";
import { useFormContext } from "../../context/LoginContext";
import {
  ENTER_DISPLAY_NAME,
  GET_STARTED,
  LOGIN,
  VERIFY_EMAIL,
} from "../../constants/sectionNames";
import sections from "./data";

function Login() {
  const { currSection } = useFormContext();
  return (
    <div className="w-full flex justify-center items-center ">
      <div id="wrapper" className=" w-[85%] md:w-[90%] min-h-screen">
        <Nav />
        <div
          id="body"
          className="w-full flex items-center justify-center min-h-[calc(100vh-80px)]"
        >
          <div className="w-[60%] flex flex-col items-center justify-center  ">
            {sections.map((formDataItem, index) => (
              <Form key={index} {...formDataItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
