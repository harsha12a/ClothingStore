import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginContext } from "../../../context/loginContext";
import { useContext } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify";
function Watch({ x }) {
  let { setErr } = useContext(loginContext);
  let products = x;
  let user = sessionStorage.getItem("user");
  user = JSON.parse(user);
  let navigate = useNavigate();
  const addToCart = async () => {
    if (user === null) {
      navigate("/login");
    }
    try {
      let user = sessionStorage.getItem("user");
      user = JSON.parse(user);
      if (
        user.cart.filter(
          (x) => x.id === products.id && x.type === products.type
        ).length > 0
      ) {
        toast("🛒 Product added to cart", {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        return;
      }
      let newUser = { ...user, cart: [...user.cart, products] };
      let res = await axios.put(
        `http://localhost:5000/user/addcart/${user.username}`,
        newUser
      );
      sessionStorage.setItem("user", JSON.stringify(newUser));
      toast("🛒 Product added to cart", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } catch (err) {
      setErr("Please login to add items to cart");
    }
  };
  return (
    <div className="p-3 d-flex flex-column justify-content-center m-3 align-items-center border border-dark">
      <p className="text-center">{products.name}</p>
      <img
        src={products.image}
        alt={products.name}
        style={{ maxWidth: "100%", width: "300px" }}
      />
      <h5 className="text-center">Price - ${products.price}</h5>
      <button className="btnhov" onClick={() => addToCart()}>
        Add to Cart
      </button>
      <ToastContainer />
    </div>
  );
}

export default Watch;
