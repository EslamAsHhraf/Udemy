import React from "react";
import styles from "../CoursePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Learn = ({ data, placeholder }) => {
  return (
    <div className={`${styles.learn} p-4 my-4 ${styles.box} mt-4`}>
      <h3 className="mb-4  fw-bold">What you'll learn</h3>
      <div
        className={`${styles.icons} ${styles.level}  justify-content-between`}
      >
        {data.overview?.map((ele, index) => {
          return (
            <div
              key={index}
              className={`mb-2 ${styles.learnContent}${
                placeholder ? "placeholder" : " "
              } `}
            >
              <FontAwesomeIcon icon={faCheck} /> <span> {ele}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Learn;
