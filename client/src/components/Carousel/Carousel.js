import * as React from 'react';
import './carousel.css';
import { Carousel } from 'react-bootstrap';
import movie1 from '../../assets/cultural-revolution.png';
import movie2 from '../../assets/cultural-revolution-1.png';
import InputBox from '../InputBox/InputBox';

function AppCarousel() {
  return (
    // api call to get the popular movies tmdb- front end js file
    // https://developers.themoviedb.org/3/movies/get-movie-details
    // key: 10c8394b98fc5c8ccc47c5ae2b948bc9
    // get popular
    <div className="carousel-input-container">
      {/* CAROUSEL */}
      <div className="carousel-container">
        <div className="welcome">
          <h4>WELCOME TO MOVIE NIGHT!</h4>
        </div>

        <Carousel>
          <Carousel.Item interval={1500}>
            <img className="d-block w-100 img" src={movie1} alt="One" />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100 img" src={movie2} alt="Two" />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* INPUTBOX */}
      <div className="input-box-container">
        <InputBox />
      </div>
    </div>
  );
}

export default AppCarousel;
