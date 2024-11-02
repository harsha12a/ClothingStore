import React from 'react'
import './App.css'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Rootlayout from './Rootlayout'
import Home from './components/home/Home'
import About from './components/about/About'
import Login from './components/login/Login'
import Register from './components/register/Register'
import UserProfile from './components/userprofile/UserProfile'
import Cart from './components/cart/Cart'
function App() {
  const browser = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element: <Register />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/profile',
          element: <UserProfile />,
          children:[
            {
              path: 'cart',
              element: <Cart />
            }
          ]
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={browser} />
    </div>
  )
}

export default App