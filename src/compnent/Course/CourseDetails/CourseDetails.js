import React from "react";
import CourseContent from "./CourseContent";
import Description from "./Description";

import Learn from "./Learn";
import Requirements from "./Requirements";
const CourseDetails = ({ data, placeholder }) => {
  return (
    <div>
      <Learn placeholder={placeholder} data={data}></Learn>
      <CourseContent placeholder={placeholder} data={data}></CourseContent>
      <Requirements placeholder={placeholder} data={data}></Requirements>
      <Description placeholder={placeholder} data={data}></Description>
    </div>
  );
};

export default CourseDetails;
