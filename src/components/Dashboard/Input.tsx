import React from "react";
import arrowdown from "../../assets/Images/Icons/arrow-down.svg";
import infoCircle from "../../assets/Images/Icons/info-circle.svg";

function Input({ title, icon }) {
  return (
    <div>
      <div className="text-black text-base font-medium">{title}</div>
      <div className="flex w-full bg-white rounded-3xl border py-2 border-neutral-5">
        <input
          className="text-black text-lg font-md w-[70%] bg-transparent indent-6 outline-none"
          placeholder="900.00"
        />
        <div className="aria-hidden w-1 h-[60px] bg-neutral-4"></div>
        <div className="flex gap-3 self-center">
          <img src={icon} alt="" className="w-6 h-6 items-center ml-6 mt-4" />
          <span className="my-4">USDT</span>
          <img
            src={arrowdown}
            alt=""
            className=" w-[18px] h-[18px] my-[19px]"
          />
        </div>
      </div>

      <div className="mt-4 px-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <p className="text-neutral-8">Exchange Rate</p>
          <img src={infoCircle} aria-hidden alt="" className="w-4 h-4" />
        </div>
        <span className="text-neutral-8">1USDT = NGN 980</span>
      </div>
    </div>
  );
}

export default Input;
