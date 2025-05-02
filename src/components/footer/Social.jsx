import React from "react";
import brandLogo from "../../assets/icons/footerLogo.png";
import fbLogo from "../../assets/icons/fblogo.svg";
import xLogo from "../../assets/icons/xlogo.svg";
import inLogo from "../../assets/icons/inlogo.svg";
import igLogo from "../../assets/icons/iglogo.svg";

const Social = () => {
  return (
    <div className="w-full max-w-[534px] fons-[Manrope]">
      <img
        className="w-[146.36px] h-[51px] object-scale-down"
        src={brandLogo}
        alt="logo footer"
      />
      <p className="font-normal text-sm/[24px] text-[#335386] mt-[30px]">
        SalesRank.AI offers a comprehensive suite of AI-powered solutions to
        help you find expert sales professionals who can elevate every aspect of
        your business. From performance rankings and skill verification to
        industry benchmarking and real-time analytics, we provide the insights
        and tools to optimize your sales strategy and drive growth.
      </p>
      <div className="flex gap-2 mt-[30px]">
        <a
          className=" h-[34px] w-[34px] rounded-full flex justify-center bg-white"
          href="/"
        >
          <img className="object-scale-down" src={fbLogo} alt="Facebook Icon" />
        </a>
        <a
          className=" h-[34px] w-[34px] rounded-full flex justify-center bg-white"
          href="/"
        >
          <img className="object-scale-down" src={xLogo} alt="Twitter Icon" />
        </a>
        <a
          className=" h-[34px] w-[34px] rounded-full flex justify-center bg-white"
          href="/"
        >
          <img className="object-scale-down" src={inLogo} alt="LinkedIn Icon" />
        </a>
        <a
          className=" h-[34px] w-[34px] rounded-full flex justify-center bg-white"
          href="/"
        >
          <img
            className="object-scale-down"
            src={igLogo}
            alt="Instagram icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Social;
