import React from "react";
import CourseContent from "./CourseContent";
import Description from "./Description";

import Learn from "./Learn";
import Requirements from "./Requirements";
const CourseDetails = ({ data }) => {
  return (
    <div>
      <Learn data={data}></Learn>
      <CourseContent data={data}></CourseContent>
      <Requirements data={data}></Requirements>
      <Description data={data}></Description>
    </div>
  );
};

export default CourseDetails;
