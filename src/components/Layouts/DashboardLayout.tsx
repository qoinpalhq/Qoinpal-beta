import React, { ReactNode } from "react";
import Sidebar from "../Dashboard/Sidebar"
import Header from "../Dashboard/Headers/Header";

interface DashboardLayoutProps {
  children: ReactNode;
  showHeader: boolean;
  
}
const DashboardLayout:React.FC<DashboardLayoutProps> = ({children,showHeader =true}) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-accent md:bg-backgroundGray md:w-[78%] md:relative">
        {showHeader && <Header type={"notification"} />}
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout