import React, { useContext } from 'react'
import { loginContext } from '../../context/loginContext'
function UserProfile() {
    let user = JSON.parse(localStorage.getItem('user'))
    let {status} = useContext(loginContext)
  return (
    <div>
        <p className="display-1 text-center">{status? "Welcome "+user.name : "Please Login"}</p>
    </div>
  )
}

export default UserProfile