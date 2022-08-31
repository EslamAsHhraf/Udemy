import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
function starSection(Course) {
  let starSection = [];
  starSection.push(<span className="rate"> {Course.rating.toFixed(1)}</span>);

  /*ADD stars */
  let all = 5;
  for (let i = 1; i <= Course.rating; i++) {
    starSection.push(
      <span className="checked">
        <FontAwesomeIcon icon={faStar} />
      </span>
    );
    all--;
  }
  if (!Number.isInteger(Course.rating)) {
    starSection.push(
      <span className="checked">
        <FontAwesomeIcon icon={faStarHalfStroke} />
      </span>
    );
    all--;
  }
  for (let i = 0; i < all; i++) {
    starSection.push(
      <span className="checked">
        <FontAwesomeIcon icon={faStarRegular} />
      </span>
    );
  }
  starSection.push(<span className="num">( {Course.people} )</span>);
  return starSection;
}
function Course({ Course }) {
  return (
    <div className="Course_section">
      <a href={Course.link}>
        <img src={Course.image} alt="CourseImage"></img>
        <h5>{Course.title}</h5>
        <span>{Course.author}</span>
        <div className="star">{starSection(Course)}</div>
        <div className="price">
          <span>E£{Course.price}</span>
          <del>E£{Course.old_price}</del>
        </div>
      </a>
    </div>
  );
}

export default Course;
