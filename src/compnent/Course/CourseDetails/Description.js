import React from "react";
import styles from "../CoursePage.module.css";
import ShowMoreText from "react-show-more-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Description = ({ data, placeholder }) => {
  return (
    <div className={`${styles.box}  mt-3`}>
      <h3 className="mb-4 fw-bold">Description</h3>
      <ShowMoreText
        lines={1}
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
        className="content-css"
        anchorClass={`my-anchor-css-class ${styles.button} ${styles.showMore} fw-bold`}
        truncatedEndingComponent={
          <div className={`${styles.contentMore}`}>
            {data.description?.map((ele, index) => {
              if (index <= 3)
                return (
                  <>
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
                  </>
                );
            })}
          </div>
        }
      >
        {data.description?.map((ele, index) => {
          return (
            <>
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
            </>
          );
        })}
        <h3 className="mt-5 mb-3 fw-bold">Who this course is for:</h3>
        <div className={`d-flex flex-column ${styles.requirements}`}>
          {data.whoFor.map((ele) => {
            return (
              <>
                {" "}
                <span className=" me-4 mb-2">• {ele}</span>
              </>
            );
          })}
        </div>
      </ShowMoreText>
    </div>
  );
};

export default Description;
