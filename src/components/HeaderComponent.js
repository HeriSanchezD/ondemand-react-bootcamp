import React from 'react';
import Logo from '../assets/Logo.svg';
import ShoppingCar from '../assets/Shopping-car.svg';
import '../Styles/header.css' 

export const HeaderComponent = () => {
  return (
    <nav>
      <div className='div-header'>
        <div className='div-png'>
          <img src={Logo} className='header-logo' alt="Logo" />
        </div>
        <input></input>
        <div style={{display:'flex',flexDirection:'row'}}>
          <img src={ShoppingCar} className='header-png' alt="Car" />
       </div>
      </div>
    </nav>
  )
}
export default HeaderComponent