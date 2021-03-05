import React, { useContext }from 'react';
import { BasketContext } from '../contexts/BasketContext';
import { CarContext } from '../contexts/CarContext'

// const ItemsVin = ['WAUVT68E95A768929', 'WAUAH78E97A881370']
// need props for recieving card items from BasketContext
const Card = (props) => {
    const [customerBasket, setCustomerBasket] = useContext(BasketContext);
    // const {cars} = useContext(CarContext)
//Looping over cars and filter the cars which have the same vin as the cars in customerbasket
    // const CardItemVin = cars.filter(car => customerBasket.includes(car.vin));


    
// console.log(CardItemVin);

    return ( 
        <div className="cardcontainer"> 
            <div>
                <img src="" alt=""/>
            </div>
            <div>
                <p>{props.make}</p>
                <p>{props.model}</p>
                <p>{props.year}</p>
            </div>
            <p>{customerBasket.descShort}</p>
            <div>
                <p>{customerBasket.price}</p>
                <button  className="trash-btn">
                <i className="fas fa-trash">Delet</i>
            </button>
            </div>
        </div>
    );
}
 
export default Card;

// {
//     "make": "Panoz",
//     "model": "Esperante",
//     "year": 2006,
//     "vin": "WAUKF98E25A286122",
//     "city": "Lanxi",
//     "descShort": "congue risus semper porta volutpat",
//     "descLong": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
//     "price": 232476,
//     "miles": 24263
//   },
//   {
//     "make": "Dodge",
//     "model": "Ram 3500 Club",
//     "year": 1997,
//     "vin": "WAUAH78E97A881370",
//     "city": "Tournavista",
//     "descShort": "platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum",
//     "descLong": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
//     "price": 491093
//   },
//   {
//     "make": "Oldsmobile",
//     "model": "98",
//     "year": 1992,
//     "vin": "WAUVT68E95A768929",
//     "city": "Tagana-an",
//     "descShort": "ultrices enim lorem ipsum dolor",
//     "descLong": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
//     "price": 509536,
//     "miles": 45262
//   },