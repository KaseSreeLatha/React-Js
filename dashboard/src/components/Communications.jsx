import React from "react";
import { config } from "../database/config.tsx";
import CommunicationCard from "../coreComponents/CommunicationCard.tsx";
import Wrapper from "../coreComponents/Wrapper.tsx";

const Communications = () => {
  return (
    <Wrapper style="bg-white border rounded-lg shadow-lg">
      <div className="p-4">
        <div className="font-bold text-2xl leading-10 tracking-[-1px] text-[#254975] mb-1">
          <h1>{config.commheading}</h1>
        </div>
        <div>
          <CommunicationCard
            data={config.communication}
            button={config.commbutton}
            icon={config.commbuticon}
          />
        </div>
      </div>
      <div className="h-9 bg-[#F6F6F6] runded-sm">
        <h1 className="font-normal text-sm text-[#407EC9] flex justify-center pt-2">
          <a href={config.footerlink}>{config.commfooter}</a>
        </h1>
      </div>
    </Wrapper>
  );
};
export default Communications;
