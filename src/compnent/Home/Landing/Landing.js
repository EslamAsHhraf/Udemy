import React from "react";
import LandingIamge from "../../images/landing.jpg";
const Landing = () => {
  return (
    <header className="box landing">
      <div className="text">
        <h2>New to Udemy? Lucky you.</h2>
        <p>
          Courses start at E£169.99 .Get your new- student offer before it
          expires.
        </p>
      </div>
      <img src={LandingIamge} alt="landing" />
    </header>
  );
};

export default Landing;
