import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Form = ({ path }) => {
  let navigate = useNavigate();

  const [input, setInput] = useState("");
  return (
    <form>
      className
      <div className="search">
        <span>
          <FontAwesomeIcon icon={faMagnifyingGlass} color="black" />{" "}
        </span>
        <input
          type="text"
          placeholder="Search for anything"
          onChange={(event) => {
            setInput(event.target.value.toString().toLowerCase().trim());
          }}
        />
      </div>
      <button
        className="buttonSubmit"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          if (path === "/") {
            navigate("?filter=" + input);
          } else {
            navigate("/?filter=" + input);
          }

          // setSearchParams({ filter: `${input}` });
          // navigate(-1);
        }}
      >
        Search
      </button>
    </form>
  );
};

export default Form;
