import React from 'react'
import './header.css';
import home from "../../assets/home.jpeg"
import logoAp from "../../assets/appleLogo.png"
import gMapsLogo from "../../assets/gMapsLogo.png"


const Header = () => {
  return (
    <div className='header section__padding' id="home">
      <div className='header-content'>
        <h1 className='gradient__text'>Welcome!</h1>
          
          

      </div>
      <div className='header-image'>
        <img src={home} alt="leaf" />
        </div>
    </div>
  )
}

export default Header