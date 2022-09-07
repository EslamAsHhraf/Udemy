import React, { Fragment } from "react";
import Categories from "../Home/Categories/Categories";
import CourseSection from "../Home/Courses/CourseSection";
import Landing from "../Home/Landing/Landing";

const Home = ({ setCourse }) => {
  return (
    <Fragment>
      <Landing></Landing>
      <main>
        <CourseSection setCourse={setCourse}></CourseSection>
        <Categories></Categories>
      </main>
    </Fragment>
  );
};

export default Home;
