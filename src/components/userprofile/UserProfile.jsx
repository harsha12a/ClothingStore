import React, { useContext } from 'react'
import { loginContext } from '../../context/loginContext'
import Cart from '../cart/Cart'
function UserProfile() {
    let user = JSON.parse(sessionStorage.getItem('user'))
    let {status} = useContext(loginContext)
  return (
    <div className='pt-5'>
        <p className="display-1 text-center">{status? "Welcome "+user.username : "Please Login"}</p>
        <div className='col-4 m-auto card'>
          <p className=" text-center">{status? "Email - "+user.email : ""}</p>
          <p className=" text-center">{status? "Name - "+user.name : ""}</p>
        </div>
        <Cart />
    </div>
  )
}

export default UserProfile