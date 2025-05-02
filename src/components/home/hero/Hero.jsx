import React from "react";
import HeroContent from "./HeroContent";
import HeroImg from "./HeroImg";

export const Hero = () => {
  return (
    <div className="w-full pt-[50px] lg:pt-[109px] relative">
      <div className="container pt-[82px] grid grid-cols-1 lg:grid-cols-2">
        <HeroContent />
        <HeroImg />
      </div>
    </div>
  );
};
