import React from "react";

const CourseCard = ({
  coverPhoto,
  duration,
  difficulty,
  author,
  title,
  description,
}) => {
  return (
    <div>
      <div className="flex flex-col gap-[30px] w-full max-w-[690px] p-[25px] lg:p-[50px] bg-[#F1F1F3] rounded-2xl">
        <picture>
          <source srcSet={`${coverPhoto}.webp`} type="image/webp" />
          <img
            className="rounded-lg w-full max-h-[380px] object-scale-down"
            src={`${coverPhoto}.jpg`}
            alt="Course cover photo"
          />
        </picture>
        <div className="flex flex-wrap gap-2.5 justify-between items-center">
          <div className="inline-block">
            <p className="inline-block py-2.5 px-4 bg-white rounded-lg font-medium text-sm/[100%] lg:text-lg/[100%] text-[#4C4C4D] mr-2.5">
              {duration}
            </p>
            <p className="inline-block py-2.5 px-4 bg-white rounded-lg font-medium text-sm/[100%] lg:text-lg/[100%] text-[#4C4C4D]">
              {difficulty}
            </p>
          </div>
          <span className="inline-block whitespace-nowrap">
            <p className="font-medium text-sm/[100%] lg:text-xl/[100%] text-[#262626]">
              {author}
            </p>
          </span>
        </div>
        <div className="">
          <h2 className="block font-semibold text-2xl/[150%] text-[#262626]">
            {title}
          </h2>
          <p className="block font-normal text-lg/[150%] text-[#4C4C4D] mt-3.5">
            {description}
          </p>
        </div>
        <button className="cursor-pointer w-full py-[18px] px-[24px] bg-[#002868] font-medium text-lg/[150%] text-white font-[Be_Vietnam_Pro] rounded-lg">
          Get it Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
