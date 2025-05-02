import React, { useState } from "react";
import Prompt from "./Prompt";
import PromptInput from "./PromptInput";
import ActionButton from "./ActionButton";

const PromptWindow = () => {
  const [prompts, setPrompts] = useState([
    {
      _id: "",
      prompt:
        "Hello! I'm your AI sales coach. How can I help you improve your sales performance today?",
    },
  ]);

  return (
    <React.Fragment>
      <div className="h-[90vh] w-full max-w-[787px] max-h-[577px] flex flex-col bg-white rounded-xl relative">
        <h2 className="pt-4 pb-6 pl-8 font-[Manrope] font-bold lg:text-lg/[120%]">
          AI Sales Coach
        </h2>
        <div className="flex-1 overflow-auto bg-[#F2F3F3] p-4">
          {prompts.map((e, i) => (
            <Prompt key={i} id={e._id} prompt={e.prompt} />
          ))}
        </div>
        <PromptInput prompts={prompts} setPrompts={setPrompts} />
      </div>
      <div className="">
        <ActionButton />
      </div>
    </React.Fragment>
  );
};

export default PromptWindow;
