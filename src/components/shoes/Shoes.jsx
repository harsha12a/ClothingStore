import React from 'react'
import axios from 'axios'
import Shoe from './shoe/Shoe'
import { useState } from 'react'
function Shoes() {
    let [products,setProducts] = useState([])
    axios.get('http://localhost:3000/products').then((res)=>{
        setProducts(res.data.shoes)
      })
  return (
    <div className='mt-5 container'>
        <h1 className='text-center'>Shoes</h1>
        <div className='d-flex flex-wrap justify-content-evenly'>
            {
                products.map((x,ind)=>{
                    return <Shoe key={ind} x={x}/>
                })
            }
        </div>
    </div>
  )
}

export default Shoes