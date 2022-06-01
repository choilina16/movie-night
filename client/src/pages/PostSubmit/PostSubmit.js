import React from 'react';
import './postsubmit.css'
import { Card } from "react-bootstrap";

const PostSubmit = () => {

    const cardInfo = [
      {
        image: "https://images-na.ssl-images-amazon.com/images/I/81wrceCbOWL._RI_.jpg",
        title: "The East is Red",
        text: "Exceptional movie",
      },
      {
        image:
          "https://m.media-amazon.com/images/M/MV5BOTI4NTNhZDMtMWNkZi00MTRmLWJmZDQtMmJkMGVmZTEzODlhXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
        title: "High and Low",
        text: "Great movie",
      },
      {
        image:
          "https://i.mydramalist.com/d6jmK_4c.jpg?v=1",
        title: "Children of Troubled Times",
        text: "Stupendous film",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Seven_Samurai_poster.jpg/1200px-Seven_Samurai_poster.jpg",
        title: "Michael Jordan",
        text: "Jawdropping picture",
      },
      {
        image: "https://images-na.ssl-images-amazon.com/images/I/81wrceCbOWL._RI_.jpg",
        title: "The East is Red",
        text: "Exceptional movie",
      },
      {
        image:
          "https://m.media-amazon.com/images/M/MV5BOTI4NTNhZDMtMWNkZi00MTRmLWJmZDQtMmJkMGVmZTEzODlhXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
        title: "High and Low",
        text: "Great movie",
      },
      {
        image:
          "https://i.mydramalist.com/d6jmK_4c.jpg?v=1",
        title: "Children of Troubled Times",
        text: "Stupendous film",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Seven_Samurai_poster.jpg/1200px-Seven_Samurai_poster.jpg",
        title: "Michael Jordan",
        text: "Jawdropping picture",
      },
      {
        image: "https://images-na.ssl-images-amazon.com/images/I/81wrceCbOWL._RI_.jpg",
        title: "The East is Red",
        text: "Exceptional movie",
      },
      {
        image:
          "https://m.media-amazon.com/images/M/MV5BOTI4NTNhZDMtMWNkZi00MTRmLWJmZDQtMmJkMGVmZTEzODlhXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
        title: "High and Low",
        text: "Great movie",
      },
      {
        image:
          "https://i.mydramalist.com/d6jmK_4c.jpg?v=1",
        title: "Children of Troubled Times",
        text: "Stupendous film",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Seven_Samurai_poster.jpg/1200px-Seven_Samurai_poster.jpg",
        title: "Michael Jordan",
        text: "Jawdropping picture",
      },
    ];
  
    const renderCard = (card, index) => {
      return (
        <Card key={index} className="box card-box col-4">
          <Card.Img variant="top" src={card.image} className="post-img"/>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
          </Card.Body>
        </Card>
      );
    };
  
    return <div className="container">
              <div className="row">
                {cardInfo.map(renderCard)}
              </div>
           </div>;
  };
  
  export default PostSubmit;
  