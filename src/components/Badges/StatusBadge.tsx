import React from "react";

interface StatusBadgeProps {
  status: string;
}
const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
     const getBackgroundColor = () => {
       switch (status.toLowerCase()) {
         case "completed":
           return "success-50"; 
         case "pending":
           return "secondary-50";
         default:
           return "gray";
       }
     };
          const getTextColor = () => {
            switch (status.toLowerCase()) {
              case "completed":
                return "success-800";
              case "pending":
                return "secondary-800";
              default:
                return "black";
            }
            
          };
  return (
    <div>
      <p
        className={`uppercase bg-${getBackgroundColor()} text-${getTextColor()} rounded-md px-2 py-0.5 w-fit text-xs`}
      >
        {status}
      </p>
    </div>
  );
};

export default StatusBadge;
