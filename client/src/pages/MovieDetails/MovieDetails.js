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
  // placeholder
  const movieDetails = {
    poster_url: '"https://i.mydramalist.com/d6jmK_4c.jpg?v=1',
    title: 'Children of Troubled Times',
    year: '1935',
    rating: '5',
    director: 'Xingzhi Xu',
    cast: 'Mao, Mao, Mao, Miller',
    genre: 'Drama',
    language: 'Chinese',
    synopsis:
      'Arise! Arise! Arise! A heart throbbing tale of a young Mao Zedong, savior of China, and peruser of justice to the working class. None have graced this earth like Mao. Mao is the best I love Mao so much he is my hero and not your hero but he should be your hero thank you yes nihao ma. HAI.',
  };

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
            DIRECTOR: <span>{movieDetails.director}</span>
          </p>
        </div>

        <div className="movie-details">
          <div>
            <p className="movie-year">{movieDetails.year}</p>
            <h3>{movieDetails.title}</h3>
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
        <p>{movieDetails.synopsis}</p>
      </div>
    </div>
  );
}
