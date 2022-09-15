import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faGlobe,
  faClosedCaptioning,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../CoursePage.module.css";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { Fragment } from "react";

const CourseHeadInfo = ({ data, placeholder }) => {
  return (
    <>
      {" "}
      <div className="mb-2">
        Created by{" "}
        {data.instructor?.map((ele, index) => {
          return (
            <Fragment key={ele.name}>
              <span
                className={`${styles.link} ${
                  placeholder ? "placeholder" : " "
                }`}
              >
                {ele.name}
              </span>
              {index !== data.instructor.length - 1 ? ", " : ""}
            </Fragment>
          );
        })}
      </div>
      <div className={`d-flex gap-3  ${styles.flexSmall}`}>
        <div className={`${styles.icons} ${placeholder ? "placeholder" : " "}`}>
          <FontAwesomeIcon icon={faCircleInfo} />
          Last updated {data.lastUpdate}
        </div>
        <div className={`${styles.icons} ${placeholder ? "placeholder" : " "}`}>
          <FontAwesomeIcon icon={faGlobe} />
          {data.globe}
        </div>
        <div className={`${styles.icons} ${placeholder ? "placeholder" : " "}`}>
          <FontAwesomeIcon icon={faClosedCaptioning} />
          {data.Captioning}
        </div>
      </div>
      <div
        className={`${styles.smallScreen} fw-bold mb-1 fs-2 d-flex gap-1 align-items-center`}
      >
        <span className={` ${placeholder ? "placeholder" : " "}`}>
          E£{data.price}
        </span>
        <del
          className={` ${styles.originalPrice} ${
            placeholder ? "placeholder" : " "
          }`}
        >
          E£{data.originalPrice}
        </del>
      </div>
      <p
        className={`${styles.alarm} mb-3  ${
          placeholder ? "placeholder" : " "
        } ${styles.smallScreen}`}
      >
        <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>{" "}
        <strong> 1 day </strong> left at this price!
      </p>
      <div className={`${styles.flexCoulmnSmall} `}>
        <button className={`${styles.cart}`}>Add to cart</button>
        <p className={`text-center  ${placeholder ? "placeholder" : " "}`}>
          30-Day Money-Back Guarantee
        </p>
        <p className={`text-center  ${placeholder ? "placeholder" : " "}`}>
          Full Lifetime Accesss
        </p>
      </div>
      <div
        className={`d-flex fw-bold mb-2 ${styles.level} ${styles.actionHead}   ${styles.smallScreen}`}
      >
        <span>Share</span>
        <span>Gift this course</span>
        <span>Applay coupon</span>
      </div>
    </>
  );
};

export default CourseHeadInfo;
