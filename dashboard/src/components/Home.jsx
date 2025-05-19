import React, { useEffect } from "react";
import { config } from "../database/config.tsx";
import Wrapper from "../coreComponents/Wrapper.tsx";
import HomeCard from "../coreComponents/HomeCard.tsx";
import vector from "../images/colors.svg";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import graphCon from "../database/graphCon.json";
import { useState } from "react";

const Home = () => {
  const [score, setScore] = useState(graphCon[0].healthIndicator.score);

  useEffect(() => {
    const newScore = graphCon[0].healthIndicator.score;
    setScore(newScore);
  }, [score]);

  const rotation = `rotate(${(score / 100) * 180 - 90}deg)`;

  return (
    <div>
      <h1 className=" text-[#254975] font-semibold text-3xl leading-[2.813rem] mb-4">
        {config.mainheading}
      </h1>
      <Wrapper style="bg-[#FFFFFF] rounded-md border border-[#F2F2F2] shadow-md p-4 mb-12">
        <h3 className="text-lg font-semibold text-[#101828] mb-3">
          Actionable Recommendations
        </h3>
        <div className="mb-6">
          <HomeCard
            data={graphCon[0].homeData}
            buttonLabel={config.buttonLabel}
          />
        </div>
        <Wrapper style="bg-[#FFFFFF] rounded-md border border-[#F2F2F2] shadow-md p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  md:gap-24 ">
            <div className="flex flex-col space-y-1">
              <h2 className="font-semibold text-lg">
                {graphCon[0].healthIndicator.reportText}
              </h2>
              <p className="font-normal text-sm">lorem100</p>
            </div>
            <div className="flex flex-row md:space-x-4">
              <div className="order-2 md:order-1 flex flex-col space-y-1 md:items-start items-center ml-4">
                <p className="font-semibold text-sm">{config.VHISubheading}</p>
                <p className="font-semibold text-5xl">
                  {graphCon[0].healthIndicator.score}
                </p>
              </div>
              <div className="order-1 md:order-2 -mb-24">
                <img src={vector} alt="" />
                <div
                  className="needle"
                  style={{ transform: `translate(1%, -53%) ${rotation}` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-2 bg-[#DB1F26] rounded-xl"></div>
                <p>{config.VHIPoint1}</p>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-2 bg-[#FEE600] rounded-xl"></div>
                <p>{config.VHIPoint2}</p>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-2 bg-[#1DAF4B] rounded-xl"></div>
                <p>{config.VHIPoint3}</p>
              </div>
            </div>
          </div>
        </Wrapper>
      </Wrapper>
    </div>
  );
};
export default Home;
