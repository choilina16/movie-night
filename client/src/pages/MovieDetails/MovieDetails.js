import React, { useState } from 'react';
import MovieNav from './MovieNav';
import Cast from './Cast';
import Genre from './Genre';
import Language from './Language';
import './movieDetails.css';
import movie1 from '../../assets/children-of-troubled-times.jpg';
// https://react-icons.github.io/react-icons/
import { BsFillStarFill } from 'react-icons/bs';

// this is all placeholder information!
export default function MovieDetails() {
  const [currentPage, setCurrentPage] = useState('Cast');

  const renderPage = () => {
    if (currentPage === 'Cast') {
      return <Cast />;
    }
    if (currentPage === 'Genre') {
      return <Genre />;
    }
    return <Language />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    // include nav bar later
    <div className="movie-details-container">
      <div className="movie-poster-container">
        <div className="movie-poster">
          <img src={movie1} alt="placeholder"></img>
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
              <MovieNav
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
              {renderPage()}
            </div>
          </div>
        </div>
      </div>

      <div className="movie-synopsis">
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
}
