import React from 'react';
import './movieDetails.css';
import mao from '../../assets/children-of-troubled-times.png';
// https://react-icons.github.io/react-icons/
import { BsFillStarFill } from 'react-icons/bs';

// this is all placeholder information!
const MovieDetails = () => {
  return (
    <div className="movie-details-container">
      <div className="movie-poster-container">
        <div className="movie-poster">
          <img src={mao} alt="placeholder"></img>
          <p>
            DIRECTOR: <span>XINGZHI XU</span>
          </p>
        </div>

        <div className="movie-details">
          <div>
            <p className="movie-year">1935</p>
            <h3>CHILDREN OF TROUBLED TIMES</h3>
            <p>‘风云儿女’</p>
            <hr></hr>
            <p className="stars">
              <BsFillStarFill size={'2em'} className="stars-color" />
              <BsFillStarFill size={'2em'} className="stars-color" />
              <BsFillStarFill size={'2em'} className="stars-color" />
              <BsFillStarFill size={'2em'} className="stars-color" />
              <BsFillStarFill size={'2em'} className="stars-color" />
            </p>
            <div className="movie-details-box">
              <p>box will go here</p>
            </div>
          </div>
        </div>
      </div>

      <div className="move-synopsis">
        <p>
          Arise! Arise! Arise! A heart throbbing tale of a young Mao Zedong,
          savior of China, and persuer of justice to the working class. None
          have graced this earth like Mao. Mao is the best I love Mao so much he
          is my hero and not your hero but he should be your hero thank you yes
          nihao ma. HAI.
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
