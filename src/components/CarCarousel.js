import Carousel from 'react-bootstrap/Carousel'
import CarContext from '../contexts/CarContext';
import React, { useContext } from 'react';

const CarCarousel = () => {

    const Cars = useContext(CarContext);

    const renderCarousel = () => {
        Cars.map(() => {
            <Carousel>
                <Carousel.Item>
                    <Carousel.Caption>
                    <h3>`${Cars.make}`</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        })
    }

    return ( 
        <div className="test">
            {renderCarousel(Cars)}
        </div>
     );
}
 
export default CarCarousel;