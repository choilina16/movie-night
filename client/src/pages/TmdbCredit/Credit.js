import React from 'react';
import logo from "../../assets/tmdb.svg"
import "./style.css"

export default function Credit() {
  const tmdbCredit = {
    credit:
    "This product uses the TMDb API but is not endorsed or certified by TMDb.",
  };

  return (
    <div class = "container">
      <p class = "tmdbCredit" style={{ textTransform: 'uppercase' }}><i>{tmdbCredit.credit}</i></p>
      <img class = "tmdb" src = {logo} alt="hehe"></img>    
    </div>
  );
}