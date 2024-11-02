import React, { useState } from 'react'
import axios from 'axios'
import './Home.css'
function Home() {
  let [products,serProducts] = useState([])
  axios.get('http://localhost:3000/products').then((res)=>{
    // console.log(res.data)
    serProducts(res.data)
  })
  return (
    <div className='container pt-5'>
      <div className='con1'>
        <div className='imgcontainer'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMipgxIxdIDaqZrDy7o6HzewmoxVc9w-w5Q&s" alt="hat" className='img'/>
          <p className='desc'>Hats</p>
        </div>
        <div className='imgcontainer'>
          <img src="https://www.jiomart.com/images/product/original/rvv0jejch6/iloz-stylish-new-luxury-gold-black-men-watch-designer-professional-gold-quartz-fashion-analog-wrist-watch-for-men-product-images-rvv0jejch6-0-202210200514.jpg?im=Resize=(600,750)" alt="" className="img" />
          <p className="desc">Watches</p>
        </div>
        <div className="imgcontainer">
          <img src="https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg?im=Resize=(600,750)" alt="" className="img" />
          <p className="desc">Shoes</p>
        </div>
        <div className='imgcontainer2'>
          <img src="https://media.gq.com/photos/65cfbf6e8aa1eb1e0bb7ecf4/16:9/w_1920,c_limit/gerald-art.jpg" alt="" className='img2'/>
          <p className="desc">Men Clothes</p>
        </div>
        <div className="imgcontainer2">
          <img src="https://smcfashion.com/cdn/shop/articles/image_-_2024-06-30T132920.880.webp?v=1719742486&width=1344" alt="" className="img2" />
          <p className="desc">Women Clothes</p>
        </div>
      </div>
    </div>
  )
}
// https://m.media-amazon.com/images/I/610A8F1BMCL._SX679_.jpg
export default Home