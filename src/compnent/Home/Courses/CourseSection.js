import React, { useEffect, useState } from "react";
import Course from "./Course";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Bar from "./Bar";
import { useSearchParams } from "react-router-dom";

const CourseSection = ({ setCourse, courses, placeholder }) => {
  const infoRef = React.createRef();
  const preRef = React.createRef();
  const pastRef = React.createRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState([]);
  /* click Left*/
  const clickLeft = () => {
    const width = infoRef.current.getBoundingClientRect().width;
    preRef.current.style.display = "block";
    infoRef.current.scrollLeft -= width;
    if (infoRef.current.scrollLeft - width < 0) {
      pastRef.current.style.display = "none";
    }
  };
  /* click Right*/
  const clickRight = () => {
    const width = infoRef.current.getBoundingClientRect().width;
    infoRef.current.scrollLeft += width;
    if (infoRef.current.scrollLeft - infoRef.current.scrollWidth > -2 * width) {
      preRef.current.style.display = "none";
    }
    pastRef.current.style.display = " block";
  };
  /* cehack width*/
  useEffect(() => {
    const width = infoRef.current.getBoundingClientRect().width;
    if (
      infoRef.current.scrollLefts + width >= infoRef.current.scrollWidth ||
      infoRef.current.scrollWidth === width
    ) {
      preRef.current.style.display = "none";
    } else {
      preRef.current.style.display = "block";
    }
  }, [search, infoRef.current?.getBoundingClientRect().width]);
  /* filter */
  useEffect(() => {
    setSearch(courses);
    if (!searchParams.get(`filter`)) {
      setSearch(courses);
    } else {
      setSearch(
        courses?.filter((e) => {
          return e.title
            .toLowerCase()
            .includes(
              searchParams.get(`filter`).toString().toLowerCase().trim()
            );
        })
      );
      console.log(search);
    }
  }, [searchParams.get(`filter`), courses]);

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
        <p className={`  ${placeholder ? "placeholder" : " "}`}>
          Take one of Udemy's range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You'll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to...
        </p>
        <button className="buttonHome">Explore Python</button>
        <div ref={infoRef} className="info">
          {search?.map((ele) => (
            <Course
              setCourse={setCourse}
              key={ele.id}
              Course={ele}
              placeholder={placeholder}
            ></Course>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
