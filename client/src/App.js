import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppCarousel from './components/Carousel/Carousel';
// import InputBox from './components/InputBox/InputBox';
import PostSubmit from './pages/PostSubmit';

function App() {
  return (
    <div>
      <Header />
      <AppCarousel />
      <Footer />
      {/* <InputBox /> */}
      {/* PostSubmit STAYS HERE FOR STYLING PURPOSES RN */}
      <PostSubmit />
    </div>
  );
}

export default App;
