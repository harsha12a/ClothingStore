import React, { useContext } from 'react'
import { loginContext } from '../../context/loginContext'
import Cart from '../cart/Cart'
function UserProfile() {
    let user = JSON.parse(sessionStorage.getItem('user'))
    let {status} = useContext(loginContext)
  return (
    <div className='pt-5'>
        <p className="display-1 text-center">{status? "Welcome "+user.username : "Please Login"}</p>
        <div className='col-4 m-auto d-flex flex-row align-items-center flex-wrap justify-content-evenly'>
          <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png" alt="ProfImg" width={'150px'} className='rounded-pill'/>
          {status && user && (
            <div className=''>
              <p className="text-center"><span className='fw-bold'>Email</span> - {user.email}</p>
              <p className="text-center"><span className='fw-bold'>Name</span> - {user.name}</p>
              <p className='text-center'><span className='fw-bold'>Contact no.</span> - {user.contact}</p>
            </div>
          )}
        </div>
        <Cart />
    </div>
  )
}

export default UserProfile