import React, { useEffect } from "react";
import axios from "axios";
import Hat from "./hat/Hat";
import { useState } from "react";
function Hats() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/hat/get")
      .then((res) => {
        setProducts(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="mt-5 container">
      <h1 className="text-center">Hats</h1>
      <div className="d-flex flex-wrap justify-content-evenly">
        {products.map((x, ind) => {
          return <Hat key={ind} x={x} />;
        })}
      </div>
    </div>
  );
}

export default Hats;
