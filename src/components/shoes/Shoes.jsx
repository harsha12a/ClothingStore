import React from "react";
import axios from "axios";
import Shoe from "./shoe/Shoe";
import { useState, useEffect } from "react";
function Shoes() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://clothingbackend.vercel.app/shoe/get")
      .then((res) => {
        setProducts(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="mt-5 container">
      <h1 className="text-center">Shoes</h1>
      <div className="d-flex flex-wrap justify-content-evenly">
        {products.map((x, ind) => {
          return <Shoe key={ind} x={x} />;
        })}
      </div>
    </div>
  );
}

export default Shoes;
