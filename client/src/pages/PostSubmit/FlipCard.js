import React from 'react';
import './flipcard.scss';
import cn from 'classnames';

// `{ card }` param registers data from objects in the `Card` array of objects into this base model for however many objects exist
function FlipCard({ card }) {
  return (
    // Outer Card & Inner Card
    <div className="flip-card-outer">
      <div
        className={cn('flip-card-inner', {
          'hover-trigger': 'hover',
        })}
      >
        {/* Front Card */}
        <div className="card front">
          <img
            src={card.poster_url}
            className="image"
            alt="flippable cards so good"
          ></img>
        </div>

        {/* Back Card */}
        <div className="card back d-flex">
          <div className="card-body">
            {/* Title */}
            <p className="card-text fs-1 fw-bold"><span className='movie-thingy'>Title:</span> {card.title}</p>
            {/* Release */}
            <p className="card-text fs-1 fw-bold"><span className='movie-thingy'>Release:</span> {card.year}</p>
            {/* Cast */}
            <p className="card-text fs-1 fw-bold"><span className='movie-thingy'>Cast:</span> {card.cast.slice(0, 4)}</p>
            {/* Language(s) */}
            <p className="card-text fs-1 fw-bold"><span className='movie-thingy'>Language(s):</span> {card.language}
            </p>
            {/* Director */}
            <p className="card-text fs-1 fw-bold"><span className='movie-thingy'>Director:</span> {card.director}</p>
            {/* Runtime */}
            <p className="card-text fs-1 fw-bold"><span className='movie-thingy'>Runtime:</span> {card.runtime}</p>
            {/* Modal appear ON-CLICK */}
            <a href="#" className="card-text fs-1 align-self-end"><span className='click-more'>Click for more info</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
