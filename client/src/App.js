import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppCarousel from './components/Carousel/Carousel';
// import InputBox from './components/InputBox/InputBox';
import PostSubmit from './pages/PostSubmit/PostSubmit';
import MovieDetails from './pages/MovieDetails/MovieDetails';
// import * as ReactBootStrap from "react-bootstrap";

function App() {
  return (
    <div>
      <Header />
      <AppCarousel />
      <Footer />
      {/* <InputBox /> */}
      {/* PostSubmit STAYS HERE FOR STYLING PURPOSES RN */}
      <PostSubmit />
      {/* MovieDetails STAYS HERE FOR STYLING PURPOSES RN */}
      <MovieDetails />
    </div>
  );
}

export default App;
