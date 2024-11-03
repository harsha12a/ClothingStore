import React from 'react'

function Hat({x}) {
    let products=x
  return (
    <div className='p-3 d-flex flex-column justify-content-center m-3 align-items-center border border-dark'>
        <p className='text-center'>{products.name}</p>
        <img src={products.image} alt={products.name} style={{maxWidth:'100%',width:'300px'}}/>
        <h5 className='text-center'>Price - ${products.price}</h5>
        <button className='w-50 btn btn-warning'>Add to Cart</button>
    </div>
  )
}

export default Hat