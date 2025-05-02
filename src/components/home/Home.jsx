import React from "react";
import { Hero } from "./hero/Hero";
import Faq from "./faq/Faq";
import Course from "./course/Course";
import AiCoach from "./aiCoach/AiCoach";
import Testimonials from "./testimonials/Testimonials";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <AiCoach />
        <Course />
        <Faq />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
