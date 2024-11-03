import React from 'react'
import axios from 'axios'
import Hat from './hat/Hat'
import { useState } from 'react'
function Hats() {
    let [products,setProducts] = useState([])
    axios.get('http://localhost:3000/products').then((res)=>{
        setProducts(res.data.hats)
      })
  return (
    <div>
        <h1 className='text-center'>Hats</h1>
        <div className='d-flex flex-wrap justify-content-evenly'>
            {
                products.map((x,ind)=>{
                    return <Hat key={ind} x={x}/>
                })
            }
        </div>
    </div>
  )
}

export default Hats