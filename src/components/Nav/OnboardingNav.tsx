import { CustomButton } from "../Utilities";

function OnboardingNav() {
  return (
    <nav className="w-full flex justify-between items-center pt-10 h-20 ">
      <div className="">
        <img src="/src/assets/images/brand/logo.svg" alt="" />
      </div>

      <CustomButton>Need help?</CustomButton>
    </nav>
  );
}

export default OnboardingNav;
