// import underline from "../assets/Images/Icons/underline.svg"
import tether from "../assets/Images/Icons/Tether 1.png";
import arrowdown from "../assets/Images/Icons/arrow-down.svg";
import infoCircle from "../assets/Images/Icons/info-circle.svg";
import NGN from "../assets/Images/Icons/NGN.png";
const Body = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-[154px]">
        <div className="flex pt-[112px] w-[64px] h-[24px] text-[#111111] pl-[425px] text-[20px] font-medium font-['Red Hat Display'] leading-normal ">
          Crypto
        </div>
        <div className="flex pt-[112px] w-[46px] h-[24px] text-[#111111] text-[20px] font-medium font-['Red Hat Display'] leading-normal">
          Cash
        </div>
      </div>

      <div className="text-black text-base font-medium font-['Red Hat Display'] pl-[231px] pt-[69px] leading-tight">
        You send exactly
      </div>

      <div className="flex w-[626px] h-[85px] bg-white rounded-[20px] mt-2 ml-[220px] border border-[#BFBFBF] gap-[332px]">
        <p className="flex items-center pl-[37px] pt-[29px] pb-[27px]">
          900.00
        </p>
        <div className="flex w-[143px] h-[56px] border-l-2 border-[#BFBFBF] mt-4 mb-[13px] gap-3">
          <img src={tether} alt="" className="w-6 h-6 items-center ml-6 mt-4" />
          <p className="flex w-[53px] h-[24px] my-4">USDT</p>
          <img
            src={arrowdown}
            alt=""
            className="flex w-[18px] h-[18px] my-[19px]"
          />
        </div>
      </div>

      <div className="flex ml-[253px] mt-4 w-[559px] h-[19px] gap-[293px] whitespace-nowrap">
        <div className="flex items-center gap-2">
          <p className="text-[#595959]">Exchange Rate</p>
          <img src={infoCircle} alt="" className="w-4 h-4" />
        </div>
        <div className="flex items-center">
          <p className="text-[#595959]">1USDT = NGN 980</p>
        </div>
      </div>

      <div className="text-black text-base font-medium font-['Red Hat Display'] pl-[231px] pt-[50px] leading-tight">
        The recipient receives
      </div>

      <div className="flex w-[626px] h-[85px] bg-white rounded-[20px] mt-2 ml-[220px] border border-[#BFBFBF] gap-[332px]">
        <p className="flex items-center pl-[37px] pt-[29px] pb-[27px]">
          900.00
        </p>
        <div className="flex w-[143px] h-[56px] border-l-2 border-[#BFBFBF] mt-4 mb-[13px] gap-3">
          <img src={NGN} alt="" className="w-6 h-6 items-center ml-6 mt-4" />
          <p className="flex w-[53px] h-[24px] my-4">NGN</p>
          <img
            src={arrowdown}
            alt=""
            className="flex w-[18px] h-[18px] my-[19px]"
          />
        </div>
      </div>

      <div className="flex ml-[253px] mt-4 w-[559px] h-[19px] gap-[390px] whitespace-nowrap">
        <div className="flex items-center gap-2">
          <p className="text-[#595959] capitalize">Transaction fee</p>
          <img src={infoCircle} alt="" className="w-4 h-4" />
        </div>
        <div className="flex items-center">
          <p className="text-[#595959]">$6.2</p>
        </div>
      </div>

      <div className="flex ml-[253px] mt-6 w-[559px] h-[19px] gap-[432px] whitespace-nowrap">
        <div className="flex items-center">
          <p className="text-[black] capitalize underline w-[72px] h-[19px] ">
            Total Cost
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-[black] font-bold font-['Red Hat Display'] ">
            $906.2
          </p>
        </div>
      </div>

      <div className="ml-[226px] mt-[98px] w-[614px] h-[53px] px-16 py-4 bg-[#CCFB00] rounded-[100px] justify-center items-center gap-2.5 inline-flex">
        <div className="text-neutral-900 text-base font-medium font-['Red Hat Display']">
          Continue - Recipient Details
        </div>
      </div>

      <div className="text-center text-neutral-400 text-xs font-medium font-['Red Hat Display'] leading-[18px] tracking-wide mt-8 mb-[117px]">
        By checking this box, I acknowledge and agree to the terms and services
        <br />
        on behalf of Qoinpal
      </div>
    </div>
  );
};
export default Body;
