import React from "react";
import MenCloth from "./mencloth/MenCloth";
import { useState, useEffect } from "react";
import axios from "axios";
function Men() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://clothingbackend.vercel.app/men/get")
      .then((res) => {
        setProducts(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="mt-5 container">
      <h1 className="text-center">Men CLothing</h1>
      <div className="d-flex flex-wrap justify-content-evenly">
        {products.map((x, ind) => {
          return <MenCloth key={ind} x={x} />;
        })}
      </div>
    </div>
  );
}

export default Men;
