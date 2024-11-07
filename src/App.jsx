import React from "react";
import "./App.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Rootlayout from "./Rootlayout";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import UserProfile from "./components/userprofile/UserProfile";
import Cart from "./components/cart/Cart";
import Hats from "./components/hats/Hats";
import Shoes from "./components/shoes/Shoes";
import Watches from "./components/watches/Watches";
import Men from "./components/men/Men";
import Women from "./components/women/Women";
function App() {
  const browser = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Register />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/hats",
          element: <Hats />,
        },
        {
          path: "/shoes",
          element: <Shoes />,
        },
        {
          path: "/watches",
          element: <Watches />,
        },
        {
          path: "/men",
          element: <Men />,
        },
        {
          path: "/women",
          element: <Women />,
        },
        {
          path: "/profile",
          element: <UserProfile />,
          children: [
            {
              path: "cart",
              element: <Cart />,
            },
          ],
        },
        {
          path: "*",
          element: <Navigate to={"/"} />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={browser} />
    </div>
  );
}

export default App;
