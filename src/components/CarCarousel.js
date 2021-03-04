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
            src="https://images.unsplash.com/photo-1612832020223-a496c2b69497?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="First slide"
        />
    <Carousel.Caption className={CarouselStyles.carousel_info}>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className={`${CarouselStyles.carousel_item}`}>
    <img
      className={`d-block w-100 ${CarouselStyles.carousel_image}`}
      src="https://images.unsplash.com/photo-1611095966422-50a79dd5313b?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
      alt="Second slide"
    />
    <Carousel.Caption className={CarouselStyles.carousel_info}>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
    </Carousel.Item >
    <Carousel.Item className={`${CarouselStyles.carousel_item}`}>
    <img
      className={`d-block w-100 ${CarouselStyles.carousel_image}`}
      src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
      alt="Third slide"
    />
    <Carousel.Caption className={CarouselStyles.carousel_info}>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
  </div>
    );
}

export default CarCarousel;