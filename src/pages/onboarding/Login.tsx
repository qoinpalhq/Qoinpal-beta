import { Nav } from "../../components";
import { Form } from "../../sections";
import { useFormContext } from "../../context/LoginContext";
import {
  ENTER_DISPLAY_NAME,
  ENTER_EMAIL,
  VERIFY_EMAIL,
} from "../../constants/sectionNames";
function Login() {
  const { currSection } = useFormContext();
  return (
    <div className="w-full flex justify-center items-center">
      <div id="wrapper" className=" w-[85%] md:w-[90%]">
        <Nav />
        <div id="body" className="w-full items-center justify-center">
          <div>
            {currSection === ENTER_EMAIL && (
              <Form title="Welcome back, Log in here" name="email" />
            )}
            {/* {currSection === ENTER_DISPLAY_NAME && <Form />}
              {currSection === VERIFY_EMAIL && <Form />} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
