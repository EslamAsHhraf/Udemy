import React from "react";
import styles from "./Course.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const popUp = ({ Course }) => {
  return (
    <>
      <h6>{Course.title}</h6>
      <p className={`${styles.update} mb-1`}>
        Updated <span className="fw-bold">{Course.update}</span>
      </p>
      <p className={`${styles.meduim} ${styles.gary} mb-1`}>
        {Course.total_hourse} total hours All • Levels • Subtitles
      </p>
      <p className={`${styles.meduim}`}>{Course.intro}</p>
      {Course.overview?.map((ele) => {
        return (
          <div
            className={`${styles.meduim} d-flex gap-2 align-items-flex-start`}
          >
            <FontAwesomeIcon icon={faCheck} /> <span> {ele}</span>
          </div>
        );
      })}
      <div className="mt-2 d-flex gap-1">
        <button className={`${styles.cart}`}>Add to cart</button>
        <div className={`${styles.heart}`}>
          <FontAwesomeIcon className={`fs-4`} icon={faHeart} />
        </div>
      </div>
    </>
  );
};

export default popUp;
