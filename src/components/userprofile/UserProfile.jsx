import React, { useContext } from 'react'
import { loginContext } from '../../context/loginContext'
import Cart from '../cart/Cart'
function UserProfile() {
    let user = JSON.parse(sessionStorage.getItem('user'))
    let {status} = useContext(loginContext)
  return (
    <div>
        <p className="display-1 text-center">{status? "Welcome "+user.name : "Please Login"}</p>
        <Cart />
    </div>
  )
}

export default UserProfile