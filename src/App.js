import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { Fragment, useState, useEffect } from "react";
import CoursePage from "./compnent/Pages/CoursePage";
import Nav from "./compnent/Home/Header/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./compnent/Pages/Home";
import axios from "axios";
function App() {
  let [placeholder, setPlaceholder] = useState(true);
  const [data, setData] = useState([]);
  const api = "http://myjson.dit.upm.es/api/bins/7qn6";
  useEffect(() => {
    axios
      .get(api)
      .then((response) => {
        setData(response.data);
        setTimeout(function () {
          setPlaceholder(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [api]);

  let [course, setCourse] = useState("");
  return (
    <Router>
      <Fragment>
        <Nav></Nav>
      </Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              placeholder={placeholder}
              setCourse={setCourse}
              courses={data.home}
            ></Home>
          }
        />
        <Route
          path="/:id"
          element={<CoursePage course={course} api={data.courses}></CoursePage>}
        />
      </Routes>
    </Router>
  );
}

export default App;
