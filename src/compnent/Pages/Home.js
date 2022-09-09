import React, { Fragment } from "react";
import Categories from "../Home/Categories/Categories";
import CourseSection from "../Home/Courses/CourseSection";
import Landing from "../Home/Landing/Landing";

const Home = ({ setCourse, placeholder, courses }) => {
  return (
    <Fragment>
      <Landing></Landing>
      <main className="placeholder-glow">
        <CourseSection
          placeholder={placeholder}
          setCourse={setCourse}
          courses={courses}
        ></CourseSection>
        <Categories></Categories>
      </main>
    </Fragment>
  );
};

export default Home;
