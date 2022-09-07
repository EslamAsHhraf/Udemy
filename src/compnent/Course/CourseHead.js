import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faGlobe,
  faClosedCaptioning,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./CoursePage.module.css";
import StarSection from "./StarSection";

const CourseHead = ({ data }) => {
  return (
    <div className={`${styles.content}`}>
      <div className={`${styles.box}`}>
        <div className="mb-3">
          <span className={`${styles.path}`}>Development</span>
          {" > "}
          <span className={`${styles.path}`}>Programming Languages</span>
          {" > "}
          <span className={`${styles.path}`}>Development</span>
        </div>
        <h1>{data.title}</h1>
        <p className="fs-5">{data.Introduction}</p>
        <div className="d-flex gap-2 mb-2">
          <span className={`${styles.checked}`}>
            {" "}
            {Number(data.rate).toFixed(1)}
          </span>
          <div>
            <StarSection rate={data.rate}></StarSection>
          </div>
          <span className={`${styles.link}`}>({data.ratingCount} ratings)</span>
          <span> {data.enrollCount} students</span>
        </div>
        <div className="mb-2">
          Created by{" "}
          {data.instructor?.map((ele, index) => {
            return (
              <>
                <span className={`${styles.link}`}>{ele.name}</span>
                {index !== data.instructor.length - 1 ? ", " : ""}
              </>
            );
          })}
        </div>
        <div className="d-flex gap-3">
          <div className={`${styles.icons}`}>
            <FontAwesomeIcon icon={faCircleInfo} />
            Last updated {data.lastUpdate}
          </div>
          <div className={`${styles.icons}`}>
            <FontAwesomeIcon icon={faGlobe} />
            {data.globe}
          </div>
          <div className={`${styles.icons}`}>
            <FontAwesomeIcon icon={faClosedCaptioning} />
            {data.Captioning}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHead;
