import React from "react";
import Home from "../components/Home";
import Communications from "../components/Communications";
import { Dashboardd } from "./Dashboardd.tsx";
import Wrapper from "../coreComponents/Wrapper.tsx";
import Phoenix from "../components/Phoenix/Phoenix.tsx";

const HomePage = () => {
  return (
    <div className="bg-[#EDF8FF] flex">
      <div className="lg:w-[80%] lg:ml-16">
        <Wrapper style=" bg-white border rounded-lg shadow-lg p-5 mb-10">
          <Home />
          <Phoenix />
          <Dashboardd />
        </Wrapper>
        <Communications />
      </div>
      <div className="lg:w-[20%]"></div>
    </div>
  );
};
export default HomePage;
