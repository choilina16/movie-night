import React from 'react';
import './header.css';
// import mao from '../../assets/mao-png.png';
import logo from "../../assets/movie-logo.png";

function Header() {
  return (
    <header>
      <h1>
        <img src={logo} class="logo" alt="logo"></img>
        <span className="full-name">
          MOVIE<span className="single-word">NIGHT</span>
        </span>
      </h1>
    </header>
  );
}

export default Header;
