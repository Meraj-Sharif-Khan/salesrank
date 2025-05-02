import React from "react";

const SuggestedPrompt = ({ handleSuggestedPrompt, suggestedPrompt }) => {
  return (
    <div>
      <p
        onClick={handleSuggestedPrompt}
        className="inline-block mr-3 h-min whitespace-nowrap w-min font-[Geist] font-normal text-sm/[100%] text-[#002868] bg-[#00286814] py-3 px-[17px] rounded-full"
      >
        {suggestedPrompt}
      </p>
    </div>
  );
};

export default SuggestedPrompt;
