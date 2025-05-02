import React from "react";
import arrowLight from "../../../assets/icons/arrow-light.svg";
import arrowDark from "../../../assets/icons/arrow-Dark.svg";

const Testimonials = () => {
  return (
    <div>
      <div className="container">
        <div className="max-w-[1280px] m-auto">
          <p className="font-semibold font-[Manrope] text-lg/[160%] lg:text-4xl/[160%] text-[#010205] mb-4 lg:mb-[74px]">
            “ They thoroughly analyze our industry and target audience, allowing
            them to develop customized campaigns that effectively reach and
            engage our customers. Their creative ideas and cutting-edge
            techniques have helped us stay ahead of the competition.”
          </p>
          <div className="w-full flex gap-8 flex-wrap justify-center lg:justify-between">
            <div className="flex gap-6 items-center">
              <div className="h-[70px] shrink-0 w-[70px] rounded-full bg-[#00000033]">
                {/* image */}
              </div>
              <div className="font-[Manrope]">
                <h3 className="font-bold test-[20px]/[180%] text-[#010205] pb-2">
                  Michael Kaizer
                </h3>
                <p className="font-semibold text-[16px]/[180%] text-[#878C91] ">
                  CEO of Basecamp Corp
                </p>
              </div>
            </div>
            <div className="w-full max-w-[307px] flex justify-between items-center gap-2">
              <button
                className={`shrink-0 h-min cursor-pointer py-4 px-8 bg-white border border-[#00245F] rounded-full`}
              >
                <img
                  className="h-6 w-6 object-scale-down"
                  src={arrowDark}
                  alt="arrow icon"
                />
              </button>
              <div className="whitespace-nowrap font-[Manrope] font-semibold text-xl/[180%]">
                <p className="inline-block text-[#00245F] underline">01</p>
                <p className="inline-block text-[#01020566]">/</p>
                <p className="inline-block text-[#01020566]">05</p>
              </div>
              <button
                className={`shrink-0 h-min cursor-pointer py-4 px-8 bg-[#00245F] border border-[#00245F] rounded-full`}
              >
                <img
                  className="h-6 w-6 object-scale-down"
                  src={arrowLight}
                  alt="arrow icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
