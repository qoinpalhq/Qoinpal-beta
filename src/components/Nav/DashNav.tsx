import riiArrow from "../../assets/Images/Icons/arrow-rightt.svg";
import { useState } from "react";

function DashNav() {
  const [page, setPage] = useState(1);
  const data = [
    { id: 1, title: "Amount" },
    { id: 2, title: "recipient" },
    { id: 3, title: "summary" },
    { id: 4, title: "send" },
  ];

  return (
    <div
      id="wrapper"
      className="flex w-full h-[6rem] bg-white items-center justify-center"
    >
      <div id="nav" className="flex items-center gap-4 justify-center">
        {data.map((x, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className={`w-6 h-6 ${
                page === x.id ? "bg-black" : "bg-neutral-7"
              } rounded-full flex items-center justify-center`}
            >
              <div className="text-white text-[10px] font-bold">
                {index + 1}
              </div>
            </div>

            <div
              className={`${
                page === x.id ? "text-black" : "text-neutral-7"
              } text-sm font-medium capitalize`}
            >
              {x.title}
            </div>

            <img src={riiArrow} alt="" aria-hidden />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashNav;
