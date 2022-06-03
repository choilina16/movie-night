import React from 'react';
import './flipcard.scss'
import cn from "classnames";

// `{ card }` param registers data from objects in the `Card` array of objects into this base model for however many objects exist 
function FlipCard({ card }) {
     
    return (
       // Outer Card & Inner Card
       <div className="flip-card-outer">
           <div className={cn("flip-card-inner", {
          "hover-trigger": card.variant === "hover"
            })}>

               {/* Front Card */}
               <div className="card front">
                    <img src={card.image} className="image" alt="flippable cards so good"></img>
               </div>

               {/* Back Card */}
               <div className="card back">
                   <div className="card-body d-flex justify-content-center align-items-center">
                       <p className="card-text fs-1 fw-bold">{card.text}</p>
                   </div>
               </div>

           </div>
       </div>
    )
}

export default FlipCard;