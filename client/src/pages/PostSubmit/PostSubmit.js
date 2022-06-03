import React from 'react';
import FlipCard from './FlipCard';
import './postsubmit.scss'

const PostSubmit = () => {

    const cards = [
      {
        variant: "hover",
        image: "https://images-na.ssl-images-amazon.com/images/I/81wrceCbOWL._RI_.jpg",
        title: "The East is Red",
        text: "Exceptional movie",
      },
      {
        variant: "hover",
        image:
          "https://m.media-amazon.com/images/M/MV5BOTI4NTNhZDMtMWNkZi00MTRmLWJmZDQtMmJkMGVmZTEzODlhXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
        title: "High and Low",
        text: "Great movie",
      },
      {
        variant: "hover",
        image:
          "https://i.mydramalist.com/d6jmK_4c.jpg?v=1",
        title: "Children of Troubled Times",
        text: "Stupendous film",
      },
      {
        variant: "hover",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Seven_Samurai_poster.jpg/1200px-Seven_Samurai_poster.jpg",
        title: "Michael Jordan",
        text: "Jawdropping picture",
      },
      {
        variant: "hover",
        image: "https://images-na.ssl-images-amazon.com/images/I/81wrceCbOWL._RI_.jpg",
        title: "The East is Red",
        text: "Exceptional movie",
      },
      {
        variant: "hover",
        image:
          "https://m.media-amazon.com/images/M/MV5BOTI4NTNhZDMtMWNkZi00MTRmLWJmZDQtMmJkMGVmZTEzODlhXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
        title: "High and Low",
        text: "Great movie",
      },
      {
        variant: "hover",
        image:
          "https://i.mydramalist.com/d6jmK_4c.jpg?v=1",
        title: "Children of Troubled Times",
        text: "Stupendous film",
      },
      {
        variant: "hover",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Seven_Samurai_poster.jpg/1200px-Seven_Samurai_poster.jpg",
        title: "Seven Samurai",
        text: "Jawdropping picture",
      },
      {
        variant: "hover",
        image: "https://images-na.ssl-images-amazon.com/images/I/81wrceCbOWL._RI_.jpg",
        title: "The East is Red",
        text: "Exceptional movie",
      },
      {
        variant: "hover",
        image:
          "https://m.media-amazon.com/images/M/MV5BOTI4NTNhZDMtMWNkZi00MTRmLWJmZDQtMmJkMGVmZTEzODlhXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
        title: "High and Low",
        text: "Great movie",
      },
      {
        variant: "hover",
        image:
          "https://i.mydramalist.com/d6jmK_4c.jpg?v=1",
        title: "Children of Troubled Times",
        text: "Stupendous film",
      },
      {
        variant: "hover",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Seven_Samurai_poster.jpg/1200px-Seven_Samurai_poster.jpg",
        title: "Seven Samurai",
        text: "Jawdropping picture",
      },
    ];
  
    // Render Cards by...
    return (
        // Container
        <div className="container">
            {/* Card Row */}
            <div className="row card-row"> 
              <div className="header-container">
                {/* note: Could make it so each 3 usernames populate in place of 'you' (ex. Here's some movies a, b, and c have in common) */}
                <p className="header-text">Here's some movies you have in common...</p>
              </div>  
            {/* ...mapping over each object in the `Cards` array of objects */}
            {cards.map((card) => (
                <FlipCard card={card} />
            ))}
            </div>
        </div>
    );
  };
  
  // Exports to `App.js` to be rendered to page
  export default PostSubmit;