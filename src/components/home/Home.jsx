import React from 'react'
import axios from 'axios'
function Home() {
  axios.get('http://localhost:3000/products').then((res)=>{
    console.log(res.data)
  })
  return (
    <div>
        <h1>Home</h1>
    </div>
  )
}

export default Home