import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/home/Home";
import AllCourse from "./components/home/course/AllCourse";
import ScrollToTop from "./services/scrollToTop";
import NotFound from "./components/NotFound";
import AiCoach from "./components/home/aiCoach/AiCoach";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Nav />
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/allCourse" element={<AllCourse />} />
          <Route path="/aicoach" element={<AiCoach />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
