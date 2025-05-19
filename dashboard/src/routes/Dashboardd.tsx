import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import SingleColumn from "../components/PerformanceCharts/SingleColumn.tsx";
import GrpColumnType1 from "../components/PerformanceCharts/GroupColumnType1.tsx";
import Wrapper from "../coreComponents/Wrapper.tsx";
import graphCon from "../database/graphCon.json";

export const Dashboardd = (props) => {
  const [resizeKey, setResizeKey] = useState<boolean>(false);
  const [cookies, setCookie] = useCookies(["token", "loggedIn"]);
  const [isFirstLogin, setIsFirstLogin] = useState<boolean>(false);
  const chart1bg = "#EAF0F8";
  const chart2bg = "#F5EFF5";

  const formatTestId = (heading) => {
    return heading
      .toLowerCase()
      .replace(/(?:\s*-\s*)/g, "-") 
      .replace(/(?:\s+)(?!-)/g, "-") 
      .replace(/(?!-)(?:\s+)/g, "-") 
      .replace(/-+/g, "-") 
      .replace(/^-|-$/g, ""); 
  };

  useEffect(() => {
    const handleResize = () => {
      setResizeKey(!resizeKey);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    if (cookies.loggedIn === undefined || cookies.loggedIn === null) {
      setIsFirstLogin(true);
      setCookie("loggedIn", true);
    }
  }, []);

  return (
    <div key={resizeKey}>
      <h1 className="font-semibold text-xl text-[#254975] mb-5">
        Performance at glance
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {graphCon[0].graphData.map((item) => (
          <div
            key={item.code}
            className={`${!item.single ? "col-span-1 md:col-span-2" : ""}`}
          >
            {!item.single && (
              <Wrapper style="flex flex-col items-center shadow-lg p-4">
                <h1
                  className="text-lg font-semibold text-center mb-2"
                  data-testid={`${formatTestId(item.heading)}-title`}
                >
                  {item.heading}
                </h1>
                <div className="flex p-2 gap-2 bg-[#F8F8F8] rounded mb-4">
                  <div className="flex items-center space-x-1">
                    <div className="w-2.5 h-2.5 bg-[#AED3FF]"></div>
                    <p
                      className="font-medium text-xs"
                      data-testid={`${formatTestId(item.heading)}-occasional`}
                    >
                      Occasional
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2.5 h-2.5 bg-[#254975]"></div>
                    <p
                      className="font-medium text-xs"
                      data-testid={`${formatTestId(item.heading)}-recurring`}
                    >
                      Recurring
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2.5 h-2.5 bg-[#5316A1]"></div>
                    <p
                      className="font-medium text-xs"
                      data-testid={`${formatTestId(item.heading)}-total`}
                    >
                      Total
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col sm:flex-row gap-4">
                  <div className=" w-full bg-[#EAF0F8] rounded-t">
                    <h2
                      className="flex items-center justify-center font-semibold text-[#475467] text-sm my-2"
                      data-testid={`${formatTestId(item.heading)}-franchise`}
                    >
                      {graphCon[0].chartTitleFranchise}
                    </h2>
                    <div className="bg-[#EAF0F8] rounded-b">
                      <GrpColumnType1
                        dataA={item.franchise.dataA}
                        dataB={item.franchise.dataB}
                        background={chart1bg}
                      />
                    </div>
                  </div>
                  <div className=" w-full bg-[#F5EFF5] rounded-t">
                    <h2
                      className="flex items-center justify-center font-semibold text-[#475467] text-sm my-2"
                      data-testid={`${formatTestId(item.heading)}-avg-brand`}
                    >
                      {graphCon[0].chartTitleAvgBrand}
                    </h2>
                    <div className="bg-[#F5EFF5] rounded-b">
                      <GrpColumnType1
                        dataA={item.brand.dataA}
                        dataB={item.brand.dataB}
                        background={chart2bg}
                      />
                    </div>
                  </div>
                </div>
              </Wrapper>
            )}
            {item.single && (
              <Wrapper style="flex flex-col items-center shadow-lg p-4">
                <h1
                  className="text-lg font-semibold text-center mb-14"
                  data-testid={`${formatTestId(item.heading)}-title`}
                >
                  {item.heading}
                </h1>
                <div className="w-full flex flex-col gap-4 sm:flex-row ">
                  <div className=" w-full bg-[#EAF0F8] rounded-t">
                    <h2
                      className="flex items-center justify-center font-semibold text-[#475467] text-sm my-2"
                      data-testid={`${formatTestId(item.heading)}-franchise`}
                    >
                      {graphCon[0].chartTitleFranchise}
                    </h2>
                    <div className="bg-[#EAF0F8] rounded-b">
                      <SingleColumn
                        dataA={item.franchise.dataA}
                        background={chart1bg}
                      />
                    </div>
                  </div>
                  <div className="w-full bg-[#F5EFF5] rounded-t">
                    <h2
                      className="flex items-center justify-center font-semibold text-[#475467] text-sm my-2"
                      data-testid={`${formatTestId(item.heading)}-avg-brand`}
                    >
                      {graphCon[0].chartTitleAvgBrand}
                    </h2>
                    <div className="bg-[#F5EFF5] rounded-b">
                      <SingleColumn
                        dataA={item.brand.dataA}
                        background={chart2bg}
                      />
                    </div>
                  </div>
                </div>
              </Wrapper>
            )}
          </div>
        ))}
      </div>
      {/* {isFirstLogin && <WelcomePopUp />} */}
    </div>
  );
};
