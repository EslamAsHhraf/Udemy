import React, { useState } from "react";
import styles from "../CoursePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const CourseContent = ({ data, placeholder }) => {
  const [itemsShow, setItemsShow] = useState(10);
  const [appear, setAppear] = useState(false);

  const moreSection = () => {
    setAppear(true);
    setItemsShow(data.content?.length);
  };
  return (
    <div className={`${styles.box}`}>
      <h3 className=" fw-bold">Course content</h3>
      <diV
        className={`d-flex justify-content-between ${styles.medium} align-items-center`}
      >
        <diV className="my-3">
          {data.sectionsCount} sections • {data.lecturesCount} lectures •
          {data.totalLength} total length
        </diV>
        <diV className={`${styles.button}`}> Expand all sections</diV>
      </diV>
      <div
        className={`accordion ${styles.accordion}`}
        id="accordionPanelsStayOpenExample"
      >
        {data.content?.map((ele, index) => {
          if (index < itemsShow)
            return (
              <div
                key={index}
                className={`accordion-item ${styles.accordionItem} `}
              >
                <h2
                  className="accordion-header"
                  id={`panelsStayOpen-heading${index}`}
                >
                  <button
                    className={`accordion-button ${styles.collapse}  ${
                      index === 0 ? "" : "collapsed"
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#panelsStayOpen-collapse${index}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={`panelsStayOpen-collapse${index}`}
                  >
                    <div
                      className={`fw-bold  ${
                        placeholder ? "placeholder" : " "
                      }`}
                    >
                      {ele[0]}
                    </div>{" "}
                    <div className={`${styles.medium}`}>
                      {ele[1].length} lectures •
                    </div>
                  </button>
                </h2>
                <div
                  id={`panelsStayOpen-collapse${index}`}
                  className={`accordion-collapse collapse  ${
                    index === 0 ? "show" : ""
                  }`}
                  aria-labelledby={`panelsStayOpen-heading${index}`}
                >
                  {ele[1].map((item, indx) => {
                    return (
                      <div
                        key={indx}
                        className={`accordion-body ${styles.lesson}`}
                      >
                        <FontAwesomeIcon
                          icon={faCirclePlay}
                          className="me-1 ms-3"
                        />{" "}
                        <span
                          className={` ${placeholder ? "placeholder" : " "}`}
                        >
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
        })}
      </div>
      {appear || data.content?.length <= 10 ? (
        <></>
      ) : (
        <button onClick={moreSection} className={`${styles.moreSections}`}>
          {data.content?.length - itemsShow} maore sections
        </button>
      )}
    </div>
  );
};

export default CourseContent;
