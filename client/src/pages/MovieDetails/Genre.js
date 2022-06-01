import React from 'react';

export default function Genre() {
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

  return (
    <div>
      <p style={{ textTransform: 'uppercase' }}>{movieDetails.genre}</p>
    </div>
  );
}
