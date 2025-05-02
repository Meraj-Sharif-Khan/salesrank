import React from "react";
import heroImgJpg from "../../../assets/images/heroImg.jpg";
import heroImgWebp from "../../../assets/images/heroImg.webp";
import Growth from "./Growth";

const HeroImg = () => {
  return (
    <div className="relative h-[739.125px] mt-4 lg:mt-0">
      <div className="absolute top-0 right-0 w-[100%] max-w-[583px] object-cover">
        <picture>
          <source srcSet={heroImgWebp} type="image/webp" />
          <img fetchpriority="high" src={heroImgJpg} alt="Hero Robot" />
        </picture>
      </div>
      <div className="absolute bottom-0 left-0 z-[1]">
        <Growth />
      </div>
    </div>
  );
};

export default HeroImg;
