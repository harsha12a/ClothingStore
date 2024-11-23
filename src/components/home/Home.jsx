import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
function Home() {
  let location = useLocation();
  let msg = location.state?.msg;
  useEffect(() => {
    if (msg) {
      toast("🎉 Login success", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  }, [msg]);
  return (
    <div className="container pt-5">
      <div className="con1">
        <Link to={"/hats"} className="imgcontainer">
          <img
            src="https://i.pinimg.com/736x/d4/47/18/d44718e1448a19477c1530018c2b04e8.jpg"
            alt="Hats"
            className="img"
          />
          <p className="desc">Hats</p>
        </Link>
        <Link to={"/watches"} className="imgcontainer">
          <img
            src="https://www.jiomart.com/images/product/original/rvv0jejch6/iloz-stylish-new-luxury-gold-black-men-watch-designer-professional-gold-quartz-fashion-analog-wrist-watch-for-men-product-images-rvv0jejch6-0-202210200514.jpg?im=Resize=(600,750)"
            alt="Watches"
            className="img"
          />
          <p className="desc">Watches</p>
        </Link>
        <Link to={"/shoes"} className="imgcontainer">
          <img
            src="https://i.pinimg.com/550x/d9/db/27/d9db2754e78b6170650d7e1d65bcb202.jpg"
            alt="Shoes"
            className="img"
          />
          <p className="desc">Shoes</p>
        </Link>
        <Link to={"/men"} className="imgcontainer2">
          <img
            src="https://media.gq.com/photos/65cfbf6e8aa1eb1e0bb7ecf4/16:9/w_1920,c_limit/gerald-art.jpg"
            alt="Men clothes"
            className="img2"
          />
          <p className="desc">Men Clothes</p>
        </Link>
        <Link to={"/women"} className="imgcontainer2">
          <img
            src="https://smcfashion.com/cdn/shop/articles/image_-_2024-06-30T132920.880.webp?v=1719742486&width=1344"
            alt="Women clothes"
            className="img2"
          />
          <p className="desc">Women Clothes</p>
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
}
// https://m.media-amazon.com/images/I/610A8F1BMCL._SX679_.jpg
export default Home;
