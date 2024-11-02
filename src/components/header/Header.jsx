import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <div className='d-flex justify-content-between align-items-center flex-wrap'>
        <p className='display-3 fonting'><Link to={'/'} className='nav-link text-dark fonting'>ClothingStore</Link></p>
        <ul className='nav'>
            <li className='nav-item'><Link to={'/signup'} className='nav-link links'>Sign Up</Link></li>
            <li className='nav-item'><Link to={'/login'} className='nav-link links'>Sign in</Link></li>
            <li className='nav-item'><Link to={'/about'} className='nav-link links'>About  </Link></li>
        </ul>
    </div>
  )
}

export default Header