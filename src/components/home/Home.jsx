import React from "react";
import { Hero } from "./hero/Hero";
import Faq from "./faq/faq";
import Course from "./course/Course";
import AiCoach from "./aiCoach/AiCoach";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <AiCoach />
        <Course />
        <Faq />
      </div>
    </div>
  );
};

export default Home;
