import React from "react";
import styles from "../CoursePage.module.css";

const Requirements = ({ data, placeholder }) => {
  return (
    <div className={`${styles.box} mt-3`}>
      <h3 className="mb-4 fw-bold">Requirements</h3>
      <ul className={`${styles.requirements}`}>
        {data.requirements?.map((ele) => {
          return (
            <li>
              <span className={`fw-bolder fs-4 me-4`}>• </span>
              <span className={`${placeholder ? "placeholder" : " "}`}>
                {ele}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Requirements;
