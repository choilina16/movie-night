import React from 'react';
import './header.css';
import image from '../../assets/mao-png.png';

function Header() {
  return (
    <header>
      {/* <img src={image} class="logo" alt="logo"></img> */}
      <h1>
        MOVIE<span>NIGHT</span>
      </h1>
    </header>
  );
}

export default Header;
