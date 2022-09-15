import React from "react";
import styles from "../CoursePage.module.css";
import ShowMoreText from "react-show-more-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

const Description = ({ data, placeholder }) => {
  return (
    <div className={`${styles.box}  mt-3`}>
      <h3 className="mb-4 fw-bold">Description</h3>
      <ShowMoreText
        lines={1}
        more={
          <>
            Show more <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
          </>
        }
        less={
          <>
            Show less <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
          </>
        }
        className="content-css"
        anchorClass={`my-anchor-css-class ${styles.button} ${styles.showMore} fw-bold`}
        truncatedEndingComponent={
          <div className={`${styles.contentMore}`}>
            {data?.description?.map((ele, index) => {
              if (index <= 3) {
                return (
                  <Fragment key={index}>
                    {index === 0 ? (
                      <strong
                        className={`mb-3 d-block ${
                          placeholder ? "placeholder" : " "
                        }`}
                      >
                        {ele}
                      </strong>
                    ) : (
                      <p
                        className={`mb-3  ${placeholder ? "placeholder" : " "}`}
                      >
                        {ele}
                      </p>
                    )}
                  </Fragment>
                );
              } else {
                return <Fragment key={index}></Fragment>;
              }
            })}
          </div>
        }
      >
        {data.description?.map((ele, index) => {
          return (
            <Fragment key={index}>
              {index === 0 ? (
                <strong
                  className={`mb-3 d-block ${
                    placeholder ? "placeholder" : " "
                  }`}
                >
                  {ele}
                </strong>
              ) : (
                <p className={`mb-3  ${placeholder ? "placeholder" : " "}`}>
                  {ele}
                </p>
              )}
            </Fragment>
          );
        })}
        <h3 className="mt-5 mb-3 fw-bold">Who this course is for:</h3>
        <div className={`d-flex flex-column ${styles.requirements}`}>
          {data.whoFor?.map((ele, index) => {
            return (
              <Fragment key={index}>
                {" "}
                <span className=" me-4 mb-2">• {ele}</span>
              </Fragment>
            );
          })}
        </div>
      </ShowMoreText>
    </div>
  );
};

export default Description;
