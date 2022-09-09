import React from "react";
import styles from "../CoursePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Comments from "./Comments";
const Reviews = ({ data, placeholder }) => {
  const ratings = [
    "Five stars",
    "Four stars",
    "Three stars",
    "Two stars",
    "One stars",
  ];
  return (
    <div className={`${styles.box} mt-4`}>
      <h3 className="mb-4  fw-bold">Reviews</h3>
      <div className={`d-flex  align-items-center gap-4 ${styles.level}`}>
        <form className={`${styles.fromRrview} d-flex`}>
          <div className={`${styles.searchRrview}`}>
            <input
              type="text"
              className={styles.inputReview}
              placeholder="Search reviews"
            />
          </div>
          <button
            className={styles.buttonReview}
            type="submit"
            onClick={(e) => e.preventDefault()}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} color="white" />{" "}
          </button>
        </form>
        <div className={`input-group  ${styles.dropdown}`}>
          <select className={`form-select `}>
            <option value="1">All ratings</option>
            {ratings.map((ele) => {
              return <option value={ele}>{ele}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="mt-5">
        {data.reviews?.map((ele) => {
          return <Comments item={ele} placeholder={placeholder}></Comments>;
        })}
      </div>
    </div>
  );
};

export default Reviews;
