import React, { useState } from "react";
import arrowLight from "../../../assets/icons/arrow-light.svg";
import arrowDark from "../../../assets/icons/arrow-dark.svg";
import { getTestimonials } from "../../../services/getFakeTestimonials";

const Testimonials = () => {
  const [visibleIndex, setVisibleIndex] = useState(1);
  const testimonials = getTestimonials();

  const lastIndex = testimonials.length === visibleIndex;
  const firstIndex = visibleIndex === 1;

  const handleTestimonials = (e) => {
    if (e === "next" && visibleIndex < testimonials.length) {
      setVisibleIndex(visibleIndex + 1);
    }

    if (e === "previous" && visibleIndex > 1) {
      setVisibleIndex(visibleIndex - 1);
    }
  };

  return (
    <div>
      <div className="container">
        {testimonials.map(
          (e, i) =>
            visibleIndex === i + 1 && (
              <div key={i} className="max-w-[1280px] m-auto">
                <p className="font-semibold font-[Manrope] text-lg/[160%] lg:text-4xl/[160%] text-[#010205] mb-4 lg:mb-[74px] min-h-[231px]">
                  {e.testimonial}
                </p>
                <div className="w-full flex gap-8 flex-wrap justify-center lg:justify-between">
                  <div className="flex gap-6 items-center">
                    <div className="h-[70px] shrink-0 w-[70px] rounded-full bg-[#00000033]">
                      {/* image */}
                    </div>
                    <div className="font-[Manrope]">
                      <h3 className="font-bold test-[20px]/[180%] text-[#010205] pb-2">
                        {e.name}
                      </h3>
                      <p className="font-semibold text-[16px]/[180%] text-[#878C91] ">
                        {e.designation}
                      </p>
                    </div>
                  </div>
                  <div className="w-full max-w-[307px] flex justify-between items-center gap-2">
                    <button
                      onClick={() => handleTestimonials("previous")}
                      className={`shrink-0 h-min py-4 px-8 ${
                        firstIndex
                          ? "bg-white cursor-not-allowed"
                          : "bg-[#00245F] cursor-pointer"
                      } border border-[#00245F] rounded-full`}
                    >
                      <img
                        className={`h-6 w-6 object-scale-down ${
                          !firstIndex && "rotate-180"
                        }`}
                        src={firstIndex ? arrowDark : arrowLight}
                        alt="arrow icon"
                      />
                    </button>
                    <div className="whitespace-nowrap font-[Manrope] font-semibold text-xl/[180%]">
                      <p className="inline-block text-[#00245F] underline">
                        {visibleIndex}
                      </p>
                      <p className="inline-block text-[#01020566]">/</p>
                      <p className="inline-block text-[#01020566]">
                        {testimonials.length}
                      </p>
                    </div>
                    <button
                      onClick={() => handleTestimonials("next")}
                      className={`shrink-0 h-min py-4 px-8 ${
                        lastIndex
                          ? "bg-white cursor-not-allowed"
                          : "bg-[#00245F] cursor-pointer"
                      } border border-[#00245F] rounded-full`}
                    >
                      <img
                        className={`h-6 w-6 object-scale-down ${
                          lastIndex && "rotate-180"
                        }`}
                        src={lastIndex ? arrowDark : arrowLight}
                        alt="arrow icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Testimonials;
