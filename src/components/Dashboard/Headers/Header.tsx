import React from "react";
import notificationIcon from "../../../assets/Images/Icons/notification.svg"

interface HeaderProps {
  type:string
}
const Header:React.FC <HeaderProps> = ({type}) => {
  return (
    <header className="md:h-[10vh] md:bg-white md:w-full md:flex md:justify-center md:items-center">
      {type === "notification" && 
      <div className=" ml-auto pr-20 ">
        <div className="bg-white p-3 drop-shadow-lg rounded-full">
          <img src={notificationIcon} alt="notificationIcon"/>
        </div>
        </div>
        }
      {/* {type === "progress" && <ProgressComponent />} */}
    </header>
  );
}

export default Header