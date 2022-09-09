import React from "react";
import styles from "../CoursePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const Like = ({ feedback, setFeedback }) => {
  return (
    <>
      <div
        className={`${styles.like} ${feedback === 1 ? styles.likeActive : ""}`}
        onClick={() => {
          setFeedback(feedback === 1 ? 0 : 1);
        }}
      >
        {feedback === 1 ? (
          <FontAwesomeIcon
            className={`${styles.large}`}
            icon={faThumbsUp}
            color="white"
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            className={`${styles.large}`}
            icon={faThumbsUp}
          ></FontAwesomeIcon>
        )}
      </div>
      <div
        className={`${styles.like}  ${
          feedback === -1 ? styles.likeActive : ""
        }`}
        onClick={() => {
          setFeedback(feedback === -1 ? 0 : -1);
        }}
      >
        {feedback === -1 ? (
          <FontAwesomeIcon
            className={`${styles.large}`}
            icon={faThumbsDown}
            color="white"
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            className={`${styles.large}`}
            icon={faThumbsDown}
          ></FontAwesomeIcon>
        )}
      </div>
      <span className={`${styles.report} `}>Report</span>
    </>
  );
};

export default Like;
