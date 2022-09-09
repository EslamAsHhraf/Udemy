import React from "react";
import styles from "../CoursePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAward,
  faUser,
  faCirclePlay,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import ShowMoreText from "react-show-more-text";

const Instructors = ({ data, placeholder }) => {
  return (
    <div className={`${styles.box} mt-4`}>
      <h3 className="mb-4  fw-bold">Instructors</h3>
      <div>
        {data.instructor?.map((ele) => {
          return (
            <div className={` mb-5 `}>
              <h5
                className={`${styles.button} ${styles.instructors}  ${
                  placeholder ? "placeholder" : " "
                }`}
              >
                {ele.name}
              </h5>
              <p
                className={`text-secondary  ${
                  placeholder ? "placeholder" : " "
                }`}
              >
                {" "}
                {ele.Intro}
              </p>
              <div
                className={`d-flex gap-4 align-items-center mb-4 ${styles.level}`}
              >
                {!placeholder && (
                  <img
                    src={`${ele.Image}`}
                    alt="Instructors"
                    className={`rounded-circle img-fluid ${styles.instructorsImg} `}
                  ></img>
                )}
                <div className="d-flex flex-column gap-2">
                  <div>
                    <FontAwesomeIcon
                      icon={faStar}
                      className={` ${styles.large} ${styles.smallMargin}`}
                    />
                    {ele.Rating} Instructor Rating
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faAward}
                      className={`me-4 ${styles.large}`}
                    />
                    {ele.reviewsNumber} Reviewss
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faUser}
                      className={` ${styles.large}  ${styles.groupMargin}`}
                    />
                    {ele.studentsNumber} Students
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faCirclePlay}
                      className={`${styles.large} ${styles.playMargin}`}
                    />
                    {ele.coursesNumber} Courses
                  </div>
                </div>
              </div>
              <ShowMoreText
                lines={1}
                className="content-css"
                more={
                  <>
                    Show more <FontAwesomeIcon icon={faChevronDown} />
                  </>
                }
                less={
                  <>
                    Show less <FontAwesomeIcon icon={faChevronUp} />
                  </>
                }
                anchorClass={`my-anchor-css-class ${styles.button} ${styles.showMore} fw-bold`}
                truncatedEndingComponent={
                  <div className={`${styles.contentMore}`}>
                    {ele.description?.map((item, index) => {
                      if (index < 2)
                        return (
                          <p
                            className={`mb-3  ${
                              placeholder ? "placeholder" : " "
                            }`}
                          >
                            {item}
                          </p>
                        );
                    })}
                  </div>
                }
              >
                {ele.description?.map((item) => {
                  return (
                    <p
                      className={`mb-3  ${placeholder ? "placeholder" : " "} `}
                    >
                      {item}
                    </p>
                  );
                })}
              </ShowMoreText>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Instructors;
