import React from 'react';
import './App.css';
import { MainCarousel } from './components/Carousels/MainCarousel';
import { Gallery } from './components/Gallery';
import { CardCarousel } from './components/Carousels/CardCarousel';
import { CardCarousel2 } from './components/Carousels/CardCarousel2';
import { Services } from './components/Services';
import './Assets/sass/main.scss';
import 'antd/dist/antd.css';
import "swiper/css";
import "swiper/css/navigation";

function App() {
  return (
    <>
      <MainCarousel />
      <Gallery />
      <CardCarousel />
      <CardCarousel2 />
      <Services />
    </>
  );
}

export default App;
