import React, { useContext, useEffect, useState } from "react";
import { loginContext } from "../../context/loginContext";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";
function UserProfile() {
  let user = JSON.parse(sessionStorage.getItem("user"));
  let navigate = useNavigate();
  let location = useLocation();
  let [cart, setCart] = useState(false);
  useEffect(() => {
    if (location.pathname === "/profile/cart") {
      setCart(true);
    } else if (location.pathname === "/profile") {
      setCart(false);
    }
  }, [location.pathname]);
  let { status } = useContext(loginContext);
  return !cart ? (
    <div className="mt-5">
      <p className="display-1 text-center">
        {status ? "Welcome " + user.username : "Please Login"}
      </p>
      <div className="m-auto d-flex flex-row align-items-center flex-wrap justify-content-evenly bg-warning p-5 col-md-6 col-sm-12">
        <img
          src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png"
          alt="ProfImg"
          style={{ maxWidth: "100%", width: "200px" }}
          className="rounded-pill"
        />
        {status && (
          <div className="text-center">
            <p>
              <span className="fw-bold">Email</span> - {user.email}
            </p>
            <p>
              <span className="fw-bold">Name</span> - {user.name}
            </p>
            <p>
              <span className="fw-bold">Contact no.</span> - {user.contact}
            </p>
          </div>
        )}
      </div>
      <p
        className="text-center p-3 display-6 col-lg-4 col-sm-10 col-md-6 m-auto my-5 cart"
        onClick={() => {
          navigate("./cart");
        }}
      >
        My cart
      </p>
    </div>
  ) : (
    <Outlet />
  );
}

export default UserProfile;
