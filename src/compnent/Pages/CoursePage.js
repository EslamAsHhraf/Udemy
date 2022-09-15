import React, { useEffect, useState } from "react";
import styles from "../Course/CoursePage.module.css";
import CourseHead from "../Course/CourseHead/CourseHead";
import CourseDetails from "../Course/CourseDetails/CourseDetails";
import Feedback from "../Course/Feedback/Feedback";
import Instructors from "../Course/Instructors/Instructors";
import Reviews from "../Course/Feedback/Reviews";
import SideBar from "../Course/SideBar/SideBar";
import Footer from "../Course/Footer/Footer";

const CoursePage = ({ course, api, setPath }) => {
  useEffect(() => {
    setPath("/course");
  });
  const [data] = useState(api[Number(course - 1)]);

  let [placeholder, setPlaceholder] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setPlaceholder(false);
    }, 1000);
  }, [data, api, course]);

  return (
    <>
      <main className="placeholder-glow">
        <section className={`${styles.main} `}>
          <CourseHead data={data} placeholder={placeholder}></CourseHead>
        </section>
        <section className={`${styles.content}`}>
          <CourseDetails data={data} placeholder={placeholder}></CourseDetails>
          <section>
            <Instructors data={data} placeholder={placeholder}></Instructors>
          </section>
          <section>
            <Feedback data={data} placeholder={placeholder}></Feedback>
          </section>
          <section>
            <Reviews placeholder={placeholder} data={data}></Reviews>
          </section>
          <SideBar data={data} placeholder={placeholder}></SideBar>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default CoursePage;
