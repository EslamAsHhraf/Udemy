import React from "react";

const Bar = () => {
  const bar = [
    ["Python", "python"],
    ["Excell", "excell"],
    ["Web-Development", "Web"],
    ["JavaScript", "js"],
    ["Data Science", "data"],
    ["AWS Certification", "aws"],
    ["Drawing", "draw"],
  ];
  return (
    <ul>
      {bar.map((key, index) => {
        return (
          <li
            className={index === 0 ? "active" : ""}
            key={key[1]}
            value={key[1]}
          >
            {key[0]}
          </li>
        );
      })}
    </ul>
  );
};

export default Bar;
