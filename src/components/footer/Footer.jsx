import React from 'react'

function Footer() {
  return (
    <div className="bg-primary d-flex align-items-center justify-content-between flex-wrap">
      <p className="display-4 fonting text-white">Clothing Store</p>
      <div className="add">
        <ul className='nav px-5 d-flex flex-column mb-3'>
          <li className='norfont nav-item text-white fw-bold fs-5'>Address</li>
          <li className='norfont nav-item text-white'>Vijayawada, Krishna, AP</li>
        </ul>
      </div>
      <div className="con">
        <ul className='nav px-5 d-flex flex-column mb-3'>
            <li className='norfont nav-item text-white fw-bold fs-5'>Contact</li>
            <li className='norfont nav-item text-white'>9492979169</li>
            <li className='norfont nav-item text-white'>harsha.pss2005@gmail.com</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer