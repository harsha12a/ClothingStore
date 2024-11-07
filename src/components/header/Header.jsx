import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { loginContext } from "../../context/loginContext";
function Header() {
  let { logoutuser, status } = useContext(loginContext);
  return (
    <div className="d-flex justify-content-between align-items-center flex-wrap border">
      <p className="display-3 fonting">
        <Link to={"/"} className="nav-link text-dark fonting">
          ClothingStore
        </Link>
      </p>
      {!status ? (
        <ul className="nav">
          <li className="nav-item">
            <Link to={"/signup"} className="nav-link links">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/login"} className="nav-link links">
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/about"} className="nav-link links">
              About{" "}
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav">
          <li className="nav-item">
            <Link to={"/"} className="nav-link links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={logoutuser} to={"/login"} className="nav-link links">
              Logout
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/about"} className="nav-link links">
              About{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/profile"} className="nav-link links">
              <img
                src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png"
                alt=""
                width={"30px"}
                className="rounded-pill"
              />
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
