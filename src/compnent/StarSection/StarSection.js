import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import styles from "../Course/CoursePage.module.css";

function starSection({ rate, unique }) {
  let starSection = [];

  /*ADD stars */
  let all = 5;
  for (let i = 1; i <= rate; i++) {
    starSection.push(
      <span key={`${i + 10} ${unique}`} className={`${styles.checked}`}>
        <FontAwesomeIcon icon={faStar} />
      </span>
    );
    all--;
  }
  if (!Number.isInteger(rate)) {
    starSection.push(
      <span key={`${all} ${unique}`} className={`${styles.checked}`}>
        <FontAwesomeIcon icon={faStarHalfStroke} />
      </span>
    );
    all--;
  }
  for (let i = 0; i < all; i++) {
    starSection.push(
      <span key={`${i + 5}  ${unique}`} className={`${styles.checked}`}>
        <FontAwesomeIcon icon={faStarRegular} />
      </span>
    );
  }
  return starSection;
}
const StarSection = ({ rate, unique }) => {
  return <>{starSection({ rate, unique })}</>;
};

export default StarSection;
