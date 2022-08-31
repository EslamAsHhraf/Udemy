import React, { Component } from "react";
import Course from "./Course";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

class CourseSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
    };
    this.infoRef = React.createRef();
    this.preRef = React.createRef();
    this.pastRef = React.createRef();
  }

  clickLeft = () => {
    let width = this.infoRef.current.getBoundingClientRect().width;
    this.preRef.current.style.display = "block";
    this.infoRef.current.scrollLeft -= width;
    if (this.infoRef.current.scrollLeft - width < 0) {
      this.pastRef.current.style.display = "none";
    }
  };

  clickRight = () => {
    let width = this.infoRef.current.getBoundingClientRect().width;
    this.infoRef.current.scrollLeft += width;
    if (
      this.infoRef.current.scrollLeft - this.infoRef.current.scrollWidth >
      -2 * width
    ) {
      this.preRef.current.style.display = "none";
    }
    this.pastRef.current.style.display = " block";
  };

  componentDidMount() {
    axios
      .get("http://myjson.dit.upm.es/api/bins/7bqs")
      .then((response) => {
        this.setState({ courses: response.data });
        console.log(this.state.courses);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <main>
        <section className="box courses">
          <span ref={this.pastRef} className="left" onClick={this.clickLeft}>
            <FontAwesomeIcon icon={faCircleArrowLeft} color="black" />
          </span>
          <span ref={this.preRef} className="right" onClick={this.clickRight}>
            <FontAwesomeIcon icon={faCircleArrowRight} color="black" />
          </span>
          <div className="text">
            <h3>Expand your career opptunities with Python</h3>
            <p>
              Take one of Udemy's range of Python courses and learn how to code
              using this incredibly useful language. Its simple syntax and
              readability makes Python perfect for Flask, Django, data science,
              and machine learning. You'll learn how to build everything from
              games to sites to apps. Choose from a range of courses that will
              appeal to...
            </p>
            <button>Explore Python</button>
            <div ref={this.infoRef} className="info">
              {this.state.courses.length
                ? this.state.courses.map((ele) => (
                    <Course key={ele.id} Course={ele}></Course>
                  ))
                : null}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default CourseSection;
