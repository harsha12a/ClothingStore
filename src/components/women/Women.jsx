import React from "react";
import WomenCloth from "./womencloth/WomenCloth";
import { useState, useEffect } from "react";
import axios from "axios";
function Women() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://clothingbackend.vercel.app/women/get")
      .then((res) => {
        setProducts(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="mt-5 container">
      <h1 className="text-center">Women CLothing</h1>
      <div className="d-flex flex-wrap justify-content-evenly">
        {products.map((x, ind) => {
          return <WomenCloth key={ind} x={x} />;
        })}
      </div>
    </div>
  );
}

export default Women;
