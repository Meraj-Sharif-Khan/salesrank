import React from "react";
import CourseCard from "./CourseCard";
import { getCources } from "../../../services/getFakeCourse";
import { Link } from "react-router-dom";

const Course = () => {
  const cources = getCources();

  return (
    <div className="container">
      <div className="flex flex-wrap gap-4 items-end justify-between">
        <div className="w-full max-w-[1029.61px]">
          <h2 className="font-semibold text-3xl lg:text-5xl/[150%] text-[#262626] ">
            Our Courses
          </h2>
          <p className="font-normal text-sm lg:text-[18px]/[150%] text-[#59595A]">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <Link to="/allCourse">
          <button className="h-min whitespace-nowrap cursor-pointer bg-[#002868] text-white px-5 py-3 lg:px-6 lg:py-[18px] rounded-[8px]">
            View All
          </button>
        </Link>
      </div>
      <div className="mt-12 flex justify-center gap-6 flex-wrap">
        {cources.map(
          (e, i) =>
            i < 2 && (
              <CourseCard
                key={i}
                coverPhoto={e.coverPhoto}
                duration={e.duration}
                difficulty={e.difficulty}
                author={e.author}
                title={e.title}
                description={e.description}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Course;
