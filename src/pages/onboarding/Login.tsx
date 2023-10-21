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
    <div className="w-full flex justify-center items-center ">
      <div id="wrapper" className=" w-[85%] md:w-[90%] min-h-screen">
        <Nav />
        <div
          id="body"
          className="w-full flex items-center justify-center min-h-[calc(100vh-80px)]"
        >
          <div className="w-[60%] flex items-center justify-center ">
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
