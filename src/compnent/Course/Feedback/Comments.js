import React from "react";
import styles from "../CoursePage.module.css";
import StarSection from "../StarSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import ShowMoreText from "react-show-more-text";
const Comments = ({ data }) => {
  return (
    <div className="mt-5">
      {data.reviews?.map((ele) => {
        return (
          <div className={`d-flex gap-3 mb-3 ${styles.commentContiner}`}>
            <div className={`${styles.userLetter}  fw-bold`}>
              {ele.name
                ?.match(/\b(\w)/g)
                .join("")
                .substring(0, 2)}
            </div>
            <div className={`mb-3`}>
              <diV className="fw-bold mb-2">{ele.name}</diV>
              <StarSection rate={Number(ele.rate)}></StarSection>
              {ele.content?.length < 300 ? (
                <p className={`my-2`}>{ele.content}</p>
              ) : (
                <ShowMoreText
                  lines={1}
                  className={`content-css`}
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
                    <>
                      <p className={`my-2 ${styles.commentMore}`}>
                        {ele.content?.substring(0, 300)}...
                      </p>
                    </>
                  }
                >
                  <p className={`my-2`}>{ele.content}</p>
                </ShowMoreText>
              )}
              <p className="my-2">Was this review helpful?</p>
              <div className="d-flex gap-3 align-items-center">
                <div className={`${styles.like}`}>
                  <FontAwesomeIcon
                    className={`${styles.large}`}
                    icon={faThumbsUp}
                  ></FontAwesomeIcon>
                </div>
                <div className={`${styles.like}`}>
                  <FontAwesomeIcon
                    className={`${styles.large}`}
                    icon={faThumbsDown}
                  ></FontAwesomeIcon>
                </div>
                <span className={`${styles.report} `}>Report</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
