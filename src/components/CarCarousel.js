import Carousel from 'react-bootstrap/Carousel'
import { CarContext } from '../contexts/CarContext';
import React, { useContext } from 'react';
import CarouselStyles from '../styles/CarCarousel.module.css'

const CarCarousel = () => {
    const { cars } = useContext(CarContext);
    //find the cars that are discounted
    let discountedCars = cars.filter(car => car.discount === true);
    console.log("This is the discountedCars array " + discountedCars)


    return (
      <div className={CarouselStyles.main_wrapper}>
      <Carousel className={CarouselStyles.caro_wrapper}>
       {
       discountedCars.map(disCar => {
        return (
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
        )
      })}



      </Carousel>

    </div>
    )
}

export default CarCarousel;