import React from 'react';
import style from '../styles/Hero.module.css'

const Home = () => {
  return (
    <div>
      <div className={style.imageContainer}>
        <img src="/assets/hero-image.jpg" alt="car in sunset"/>
      </div>
    </div>
  );
}

export default Home;

