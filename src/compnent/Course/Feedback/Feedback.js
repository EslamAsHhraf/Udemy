import React from "react";
import styles from "../CoursePage.module.css";
import StarSection from "../StarSection";

const Feedback = ({ data }) => {
  return (
    <div className={`${styles.box} mt-4`}>
      <h3 className="mb-4  fw-bold">Student feedback</h3>
      <div className="d-flex gap-4 align-items-center">
        <div
          className={`d-flex fw-bolder ${styles.rate} flex-column gap-2 align-items-center`}
        >
          <h3 className={`fw-bold `}>{data.rate}</h3>
          <div>
            <StarSection
              className={`fw-bold fs-1`}
              rate={data.rate}
            ></StarSection>
          </div>
          <h4 className={`fw-bold  ${styles.medium}`}>Course Rating</h4>
        </div>
        <div className={` ${styles.rateLevel} `}>
          {data.studentFeedback?.map((ele, index) => {
            return (
              <div className={`mb-1 d-flex ${styles.row} gap-2`}>
                <div className={`${styles.barContainer}`}>
                  <div
                    style={{ width: `${ele}%` }}
                    className={`${styles.bar}`}
                  ></div>
                </div>
                <div className={` d-flex gap-2`}>
                  <div>
                    <StarSection rate={5 - index}></StarSection>
                  </div>
                  <div>{ele}%</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
