import React from "react";
import Form from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faGlobe,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../images/logo-udemy.svg";
const Nav = () => {
  return (
    <nav>
      <i className="appear small">
        <FontAwesomeIcon icon={faBars} />
      </i>
      <div className="Logo small">
        <img src={Logo} alt="logo-udemy" />
      </div>
      <div>Categories</div>
      <Form></Form>
      <div className="min_2">Udemy Business</div>
      <div className="min_2">Teach on Udemy</div>
      <div className="shopping_cart small">
        <span className="appear">
          <FontAwesomeIcon icon={faMagnifyingGlass} color="black" />
        </span>
        <span>
          <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: "20px" }} />
        </span>
      </div>
      <button className="buttonHome" type="button">
        Log in
      </button>
      <button type="button" className="signup buttonHome">
        Sign up
      </button>
      <div className="earth">
        <span>
          <FontAwesomeIcon icon={faGlobe} style={{ fontSize: "20px" }} />
        </span>
      </div>
    </nav>
  );
};

export default Nav;
