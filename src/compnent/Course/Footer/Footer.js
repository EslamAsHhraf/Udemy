import React from "react";
import styles from "../CoursePage.module.css";
import Logo from "../../images/logo-udemy-inverted.svg";
import boxLight from "../../images/box-light.svg";
import eventbriteLight from "../../images/eventbrite-light.svg";
import nasdaqLight from "../../images/nasdaq-light.svg";
import volkswagenLight from "../../images/volkswagen-light.svg";
import netapplight from "../../images/netapp-light.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={`${styles.footer} pb-5`}>
      <div className={` ${styles.footerHead} `}>
        <diV className={`d-flex `}>
          <p className="fs-5 fw-bold">
            Top companies choose{" "}
            <span className={` ${styles.path} `}>Udemy Business</span> to build
            in-demand career skills.
          </p>
        </diV>
        <div className={`${styles.footerImage} d-flex gap-3`}>
          <span className={`  ${styles.Logo}`}>
            <img src={nasdaqLight} alt="nasdaq"></img>
          </span>
          <span className={`  ${styles.Logo}`}>
            <img src={volkswagenLight} alt="nasdaq"></img>
          </span>
          <span className={`  ${styles.Logo}`}>
            <img src={boxLight} alt="nasdaq"></img>
          </span>
          <span className={`  ${styles.Logo}`}>
            <img src={netapplight} alt="nasdaq"></img>
          </span>
          <span className={`  ${styles.Logo}`}>
            <img src={eventbriteLight} alt="nasdaq"></img>
          </span>
        </div>
      </div>
      <div className={` ${styles.footerInfo} `}>
        <div className={`d-flex  ${styles.footerEnd}`}>
          <div className="d-flex flex-column gap-3 me-5">
            <span>Udemy Business</span>
            <span>Teach on Udemy</span>
            <span>Get the app</span>
            <span>About us</span>
            <span>Contact us</span>
          </div>
          <div className="d-flex flex-column gap-3 me-5">
            <span>Careers</span>
            <span>Blog</span>
            <span>Help and Support</span>
            <span>Affiliate</span>
            <span>Investors</span>
          </div>
          <div className="d-flex flex-column gap-3">
            <span>Terms </span>
            <span>Privacy policy</span>
            <span>Cookie settings</span>
            <span>Sitemap</span>
            <span>Accessibilty statement</span>
          </div>
        </div>
        <diV className={`${styles.language}`}>
          <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon> English
        </diV>
      </div>
      <div className={` ${styles.footerInfo} `}>
        <Link to="/" className={`  ${styles.Logo}`}>
          <img src={Logo} alt="logo-udemy" />
        </Link>
        <div>
          <p className={`${styles.medium}`}>© 2022 Udemy, Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
