import React, { useEffect, useState } from "react";
import { loginContext } from "./loginContext";
import axios from "axios";

function LoginStore({ children }) {
  let [status, setStatus] = useState(false);
  let [err, setErr] = useState("");
  let user = sessionStorage.getItem("user");
  user = JSON.parse(user);
  useEffect(() => {
    if (user === null) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }, [user]);
  const loginuser = async (data) => {
    try {
      const response = await axios.post("https://clothingbackend.vercel.app/user/get", data);
      if (response.data.payload === undefined) {
        setErr("User not found");
      } else if (response.data.payload) {
        setStatus(true);
        sessionStorage.setItem("user", JSON.stringify(response.data.payload));
        sessionStorage.setItem("token", response.data.token);
        setErr("");
      } else setErr("Incorrect password");
    } catch (error) {
      console.log(error.message);
      setErr(error.message);
    }
  };
  const logoutuser = () => {
    setStatus(false);
    sessionStorage.removeItem("user");
  };
  return (
    <loginContext.Provider
      value={{ loginuser, logoutuser, status, setStatus, err, setErr }}
    >
      {children}
    </loginContext.Provider>
  );
}

export default LoginStore;
