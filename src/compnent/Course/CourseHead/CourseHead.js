import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import styles from "../CoursePage.module.css";

import StarSection from "../../StarSection/StarSection";
import CourseHeadInfo from "./CourseHeadInfo";

const CourseHead = ({ data, placeholder }) => {
  return (
    <div className={`${styles.content} `}>
      <div className={`${styles.box} `}>
        <div className="mb-3 ">
          <span
            className={`${styles.path} ${placeholder ? "placeholder" : " "}`}
          >
            Development
          </span>
          {" > "}
          <span
            className={`${styles.path} ${placeholder ? "placeholder" : " "}`}
          >
            Programming Languages
          </span>
          {" > "}
          <span
            className={`${styles.path} ${placeholder ? "placeholder" : " "}`}
          >
            {data.topic}
          </span>
        </div>
        <div className={`${styles.imgSide} ${styles.smallScreen} mb-3`}>
          <img className=" img-fluid " src={data.image} alt="CourseImage"></img>
          <div className={`${styles.play}`}>
            <FontAwesomeIcon icon={faPlay} color="black" className={`fs-2`} />
          </div>
          <p className={`${styles.preview}`}>Preview this course</p>
        </div>
        <h1 className={` ${styles.title} ${placeholder ? "placeholder" : " "}`}>
          {data.title}
        </h1>
        <p className={`fs-5 ${placeholder ? "placeholder" : " "}`}>
          {data.Introduction}
        </p>
        <div className={`d-flex gap-2 mb-2  ${styles.level}`}>
          <div>
            <span
              className={`${styles.checked} ${
                placeholder ? "placeholder" : " "
              }`}
            >
              {" "}
              {Number(data.rate).toFixed(1)}
            </span>
            <span>
              {!placeholder && (
                <StarSection key={1} rate={data.rate}></StarSection>
              )}
            </span>
          </div>
          <span
            className={`${styles.link} ${placeholder ? "placeholder" : " "}`}
          >
            ({data.ratingCount} ratings)
          </span>
          <span className={`${placeholder ? "placeholder" : " "}`}>
            {" "}
            {data.enrollCount} students
          </span>
        </div>
        <CourseHeadInfo data={data} placeholder={placeholder}></CourseHeadInfo>
      </div>
    </div>
  );
};

export default CourseHead;
