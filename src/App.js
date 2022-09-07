import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { Fragment, useState } from "react";
import CoursePage from "./compnent/Pages/CoursePage";
import Nav from "./compnent/Home/Header/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./compnent/Pages/Home";

function App() {
  let [course, setCourse] = useState("");
  return (
    <Router>
      <Fragment>
        <Nav></Nav>
      </Fragment>
      <Routes>
        <Route path="/" element={<Home setCourse={setCourse}></Home>} />
        <Route
          path="/:id"
          element={<CoursePage course={course}></CoursePage>}
        />
      </Routes>
    </Router>
  );
}

export default App;
