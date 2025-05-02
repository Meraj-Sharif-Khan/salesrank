import React from "react";

const AchivementCard = ({ icon, value, title }) => {
  return (
    <div className="flex flex-auto items-center justify-between max-w-[288px]">
      <div className="rounded-2xl bg-white p-4 ob shadow-custom inline-block">
        <img
          className="w-[46.42px] max-h-[46.42px] object-scale-down"
          src={icon}
          alt={title + "Icon"}
        />
      </div>
      <div className="inline-block">
        <h2 className="block text-[40px] font-semibold">{value}+</h2>
        <p className="block w-[165px] text-[20px] font-medium text-[#05131DB2]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default AchivementCard;
