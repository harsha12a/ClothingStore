import React from 'react'
import Header from './components/header/Header'
import {Outlet} from 'react-router-dom'
import Footer from './components/footer/Footer'
function Rootlayout() {
  return (
    <div>
      <Header/>
      <div style={{minHeight:"100vh"}}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Rootlayout