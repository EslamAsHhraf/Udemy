import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import styles from "../Course/CoursePage.module.css";
import CourseHead from "../Course/CourseHead";
import CourseDetails from "../Course/CourseDetails/CourseDetails";
import Feedback from "../Course/Feedback/Feedback";
import Instructors from "../Course/Instructors";
import Reviews from "../Course/Feedback/Reviews";

const CoursePage = ({ course }) => {
  let [data, setData] = useState([]);
  const api = "http://myjson.dit.upm.es/api/bins/j9ls";

  useEffect(() => {
    axios
      .get(api)
      .then((response) => {
        setData(response.data.courses[course - 1]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [api, course]);

  return (
    <Fragment>
      <section className={`${styles.main}`}>
        <CourseHead data={data}></CourseHead>
      </section>
      <section className={`${styles.content}`}>
        <CourseDetails data={data}></CourseDetails>
      </section>
      <section className={`${styles.content}`}>
        <Instructors data={data}></Instructors>
      </section>
      <section className={`${styles.content}`}>
        <Feedback data={data}></Feedback>
      </section>
      <section className={`${styles.content}`}>
        <Reviews data={data}></Reviews>
      </section>
    </Fragment>
  );
};

export default CoursePage;
