import React, { useContext } from 'react'
import './Hat.css'
import {loginContext} from '../../../context/loginContext'
import axios from 'axios'
function Hat({x}) {
    let products=x
    let {} = useContext(loginContext)
    let user = sessionStorage.getItem('user')
    user = JSON.parse(user)
    const addToCart= async (id)=>{
      user.cart.push(id)
      // let newUser = {...user}
      // console.log(newUser)
      // try {
      //   const response = await axios.put(`http://localhost:3000/users?email=${user.email}`,{
      //     ...user,
      //     cart: newUser.cart
      //   });
      //   console.log("User cart updated on server:", response.data);
      // }catch (error) {
      //   console.error("Error updating user cart:", error);
      // }
    }
  return (
    <div className='p-3 d-flex flex-column justify-content-center m-3 align-items-center border border-dark'>
        <p className='text-center'>{products.name}</p>
        <img src={products.image} alt={products.name} style={{maxWidth:'100%',width:'300px'}}/>
        <h5 className='text-center'>Price - ${products.price}</h5>
        <button className='btnhov' onClick={()=>addToCart(products.id)}>Add to Cart</button>
    </div>
  )
}

export default Hat