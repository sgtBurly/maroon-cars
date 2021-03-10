import React from 'react';
import CardsWrapper from "../components/CardsWrapper";
import style from '../styles/Hero.module.css'
import CarCarousel from '../components/CarCarousel'
import toast, { Toaster } from 'react-hot-toast';


const Home = () => {
  return (
    <div>
      <div className={style.imageContainer}>
        <div className={style.greeting}>
          <h2 className={style.pColor}>Welcome to Maroon Cars<br></br><span className={style.pColor}>Find the perfect car for you!</span></h2>
        </div>
      </div>
      <CarCarousel/>
      <CardsWrapper />
    </div>
  );
}

export default Home;

