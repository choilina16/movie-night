import React from 'react';
import './carousel.css';
import { Carousel } from 'react-bootstrap';
import movie1 from '../../assets/cultural-revolution.png';
import movie2 from '../../assets/cultural-revolution-1.png';

function AppCarousel() {

    return (
        <div class="carousel-container"> 

      <div className="welcome">
        <h4>WELCOME TO MOVIE NIGHT!</h4>
      </div>
    
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 img"
            src={movie1}
            alt="One"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 img"
            src={movie2}
            alt="Two"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AppCarousel;
