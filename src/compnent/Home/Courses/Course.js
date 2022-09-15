import React, { useState } from "react";
import { Link } from "react-router-dom";
import StarSection from "../../StarSection/StarSection";
import styles from "./Course.module.css";
import { Button, Popover, PopoverBody } from "reactstrap";
import PopUp from "./PopUp";

function Course({ Course, setCourse, placeholder }) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [list, setList] = useState(false);
  const onHover = () => {
    setPopoverOpen(true);
  };

  const onHoverList = () => {
    setList(true);
  };

  const onHoverLeave = () => {
    setTimeout(function () {
      setPopoverOpen(false);
    }, 200);
  };
  const onHoverLeaveList = () => {
    setList(false);
  };
  return (
    <Link
      to={`${Course.id}`}
      onClick={() => setCourse(`${Course.id}`)}
      className={`Course_section ${styles.Coursesection}`}
    >
      <Button
        className={`${styles.Popover}`}
        id={`Popover${Course.id}`}
        type="button"
        onMouseEnter={onHover}
        onMouseLeave={onHoverLeave}
      >
        <div>
          <div className={` ${styles.img}`}>
            <img src={Course.image} alt="CourseImage"></img>
          </div>
          <h5 className={` ${placeholder ? "placeholder" : " "}`}>
            {Course.title}
          </h5>
          <span className={` ${placeholder ? "placeholder" : " "}`}>
            {Course.author}
          </span>
          <div className="star">
            <span className={`rate ${placeholder ? "placeholder" : " "}`}>
              {Course.rating.toFixed(1)}
            </span>
            {!placeholder && (
              <StarSection
                unique={`20  ${Course.title}`}
                className="checked"
                rate={Course.rating}
              ></StarSection>
            )}
            <span> ({Course.people})</span>
          </div>
          <div className="price">
            <span className={` ${placeholder ? "placeholder" : " "}`}>
              E£{Course.price}
            </span>
            <del className={` ${placeholder ? "placeholder" : " "}`}>
              E£{Course.old_price}
            </del>
          </div>
        </div>
      </Button>
      <Popover
        placement="top"
        isOpen={list || popoverOpen}
        target={`Popover${Course.id}`}
        onMouseEnter={onHoverList}
      >
        <PopoverBody
          className={`${styles.list}`}
          onMouseLeave={onHoverLeaveList}
        >
          <PopUp Course={Course}></PopUp>
        </PopoverBody>
      </Popover>
    </Link>
  );
}

export default Course;
