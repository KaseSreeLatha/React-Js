import React from "react";
import { config } from "../database/config.tsx";
import logo from "../images/logo.svg";
import { CpuChipIcon } from "@heroicons/react/24/outline";
import Button from "../coreComponents/Button.jsx";
import DashboardCard from "../coreComponents/DashboardCard.jsx";
import image from "../images/image.png";
import Text from "../coreComponents/Text.tsx";
import Wrapper from "../coreComponents/Wrapper.tsx";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Dashboard = () => {
  return (
    <div className="h-[100vh] bg-[#EDF8FF] p-5">
      <Wrapper style={"bg-white border rounded-lg shadow-lg p-5"}>
        <div className="flex items-center flex-col space-y-3 md:flex-row md:justify-between mb-5">
          <div className="flex items-start space-x-2">
            <div>
              <CpuChipIcon className="m-1 w-9 h-9 text-[#1B2552]" />
            </div>
            <Text
              content={<h1>{config.Heading}</h1>}
              style={"text-3xl leading-10 text-[#254975] font-semibold"}
            />
          </div>
          <div>
            <img src={logo} className="md:w-40 md:h-14" alt="logo" />
          </div>
        </div>
        <Wrapper
          style={"bg-white border border-[#F2F2F2] rounded-md shadow-lg p-4"}
        >
          <div>
            <Text
              content={<h2>{config.Welcome}</h2>}
              style={"font-semibold text-2xl leading-7 text-[#101828] mb-2"}
            />
            <div className="flex flex-col md:flex-row md:items-start justify-between">
              <div className="order-2 md:order-1">
                <Text
                  content={<p>{config.info}</p>}
                  style={"font-medium text-lg leading-6 text-[#101828] mb-2"}
                />

                <DashboardCard
                  icon={<CheckCircleIcon className="h-5 w-5 text-[#0B408F]" />}
                  style="h-12 flex items-center space-x-1 bg-[#F4F6F8] rounded-lg p-3 mb-2"
                >
                  <Text
                    content={<p>{config.point1}</p>}
                    style={"text-base font-medium"}
                  />
                </DashboardCard>

                <DashboardCard
                  icon={<CheckCircleIcon className="h-5 w-5 text-[#0B408F]" />}
                  style="h-12 flex items-center space-x-1 bg-[#F4F6F8] rounded-lg p-3 mb-2"
                >
                  <Text
                    content={<p>{config.point2}</p>}
                    style={"text-base font-medium"}
                  />
                </DashboardCard>

                <DashboardCard
                  icon={<CheckCircleIcon className="h-5 w-5 text-[#0B408F]" />}
                  style="h-12 flex items-center space-x-1 bg-[#F4F6F8] rounded-lg p-3 mb-2"
                >
                  <Text
                    content={<p>{config.point3}</p>}
                    style={"text-base font-medium"}
                  />
                </DashboardCard>

                <DashboardCard
                  icon={<CheckCircleIcon className="h-5 w-5 text-[#0B408F]" />}
                  style="w-[85%] h-12 flex items-center space-x-1 bg-[#F4F6F8] rounded-lg p-3 mb-2"
                  style1="flex justify-end"
                >
                  <Text
                    content={<p>{config.point4}</p>}
                    style={"text-base font-medium"}
                  />
                </DashboardCard>

                <DashboardCard
                  icon={<CheckCircleIcon className="h-5 w-5 text-[#0B408F]" />}
                  style="w-[85%] h-12 flex items-center space-x-1 bg-[#F4F6F8] rounded-lg p-3 mb-2"
                  style1="flex justify-end"
                >
                  <Text
                    content={<p>{config.point5}</p>}
                    style={"text-base font-medium"}
                  />
                  <DashboardCard />
                </DashboardCard>

                <Button
                  data={config.button}
                  fullWidth={true}
                />
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={image}
                  alt="pic"
                  className="lg:w-[100%] lg:h-96 rounded-xl"
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </Wrapper>
    </div>
  );
};

export default Dashboard;
