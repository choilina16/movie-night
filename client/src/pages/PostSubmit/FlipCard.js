import React from 'react';
import './postsubmit.scss'
import cn from "classnames";

// `{ card }` param registers data from objects in the `Card` array of objects into this base model for however many objects exist 
function FlipCard({ card }) {
     
    return (
        
       <div className="flip-card-outer">
           <div className={cn("flip-card-inner", {
          "hover-trigger": card.variant === "hover"
            })}>
               <div className="card front">
                   <div className="card-body d-flex justify-content-center align-items-center">
                    <p className="card-text fs-1 fw-bold">{card.title}</p>
                   </div>
               </div>

               <div className="card back">
                   <div className="card-body d-flex justify-content-center align-items-center">
                       <p className="card-text fs-1 fw-bold">{card.text}</p>
                   </div>
               </div>
           </div>
       </div>
    )

    // return (
    //     // Flip Card
    //     <div className="flip-card-outer">

    //       {/* Front Card */}
    //       <Card style={{ width: '18rem' }} className="box card-box front">
    //         {/* Front Image */}
    //         <Card.Img variant="top" src={card.image} className="post-img"/>
    //         {/* Front Body */}
    //         <Card.Body>
    //           {/* Front Title */}
    //           <Card.Title className="card-title">{card.title}</Card.Title>
    //           {/* Front Text */}
    //           <Card.Text className="card-text">{card.text}</Card.Text>
    //         </Card.Body>
    //       </Card>

    //       {/* Back Card */}
    //       <Card style={{ width: '18rem' }} className="box card-box back">
    //         {/* Back Body */}
    //         <Card.Body>
    //           {/* Back Title */}
    //           <Card.Title className="card-title">{card.title}</Card.Title>
    //           {/* Back Text */}
    //           <Card.Text className="card-text">{card.text}</Card.Text>
    //         </Card.Body>
    //       </Card>

    //     </div>
    //   );
}

export default FlipCard;