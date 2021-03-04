import React from 'react';
import CardsWrapper from "../components/CardsWrapper";
import style from '../styles/Hero.module.css'
import CarCarousel from '../components/CarCarousel'

const Home = () => {
  return (
    <div>
      <div className={style.imageContainer}>
        <div className={style.greeting}>
          <h2>Welcome to Maroon Cars<br></br><span>Find the perfect car for you!</span></h2>
        </div>
        <img src="/assets/hero-image.jpg" alt="car in sunset"/>
      </div>
      <CardsWrapper />
      <h1>This is homepage</h1>
      <CarCarousel/>
    </div>
  );
}

export default Home;

