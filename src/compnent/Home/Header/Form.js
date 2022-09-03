import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Form = () => {
  return (
    <form>
      <div className="search">
        <span>
          <FontAwesomeIcon icon={faMagnifyingGlass} color="black" />{" "}
        </span>
        <input type="text" placeholder="Search for anything" />
      </div>
      <button type="submit" onClick={(e) => e.preventDefault()}>
        Search
      </button>
    </form>
  );
};

export default Form;
