import React from "react";
import robotImg from "../../../assets/images/robot.png";
import Achivement from "./Achivement";

const HeroContent = () => {
  return (
    <div>
      <h1 className="font-medium text-[40px] lg:text-[80px] max-w-[516px]">
        Your AI-Powered Sales Coach
      </h1>
      <div className="flex items-center justify-between gap-5 max-w-[618px]">
        <img
          className="robot-bounce w-[100px] lg:w-[204px] object-scale-down"
          src={robotImg}
          alt=""
        />
        <p className="max-w-[346px] font-medium text-xl/[160%] text-[#05131DB2]">
          Get real-time coaching, script suggestions, and deal-closing
          strategies powered by advanced AI technology.
        </p>
      </div>
      <Achivement />
    </div>
  );
};

export default HeroContent;
