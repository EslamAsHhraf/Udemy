import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import CoursePage from "./compnent/Pages/CoursePage";
import Nav from "./compnent/Home/Header/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./compnent/Pages/Home";

function App() {
  let [placeholder, setPlaceholder] = useState(true);
  const [data, setData] = useState([]);
  const [course, setCourse] = useState("");
  const [path, setPath] = useState("");
  const api = "http://myjson.dit.upm.es/api/bins/7qn6";
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData);
        setTimeout(function () {
          setPlaceholder(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            />
          }
        />
        <Route
          path="/:id"
          element={
            <CoursePage course={course} api={data.courses} setPath={setPath} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
