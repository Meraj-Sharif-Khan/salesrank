import React from "react";

const Prompt = ({ id, prompt }) => {
  return (
    <div className={`w-full flex ${id === "me" && "justify-end"}`}>
      <div className="mt-2 flex items-start w-[80%] gap-3 lg:gap-6">
        <div
          className={`shrink-0 h-[40px] w-[40px] overflow-hidden rounded-full bg-[#D9D9D9] ${
            id === "me" && "order-2"
          }`}
        ></div>
        <p
          className={`shrink-0 flex-1 bg-white rounded-lg  p-4 font-[Lato] font-normal text-sm lg:text-lg/[32px] text-[#181818] ${
            id === "me" && "order-1"
          }`}
        >
          {prompt}
        </p>
      </div>
    </div>
  );
};

export default Prompt;
