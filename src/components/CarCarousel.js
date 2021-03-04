import Carousel from 'react-bootstrap/Carousel'
import CarContext from '../contexts/CarContext';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import CarouselStyles from '../styles/CarCarousel.module.css'

const CarCarousel = () => {
    return (
    <div className={CarouselStyles.main_wrapper}>
    <Carousel className={CarouselStyles.caro_wrapper}>
    <Carousel.Item className={`${CarouselStyles.carousel_item}`}>
        <img
            className={`d-block w-100 ${CarouselStyles.carousel_image}`}
            src="../assets/car-pictures/Dodge-Ram 3500 Club-1997.jpg"
            alt="First slide"
        />
    <Carousel.Caption className={CarouselStyles.carousel_info}>
        <img alt="sales icon" src="../assets/sale-icon.png" className={CarouselStyles.sales_icon}/>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className={`${CarouselStyles.carousel_item}`}>
    <img
      className={`d-block w-100 ${CarouselStyles.carousel_image}`}
      src="../assets/car-pictures/Audi-80-1989.jpg"
      alt="Second slide"
    />
    <Carousel.Caption className={CarouselStyles.carousel_info}>
        <img alt="sales icon" src="../assets/sale-icon.png" className={CarouselStyles.sales_icon}/>
    </Carousel.Caption>
    </Carousel.Item >
    <Carousel.Item className={`${CarouselStyles.carousel_item}`}>
    <img
      className={`d-block w-100 ${CarouselStyles.carousel_image}`}
      src="../assets/car-pictures/Ford-Festiva-1993.jpg"
      alt="Third slide"
    />
    <Carousel.Caption className={CarouselStyles.carousel_info}>
      <img alt="sales icon" src="../assets/sale-icon.png" className={CarouselStyles.sales_icon}/>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>

</div>
    );
}

export default CarCarousel;