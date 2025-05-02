import { getCources } from "../../../services/getFakeCourse";
import CourseCard from "./CourseCard";

const AllCourse = () => {
  const cources = getCources();

  return (
    <div className="container">
      <div className="mt-[15px] lg:mt-[55px] flex justify-center gap-6 flex-wrap">
        {cources.map((e, i) => (
          <CourseCard
            key={i}
            coverPhoto={e.coverPhoto}
            duration={e.duration}
            difficulty={e.difficulty}
            author={e.author}
            title={e.title}
            description={e.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCourse;
