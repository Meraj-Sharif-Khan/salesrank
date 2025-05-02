import React from "react";
import phoneIcon from "../../assets/icons/phoneicon.svg";
import locationIcon from "../../assets/icons/locationicon.svg";
import emailIcon from "../../assets/icons/messageicon.svg";

const Contact = () => {
  return (
    <div>
      <div className="flex-col flex-nowrap font-[Manrope]">
        <h2 className="font-semibold text-lg/[100%] text-[#001C4A] mb-[36px]">
          Contact
        </h2>

        <div className="flex flex-col flex-nowrap gap-5 font-normal text-sm/[100%] text-[#335386]">
          <p>
            <img
              className="inline-block mr-2"
              src={phoneIcon}
              alt="phoneIcon"
            />
            (406) 555-0120
          </p>
          <a href="mailto:Hey@boostim.com">
            <img
              className="inline-block mr-2"
              src={emailIcon}
              alt="emailIcon"
            />
            Hey@boostim.com
          </a>
          <div className="flex">
            <img
              className="inline-block mr-2"
              src={locationIcon}
              alt="locationIcon"
            />
            <p className="max-w-[208px] inline-block">
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </p>
          </div>
          <a
            className="text-[#14a701]"
            href="https://merajsharif.netlify.app"
            target="_blank"
          >
            Develop by Meraj Sharif
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
