import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import CoursePage from "./compnent/Pages/CoursePage";
import Nav from "./compnent/Home/Header/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./compnent/Pages/Home";
import axios from "axios";

function App() {
  let [placeholder, setPlaceholder] = useState(true);
  const [data, setData] = useState([]);
  const [course, setCourse] = useState("");
  const [path, setPath] = useState("");
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

  return (
    <Router>
      <Nav path={path}></Nav>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              placeholder={placeholder}
              setCourse={setCourse}
              courses={data.home}
              setPath={setPath}
            ></Home>
          }
        />
        <Route
          path="/:id"
          element={
            <CoursePage
              course={course}
              api={data.courses}
              setPath={setPath}
            ></CoursePage>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
