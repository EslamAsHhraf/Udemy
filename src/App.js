import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { Fragment } from "react";
import Categories from "./compnent/Home/Categories/Categories";
import CourseSection from "./compnent/Home/Courses/CourseSection";
import Nav from "./compnent/Home/Header/Nav";
import Landing from "./compnent/Home/Landing/Landing";
function App() {
  return (
    <Fragment>
      <Nav></Nav>
      <Landing></Landing>
      <main>
        <CourseSection></CourseSection>
        <Categories></Categories>
      </main>
    </Fragment>
  );
}

export default App;
