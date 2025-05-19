import React from "react";
import Button from "./Button";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { UsersIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";

const HomeCard = (props) => {
const icons=[<CurrencyDollarIcon/>,<UsersIcon/>,<ChartBarIcon/>]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {props.data.map((item, index) => (
        <div key={item.reportText +index} className="bg-[#EDF8FF] rounded-lg p-3">
          <div className="flex items-center space-x-1 mb-2">
            <p className="h-5 w-5 text-[#0B408F]">{icons[index]}</p>
            <p className="font-semibold text-base text-[#254975]">
              {item.reportText}
            </p>
          </div>
          <div>
            <p className="font-bold text-sm text-[#475467] mb-2">
              {item.contentInBold}
              <span className="text-sm font-normal">
              {item.contentInRegular}
              </span>
            </p>
            <Button
              data={props.buttonLabel}
              style1="font-semibold text-sm text-[#FFFFFF]"
              style2="w-24 h-8 bg-[#407EC9] rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default HomeCard;
