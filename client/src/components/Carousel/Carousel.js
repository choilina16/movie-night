import React from 'react';
import './carousel.css';
import { Carousel } from 'react-bootstrap';

function AppCarousel() {
  return (
    <div style={{ display: 'block', width: '100%', padding: 30 }}>
      <h4>Welcome to Movie Night!</h4>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            alt="One"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Two"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AppCarousel;
