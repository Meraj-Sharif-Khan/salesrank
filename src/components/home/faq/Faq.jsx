import React from "react";
import Accordion from "./Accordion";
import { getQuestion } from "../../../services/getFakeQuestion";
const Faq = () => {
  const faq = getQuestion();

  return (
    <div className="container">
      <div className="flex flex-wrap gap-5 lg:gap-20">
        <p className="font-[Manrope] font-normal text-lg/[100%] lg:text-2xl/[100%] text-[#001C4A] max-w-[280px] inline-block">
          Frequently asked questions
        </p>
        <h2 className="inline-block font-[Questrial] font-normal text-3xl/[120%] lg:text-6xl/[120%] text-black max-w-[920px]">
          Constant collaboration is how we roll. Let's see if we are a good fit.
        </h2>
      </div>
      <div className="flex flex-col mt-10">
        {faq.map((e, i) => (
          <Accordion
            key={i}
            index={i}
            question={e.question}
            answer={e.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
