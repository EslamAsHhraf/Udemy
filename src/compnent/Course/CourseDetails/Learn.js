import React from "react";
import styles from "../CoursePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Learn = ({ data }) => {
  return (
    <div className={`${styles.learn} p-4 my-4 ${styles.box} mt-4`}>
      <h3 className="mb-4  fw-bold">What you'll learn</h3>
      <div className={`${styles.icons}  justify-content-between`}>
        {data.overview?.map((ele) => {
          return (
            <div className={`${styles.icons} `}>
              <FontAwesomeIcon icon={faCheck} /> <span> {ele}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Learn;
