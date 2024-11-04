import React from 'react'
import WomenCloth from './womencloth/WomenCloth'
import { useState } from 'react'
import axios from 'axios'
function Women() {
    let [products,setProducts] = useState([])
    axios.get('http://localhost:3000/products').then((res)=>{
        setProducts(res.data.clothing.women)
      })
  return (
    <div className='mt-5 container'>
        <h1 className='text-center'>Women CLothing</h1>
        <div className='d-flex flex-wrap justify-content-evenly'>
            {
                products.map((x,ind)=>{
                    return <WomenCloth key={ind} x={x}/>
                })
            }
        </div>
    </div>
  )
}

export default Women