import React from 'react'
import Header from './components/header/Header'
import {Outlet} from 'react-router-dom'
function Rootlayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Rootlayout