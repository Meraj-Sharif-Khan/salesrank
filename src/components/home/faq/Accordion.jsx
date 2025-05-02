import React, { useState } from "react";
import accordionIcon from "../../../assets/icons/accordionIcon.svg";

const Accordion = ({ index, question, answer }) => {
  const [visibleIndex, setVisibleIndex] = useState(false);
  const isVisible = index === visibleIndex;

  console.log(visibleIndex);

  const handleVisible = (i) => {
    if (visibleIndex || visibleIndex === 0) {
      setVisibleIndex(false);
    } else {
      setVisibleIndex(i);
    }
    console.log(visibleIndex);
  };

  return (
    <div
      onClick={() => handleVisible(index)}
      className="w-full flex flex-nowrap py-10 items-start lg:items-center border-b border-[#CCCCCC] cursor-pointer"
    >
      <div className="">
        <p className="font-[Questrial] pr-4 lg:pr-10 font-normal text-[32px]/[100%] text-[#8B7D4C]">
          {index + 1}
        </p>
      </div>
      <div className="flex-1">
        <h2 className="font-[Questrial] font-normal text-2xl/[100%] lg:text-[40px]/[100%] text-black ">
          {question}
        </h2>
        {isVisible && (
          <p className="font-[Inter] font-light text-[16px]/[140%] text-[#636363] pt-3 transition duration-300 ease-in-out">
            {answer}
          </p>
        )}
      </div>
      <button className="shrink-0 overflow-hidden inline-block relative w-[29px] h-[29px] pl-4 lg:pl-10">
        <img
          className={`absolute top-[0] left-[50%] transition duration-300 ease-in-out ${
            isVisible ? "rotate-90" : ""
          }`}
          src={accordionIcon}
          alt=""
        />
        <img
          className="absolute top-0 left-[50%] rotate-90"
          src={accordionIcon}
          alt=""
        />
      </button>
    </div>
  );
};

export default Accordion;
