import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppCarousel from './components/Carousel/Carousel';
import InputBox from './components/InputBox/InputBox';

function App() {
  return (
    <div>
      <Header />
      <AppCarousel />
      <Footer />
      <InputBox />
    </div>
  );
}

export default App;
