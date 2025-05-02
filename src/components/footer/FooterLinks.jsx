import React from "react";

const FooterLinks = ({ heading, links }) => {
  return (
    <div>
      <div className="flex-col flex-nowrap font-[Manrope]">
        <h2 className="font-semibold text-lg/[100%] text-[#001C4A] mb-[36px]">
          {heading}
        </h2>
        <div className="flex flex-col flex-nowrap gap-5 font-normal text-sm/[100%] text-[#335386]">
          {links.map((e, i) => (
            <a key={i} href={e.link}>
              {e.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
