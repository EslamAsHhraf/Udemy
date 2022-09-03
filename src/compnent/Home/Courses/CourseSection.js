import React, { useEffect, useState } from "react";
import Course from "./Course";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Bar from "./Bar";

const CourseSection = () => {
  let [courses, setCourses] = useState([]);
  const infoRef = React.createRef();
  const preRef = React.createRef();
  const pastRef = React.createRef();
  const api = "http://myjson.dit.upm.es/api/bins/7bqs";
  useEffect(() => {
    axios
      .get(api)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [api]);

  const clickLeft = () => {
    let width = infoRef.current.getBoundingClientRect().width;
    preRef.current.style.display = "block";
    infoRef.current.scrollLeft -= width;
    if (infoRef.current.scrollLeft - width < 0) {
      pastRef.current.style.display = "none";
    }
  };

  const clickRight = () => {
    let width = infoRef.current.getBoundingClientRect().width;
    infoRef.current.scrollLeft += width;
    if (infoRef.current.scrollLeft - infoRef.current.scrollWidth > -2 * width) {
      preRef.current.style.display = "none";
    }
    pastRef.current.style.display = " block";
  };

  return (
    <section className="box courses">
      <h2>A broad selection of courses.</h2>
      <p>
        Choose from 185,00 online video courses with new additions published
        every month.
      </p>
      <Bar></Bar>
      <span ref={pastRef} className="left" onClick={clickLeft}>
        <FontAwesomeIcon icon={faCircleArrowLeft} color="black" />
      </span>
      <span ref={preRef} className="right" onClick={clickRight}>
        <FontAwesomeIcon icon={faCircleArrowRight} color="black" />
      </span>
      <div className="text">
        <h3>Expand your career opptunities with Python</h3>
        <p>
          Take one of Udemy's range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You'll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to...
        </p>
        <button>Explore Python</button>
        <div ref={infoRef} className="info">
          {courses.length
            ? courses.map((ele) => <Course key={ele.id} Course={ele}></Course>)
            : null}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
