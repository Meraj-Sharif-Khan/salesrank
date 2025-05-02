import React from "react";
import PromptWindow from "./PromptWindow";
import RealtimeAnalysis from "./RealtimeAnalysis";
import QuickActions from "./QuickActions";

const AiCoach = () => {
  return (
    <div className="bg-gradient-to-r from-[#103570] to-[#004FCE]">
      <div className="container">
        <div>
          <p className="font-[Questrial] font-normal text-lg/[100%] lg:text-2xl/[100%] text-[#FCE38A]">
            Live Ai Coach
          </p>
          <h2 className="font-[Questrial] font-normal text-3xl/[120%] lg:text-6xl/[120%] text-white mt-3 lg:mt-5">
            Take a Suggestion Coaching{" "}
          </h2>
        </div>
        <div className="mt-8 lg:mt-[60px] flex flex-col lg:flex-row flex-wrap justify-center lg:justify-start gap-3 lg:gap-6 items-center">
          <PromptWindow />
          <div className="flex flex-col gap-6">
            <RealtimeAnalysis />
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiCoach;
