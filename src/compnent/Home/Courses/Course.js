import React from "react";
import { Link } from "react-router-dom";
import StarSection from "../../StarSection/StarSection";

function Course({ Course, setCourse, placeholder }) {
  return (
    <Link
      key={Course.id}
      to={`${Course.id}`}
      onClick={() => setCourse(`${Course.id}`)}
      className="Course_section"
    >
      <div>
        <img src={Course.image} alt="CourseImage"></img>
        <h5 className={` ${placeholder ? "placeholder" : " "}`}>
          {Course.title}
        </h5>
        <span className={` ${placeholder ? "placeholder" : " "}`}>
          {Course.author}
        </span>
        <div className="star">
          <span className={`rate ${placeholder ? "placeholder" : " "}`}>
            {Course.rating.toFixed(1)}
          </span>
          {!placeholder && (
            <StarSection className="checked" rate={Course.rating}></StarSection>
          )}
        </div>
        <div className="price">
          <span className={` ${placeholder ? "placeholder" : " "}`}>
            E£{Course.price}
          </span>
          <del className={` ${placeholder ? "placeholder" : " "}`}>
            E£{Course.old_price}
          </del>
        </div>
      </div>
    </Link>
  );
}

export default Course;
