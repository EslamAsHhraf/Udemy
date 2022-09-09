import React from "react";
import styles from "../CoursePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faTv,
  faCloudArrowDown,
  faInfinity,
  faMobileScreen,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
const SidebarInfo = ({ data, placeholder }) => {
  return (
    <>
      <div className={`${styles.infoSide} mb-3`}>
        <div className={`fw-bold mb-1 fs-2 d-flex gap-1 align-items-center`}>
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
          }`}
        >
          <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
          <strong> 1 day</strong> left at this price!
        </p>
        <button>Add to cart</button>
        <button>Buy now</button>
        <p className={`text-center  ${placeholder ? "placeholder" : " "}`}>
          30-Day Money-Back Guarantee
        </p>
        <h6 className="fw-bold">This course includes:</h6>
        <div className="d-flex flex-column gap-2">
          <div className="d-flex align-items-center gap-3 ">
            <FontAwesomeIcon icon={faTv} className={`${styles.medium}`} />
            <p className={`mb-0  ${placeholder ? "placeholder" : " "}`}>
              {data.hoursCount} hours on-demand video
            </p>
          </div>
          <div className="d-flex align-items-center gap-3 ">
            <FontAwesomeIcon icon={faFile} />
            <p className={`mb-0  ${placeholder ? "placeholder" : " "}`}>
              {data.articlesCount} article
            </p>
          </div>
          <div className="d-flex align-items-center gap-2 ">
            <FontAwesomeIcon
              icon={faCloudArrowDown}
              className={`${styles.medium} fs-6`}
            />
            <p className={`mb-0  ${placeholder ? "placeholder" : " "}`}>
              {data.downloadableResource} downloadable resources
            </p>
          </div>
          <div className="d-flex align-items-center gap-3 ">
            <FontAwesomeIcon icon={faInfinity} />
            <p className={`mb-0  ${placeholder ? "placeholder" : " "}`}>
              Full lifetime access
            </p>
          </div>
          <div className="d-flex align-items-center gap-3 ">
            <FontAwesomeIcon icon={faMobileScreen} />
            <p className={`mb-0  ${placeholder ? "placeholder" : " "}`}>
              Access on mobile and TV
            </p>
          </div>
          <div className="d-flex align-items-center gap-3 ">
            <FontAwesomeIcon icon={faTrophy} />
            <p className={`mb-0  ${placeholder ? "placeholder" : " "}`}>
              Certificate of completion
            </p>
          </div>
        </div>
      </div>
      <div className={`d-flex fw-bold mb-2 ${styles.actionCourse} `}>
        <span>Share</span>
        <span>Gift this course</span>
        <span>Applay coupon</span>
      </div>
      <div className={`mt-4 ${styles.business}`}>
        <h5 className="fw-bold">Training 5 or more people?</h5>
        <p>
          Get your team access to 17,000+ top Udemy courses anytime, anywhere.
        </p>
        <button>Try udemy business</button>
      </div>
    </>
  );
};

export default SidebarInfo;
