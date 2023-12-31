import infoCircle from "../assets/Images/Icons/info-circle.svg";
import NGN from "../assets/Images/Icons/NGN.png";
import tether from "../../assets/Images/Icons/Tether 1.png";

import Input from "./Input";
import { CustomButton, PostScript } from "../Utilities";
function Body() {
  return (
    <div
      id="wrapper"
      className="flex-col flex min-h-[calc(100vh-6rem)] w-full justify-center items-center"
    >
      <div className="flex flex-col w-[700px]">
        <div
          id="tab"
          className="flex gap-3 w-full text-black text-md font-medium "
        >
          <div className="cursor-pointer">
            <h2>Crypto</h2>
          </div>
          <div className="cursor-pointer">
            <h2>Cash</h2>
          </div>
        </div>

        <Input icon={tether} title="You send exactly" />
        <Input icon={tether} title="You send exactly" />

        <div className="mt-4 px-5 flex justify-between items-center">
          <span className="underline">Total Cost</span>
          <span className="text-neutral-8">$906.2</span>
        </div>
        <CustomButton
          className="my-5"
          size="big"
          isFilled
          background="bg-primary"
        >
          Continue to Receipt Details
        </CustomButton>

        <div className="flex justify-center">
          <PostScript
            className="text-neutral-7 text-center  w-[70%] "
            normalText="By checking this box, I acknowledge and agree to the terms and services on behalf of Qoinpal"
          />
        </div>
      </div>
    </div>
  );
}

export default Body;

