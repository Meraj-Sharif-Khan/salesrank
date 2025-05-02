import React from "react";

const Cta = () => {
  return (
    <div>
      <div className="container bg-gradient-to-r from-[#103570] to-[#004FCE] rounded-3xl">
        <div className="flex flex-col justify-center items-center font-[Manrope]">
          <h2 className="font-semibold text-2xl/[130%] lg:text-[38px]/[130%] text-white pb-3">
            Ready to Hire Smarter?
          </h2>
          <p className="font-normal text-[16px]/[160%]  text-[#B9BDC7] pb-12 text-center">
            Unlock Exclusive Insights Subscribe to Our Newsletter
          </p>
          <button className="cursor-pointer grow-0 shrink-0 whitespace-nowrap py-4 px-9 bg-[#FCE38A] rounded-full font-medium text-[16px]/[160%] text-[#00245F]">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
