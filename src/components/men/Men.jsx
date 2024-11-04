import React from 'react'
import MenCloth from './mencloth.jsx/MenCloth'
import { useState } from 'react'
import axios from 'axios'
function Men() {
    let [products,setProducts] = useState([])
    axios.get('http://localhost:3000/products').then((res)=>{
        setProducts(res.data.clothing.men)
      })
  return (
    <div className='mt-5 container'>
        <h1 className='text-center'>Men CLothing</h1>
        <div className='d-flex flex-wrap justify-content-evenly'>
            {
                products.map((x,ind)=>{
                    return <MenCloth key={ind} x={x}/>
                })
            }
        </div>
    </div>
  )
}

export default Men