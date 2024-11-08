import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { loginContext } from "../../context/loginContext";
function Cart() {
  let user = sessionStorage.getItem("user");
  user = JSON.parse(user);
  let [cart,setCart] = useState(user.cart||[])
  let {setErr, err} = useContext(loginContext);
  let navigate = useNavigate();
  let token = sessionStorage.getItem('token')
  const removeCart = async (products) => {
    try {
      let res =await axios.put(
        `https://clothingbackend.vercel.app/user/removecart/${user.username}`,
        {
          id: products.id,
          type: products.type,
        },
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      );
      if(res.data.message == 'ok'){
        sessionStorage.setItem("user", JSON.stringify(res.data.payload));
        setCart(res.data.payload.cart)
        setErr('')
      }
      else {
        setErr('Token expired.Please login again')
      }
    } catch (err) {
      setErr('Error while removing from cart');
    }
  };
  return (
    <div>
      {err && <p className="text-center text-danger display-6 m-4">{err}</p>}
      <p className="text-center mt-5 display-3">Cart</p>
      {cart.length === 0 ? (
        <p className="display-5 text-center text-warning p-5">
          Your cart is empty
        </p>
      ) : (
        <div className="d-flex flex-wrap justify-content-evenly">
          {cart.map((products, ind) => {
            return (
              <div
                className="p-3 d-flex flex-column justify-content-center m-3 align-items-center border border-dark"
                key={ind}
              >
                <p className="text-center">{products.name}</p>
                <img
                  src={products.image}
                  alt={products.name}
                  style={{ maxWidth: "100%", width: "300px" }}
                />
                <h5 className="text-center">Price - ${products.price}</h5>
                <button className="btnhov" onClick={() => removeCart(products)}>
                  Remove from cart
                </button>
              </div>
            );
          })}
        </div>
      )}
      <div className="d-flex justify-content-center m-5">
        <button
          className="viewmore text-center px-5 py-3"
          onClick={() => {
            navigate("../../");
          }}
        >
          Checkout more products
        </button>
      </div>
    </div>
  );
}

export default Cart;
