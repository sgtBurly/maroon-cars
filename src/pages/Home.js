import React from 'react';
import CardsWrapper from "../components/CardsWrapper";
import style from '../styles/Hero.module.css'

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
    </div>
  );
}

export default Home;

