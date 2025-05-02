import React, { useRef, useState } from "react";
import arrowUp from "../../../assets/icons/ArrowUp.png";
import SuggestedPrompt from "./SuggestedPrompt";

// fake suggestedPrompt
const suggestedPrompt = [
  { suggestedPrompt: "How do I handle objections?" },
  { suggestedPrompt: "Give me a cold email template" },
  { suggestedPrompt: "Closing techniques" },
  { suggestedPrompt: "Negotiation tips" },
];

const PromptInput = ({ prompts, setPrompts }) => {
  const [input, setInput] = useState({ _id: "me", prompt: "" });
  const textareaRef = useRef(null);

  //   to auto resize text area while typing
  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = Math.min(textarea.scrollHeight, 144) + "px";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.prompt) {
      setPrompts([...prompts, input]);
      setInput({ ...input, prompt: "" });
    }
  };

  const handleSuggestedPrompt = (e) => {
    setInput({ ...input, prompt: e.target.innerText });
  };

  return (
    <div className="px-4">
      <div className="cursor-pointer overflow-x-auto pt-4 flex flex-nowrap">
        {suggestedPrompt.map((e, i) => (
          <SuggestedPrompt
            key={i}
            handleSuggestedPrompt={handleSuggestedPrompt}
            suggestedPrompt={e.suggestedPrompt}
          />
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-nowrap items-end pt-4 pb-6"
      >
        <textarea
          ref={textareaRef}
          onInput={handleInput}
          value={input.prompt}
          onChange={(e) => setInput({ ...input, prompt: e.target.value })}
          type="text"
          className="flex-1 resize-none min-h-[46.34] mr-3 p-2 w-[50px] font-normal text-sm/[100%] lg:text-lg/[100%] border border-[#E5E7EB] rounded-sm focus:outline-2 focus:-outline-offset-2 focus:outline-[#002868]"
          placeholder="Ask anything you need"
        />
        <button
          type="submit"
          className="cursor-pointer shrink-0 h-min bg-[#002868] p-3.5 font-medium text-sm/[100%] lg:text-lg/[100%] text-white rounded-lg"
        >
          Send
          <img
            className="inline-block pl-3 h-4 object-scale-down"
            src={arrowUp}
            alt="arrow up icon"
          />
        </button>
      </form>
    </div>
  );
};

export default PromptInput;
