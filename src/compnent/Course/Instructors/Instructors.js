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
import { Fragment } from "react";

const Instructors = ({ data, placeholder }) => {
  return (
    <div className={`${styles.box} mt-4`}>
      <h3 className="mb-4  fw-bold">Instructors</h3>
      <div>
        {data.instructor?.map((ele, index) => {
          return (
            <div key={index} className={` mb-5 `}>
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
                  <div key="faStar">
                    <FontAwesomeIcon
                      icon={faStar}
                      className={` ${styles.large} ${styles.smallMargin}`}
                    ></FontAwesomeIcon>
                    {ele.Rating} Instructor Rating
                  </div>
                  <div key="faAward">
                    <FontAwesomeIcon
                      icon={faAward}
                      className={`me-4 ${styles.large}`}
                    ></FontAwesomeIcon>
                    {ele.reviewsNumber} Reviewss
                  </div>
                  <div key="faUser">
                    <FontAwesomeIcon
                      icon={faUser}
                      className={` ${styles.large}  ${styles.groupMargin}`}
                    ></FontAwesomeIcon>
                    {ele.studentsNumber} Students
                  </div>
                  <div key="faCirclePlay">
                    <FontAwesomeIcon
                      icon={faCirclePlay}
                      className={`${styles.large} ${styles.playMargin}`}
                    ></FontAwesomeIcon>
                    {ele.coursesNumber} Courses
                  </div>
                </div>
              </div>
              <ShowMoreText
                lines={1}
                className="content-css"
                more={
                  <>
                    Show more{" "}
                    <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                  </>
                }
                less={
                  <>
                    Show less{" "}
                    <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
                  </>
                }
                anchorClass={`my-anchor-css-class ${styles.button} ${styles.showMore} fw-bold`}
                truncatedEndingComponent={
                  <div className={`${styles.contentMore}`}>
                    {ele.description?.map((item, index) => {
                      if (index < 2) {
                        return (
                          <p
                            key={item}
                            className={`mb-3  ${
                              placeholder ? "placeholder" : " "
                            }`}
                          >
                            {item}
                          </p>
                        );
                      } else return <Fragment key={item}></Fragment>;
                    })}
                  </div>
                }
              >
                {ele.description?.map((item) => {
                  return (
                    <p
                      key={item}
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
