import React from "react";
import Wrapper from "../../coreComponents/Wrapper.tsx";
import graphCon from "../../database/graphCon.json";

const Phoenix = () => {
  return (
    <Wrapper style="bg-white border rounded-lg shadow-lg p-4 mb-16">
      <Wrapper style="bg-white border rounded-lg shadow-lg p-4">
        <div className="flex flex-col md:flex-row gap-3 md:gap-32">
          <div className="w-full md:w-9/12">
            <h1 className="text-lg font-semibold text-[#101828]">
              {graphCon[0].phoenixScore?.reportText}
            </h1>
            <p className="text-sm font-normal text-[#475467]">
              You are reaching {graphCon[0].phoenixScore?.percentage}% of your
              potential. See{" "}
              <a href={graphCon[0].phoenixScore?.url} target="_blank" className="text-[#407EC9]">Phoenix Data</a> for more
              details.
            </p>
          </div>
          <div className="w-full md:w-3/12">
            <p className="font-semibold text-sm leading-7 text-[#101828]">
              Your Score:
            </p>
            <p className="font-semibold text-5xl text-[#101828]">
              {graphCon[0].phoenixScore?.score}%
            </p>
          </div>
        </div>
      </Wrapper>
    </Wrapper>
  );
};

export default Phoenix;
