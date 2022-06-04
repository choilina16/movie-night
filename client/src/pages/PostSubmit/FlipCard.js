import React from 'react';
import './flipcard.scss';
import cn from 'classnames';

// `{ card }` param registers data from objects in the `Card` array of objects into this base model for however many objects exist 
function FlipCard({ card }) {
    
    return (
       // Outer Card & Inner Card
       <div className="flip-card-outer">
           <div className={cn("flip-card-inner", {
          "hover-trigger": card.variant === "hover"
            })}>

// `{ card }` param registers data from objects in the `Card` array of objects into this base model for however many objects exist
function FlipCard({ card }) {
  // const { loading, data } = useQuery(QUERY_USER);
  // const userData = data?.user || {};

  return (
    // Outer Card & Inner Card
    <div className="flip-card-outer">
      <div
        className={cn('flip-card-inner', {
          'hover-trigger': card.variant === 'hover',
        })}
      >
        {/* Front Card */}
        <div className="card front">
          <img
            src={card.image}
            className="image"
            alt="flippable cards so good"
          ></img>
        </div>

        {/* Back Card */}
        <div className="card back d-flex">
          <div className="card-body">
            {/* Title */}
            <p className="card-text fs-1 fw-bold">Title: {card.title}</p>
            {/* Release */}
            <p className="card-text fs-1 fw-bold">Release: {card.year}</p>
            {/* Cast */}
            <p className="card-text fs-1 fw-bold">Cast: {card.cast}</p>
            {/* Genre */}
            <p className="card-text fs-1 fw-bold">Genre: {card.genre}</p>
            {/* Language(s) */}
            <p className="card-text fs-1 fw-bold">
              Language(s): {card.language}
            </p>
            {/* Director */}
            <p className="card-text fs-1 fw-bold">Director: {card.director}</p>
            {/* Runtime */}
            <p className="card-text fs-1 fw-bold">Runtime: {card.runtime}</p>
            {/* Modal appear ON-CLICK */}
            <a href="#" className="card-text fs-1 align-self-end">
              Click for more info
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
