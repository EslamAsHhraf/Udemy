import React, { useEffect, useState } from "react";
import styles from "../CoursePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import SidebarInfo from "./SidebarInfo";

const SideBar = ({ data, placeholder }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const fixesRef = React.createRef();
  const sidesRef = React.createRef();

  const handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom + 435 >= docHeight) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    sidesRef.current.style = "top: -350px;";
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    if (handleScroll()) {
      fixesRef.current.style.position = "";
      sidesRef.current.style.bottom = 0;
      sidesRef.current.style.top = "";
    } else if (scrollPosition > 400) {
      fixesRef.current.style.position = "fixed";
      fixesRef.current.style.top = 0;
      sidesRef.current.style = "top: -350px;";
      sidesRef.current.style.bottom = "";
    } else if (scrollPosition <= 400) {
      fixesRef.current.style.position = "";
      sidesRef.current.style = "top: -350px;";
      sidesRef.current.style.bottom = "";
    }
    return () => window.removeEventListener("scroll", updatePosition);
  }, [scrollPosition, sidesRef, fixesRef]);
  return (
    <div ref={sidesRef} className={`${styles.sideBar}`}>
      <div className={`${styles.imgSide} mb-3`}>
        <img
          className=" img-fluid "
          color="black"
          src={data.image}
          alt="CourseImage"
        ></img>
        <div className={`${styles.play}`}>
          <FontAwesomeIcon icon={faPlay} className={` fs-2`} />
        </div>
        <p className={`${styles.preview}`}>Preview this course</p>
      </div>
      <div ref={fixesRef} className={`${styles.fixedSide} mb-3`}>
        <SidebarInfo data={data} placeholder={placeholder}></SidebarInfo>
      </div>
    </div>
  );
};

export default SideBar;
