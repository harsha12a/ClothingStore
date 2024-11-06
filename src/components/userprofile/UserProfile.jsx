import React, { useContext } from 'react'
import { loginContext } from '../../context/loginContext'
import Cart from '../cart/Cart'
function UserProfile() {
    let user = JSON.parse(sessionStorage.getItem('user'))
    let {status} = useContext(loginContext)
  return (
    <div className='mt-5'>
        <p className="display-1 text-center">{status? "Welcome "+user.username : "Please Login"}</p>
        <div className='m-auto d-flex flex-row align-items-center flex-wrap justify-content-evenly bg-warning p-5 col-md-6 col-sm-12'>
          <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png" alt="ProfImg" style={{maxWidth:'100%',width:'200px'}} className='rounded-pill'/>
          {status && (
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