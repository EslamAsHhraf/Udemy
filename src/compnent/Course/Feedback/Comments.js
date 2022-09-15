import React, { useState } from "react";
import styles from "../CoursePage.module.css";
import StarSection from "../../StarSection/StarSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import ShowMoreText from "react-show-more-text";
import Like from "./Like";
const Comments = ({ item, placeholder }) => {
  let [feedback, setFeedback] = useState(0);

  return (
    <div className={`d-flex gap-3 mb-3 ${styles.commentContiner}`}>
      <div className={`${styles.userLetter}  fw-bold`}>
        {item.name
          ?.match(/\b(\w)/g)
          .join("")
          .substring(0, 2)}
      </div>
      <div className={`mb-3`}>
        <div className={`fw-bold mb-2  ${placeholder ? "placeholder" : " "}`}>
          {item.name}
        </div>
        {!placeholder && (
          <StarSection unique={"66"} rate={Number(item.rate)}></StarSection>
        )}
        {item.content?.length < 300 ? (
          <p className={`my-2 ${placeholder ? "placeholder" : " "} `}>
            {item.content}
          </p>
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
                <p
                  className={`my-2 ${styles.commentMore}  ${
                    placeholder ? "placeholder" : " "
                  }`}
                >
                  {item.content?.substring(0, 300)}...
                </p>
              </>
            }
          >
            <p className={`my-2`}>{item.content}</p>
          </ShowMoreText>
        )}
        {feedback === 0 ? (
          <p className="my-2">Was this review helpful?</p>
        ) : (
          <p className="my-2">Thank you for your feedback</p>
        )}
        <div className="d-flex gap-3 align-items-center">
          {!placeholder && (
            <Like feedback={feedback} setFeedback={setFeedback}></Like>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
