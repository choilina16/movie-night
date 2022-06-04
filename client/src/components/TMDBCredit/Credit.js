import React from 'react';
import './credit.css';
import tmdbLogo from "../../assets/tmdb.svg"

function Credit() {
  return (
    <section>
        <div className="logo-container">
            <img src={tmdbLogo} alt="hehehe" className="tmdb-logo"></img>
        </div>
        <div className="credit-txt-container">
            <p className="credit-text"><i>This product uses the TMDb API but is not endorsed or certified by TMDb.</i></p>
        </div>
    </section>
  );
}

export default Credit;