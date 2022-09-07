import React from "react";
import { Link } from "react-router-dom";
import StarSection from "../../Course/StarSection";

function Course({ Course, setCourse }) {
  return (
    <Link
      key={Course.id}
      to={`${Course.id}`}
      onClick={() => setCourse(`${Course.id}`)}
      className="Course_section"
    >
      <div>
        <img src={Course.image} alt="CourseImage"></img>
        <h5>{Course.title}</h5>
        <span>{Course.author}</span>
        <div className="star">
          <span className="rate"> {Course.rating.toFixed(1)}</span>
          <StarSection className="checked" rate={Course.rating}></StarSection>
        </div>
        <div className="price">
          <span>E£{Course.price}</span>
          <del>E£{Course.old_price}</del>
        </div>
      </div>
    </Link>
  );
}

export default Course;
