import React, { useEffect, useState } from "react";
import axios from "axios";

const Categories = () => {
  const api = "http://myjson.dit.upm.es/api/bins/4h4c";
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(api)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [api]);
  return (
    <section className="box categories">
      <h3>Top categories</h3>
      <div className="grid">
        {categories?.map((ele, index) => {
          return (
            <div key={index} className="g-col-lg-3 g-col-md-4 g-col-sm-12">
              <div className="boximg">
                <img src={ele.image} alt={ele.title} />
              </div>
              <h6>{ele.title}</h6>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
