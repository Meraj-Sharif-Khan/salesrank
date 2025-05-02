import React from "react";
import checkCircle from "../../../assets/icons/check_circle.svg";
import levelIcon from "../../../assets/icons/level.svg";

const RealtimeAnalysis = () => {
  const level = 60;

  return (
    <div className="flex flex-col gap-5 p-[30px] w-full max-w-[500px] bg-[#EFEFEF] rounded-[20px]">
      <h2 className="font-[Manrope] font-bold text-[32px]/[100%] text-[#323232]">
        Real-time Analysis
      </h2>
      <div className=" w-full p-4 bg-white rounded-xl">
        <div className=" whitespace-nowrap flex items-center gap-[6.5px]">
          <img
            className="inline-block h-[19px] w-[19px] object-scale-down"
            src={checkCircle}
            alt="checkCircle icon"
          />
          <p className="font-[Manrope] font-semibold text-lg/[132%] text-[#171D25] inline-block whitespace-nowrap">
            Confidence Level
          </p>
        </div>
        <div className="flex flex-nowrap gap-2 items-center">
          <div className="flex-1 h-[8px] rounded-full bg-[#DFDFDF] relative">
            <span
              style={{ width: level + "%" }}
              className="z-10 absolute left-0 h-[8px] rounded-full bg-[#44D618]"
            ></span>
          </div>
          <p className="font-[Inter] inline-block font-normal text-[#6D6D6D]">
            {`${level}%`}
          </p>
        </div>
      </div>
      <div className="w-full p-4 bg-white rounded-xl">
        <div className="">
          <div className="whitespace-nowrap flex items-center gap-[4px]">
            <img
              className="h-6 w-6 object-scale-down inline-block"
              src={levelIcon}
              alt="level icon"
            />
            <p className="font-[Manrope] font-semibold text-lg/[132%] text-[#171D25] inline-block whitespace-nowrap">
              Confidence Level
            </p>
          </div>
          <p className="font-[Lato] font-normal text-lg/[32px] text-[#909090] mt-3">
            85% improvement in objection handling
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealtimeAnalysis;
