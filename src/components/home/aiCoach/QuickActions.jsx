import React from "react";
import generateScriptIcon from "../../../assets/icons/GenerateScript.svg";
import practicePitchIcon from "../../../assets/icons/PracticePitch.svg";

const QuickActions = () => {
  return (
    <div className="flex flex-col gap-5 p-[30px] w-full max-w-[500px] bg-[#EFEFEF] rounded-[20px]">
      <h2 className="font-[Manrope] font-bold text-[32px]/[100%] text-[#323232]">
        Quick Actions
      </h2>
      <div className="flex flex-wrap gap-2 justify-center lg:justify-between">
        <div className="p-4 bg-white w-full max-w-[167px] rounded-xl">
          <img
            className="h-8 w-8 object-scale-down"
            src={generateScriptIcon}
            alt="generate Script Icon"
          />
          <p className="font-[Manrope] font-semibold text-lg/[132%] text-[#171D25] mt-2 whitespace-nowrap">
            Generate Script
          </p>
        </div>
        <div className="p-4 bg-white w-full max-w-[167px] rounded-xl">
          <img
            className="h-8 w-8 object-scale-down"
            src={practicePitchIcon}
            alt="generate Script Icon"
          />
          <p className="font-[Manrope] font-semibold text-lg/[132%] text-[#171D25] mt-2 whitespace-nowrap">
            Practice Pitch
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
