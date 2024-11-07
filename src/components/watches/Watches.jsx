import React from "react";
import axios from "axios";
import Watch from "./watch/Watch";
import { useState, useEffect } from "react";
function Watches() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/watch/get")
      .then((res) => {
        setProducts(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="mt-5 container">
      <h1 className="text-center">Watches</h1>
      <div className="d-flex flex-wrap justify-content-evenly">
        {products.map((x, ind) => {
          return <Watch key={ind} x={x} />;
        })}
      </div>
    </div>
  );
}

export default Watches;
