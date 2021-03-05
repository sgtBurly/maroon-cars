import ValueStyles from "../styles/BasketValueStyles.module.css"
import BasketContext from "../contexts/BasketContext";

function BasketValue () {
    const { customerBasket } = useContext(BasketContext);

    return (
        <div>
            {/*Only displaying BasketValue if the costumer have added a car to basket */}
            {customerBasket &&
            <div className={ValueStyles.valueWrapper}>
                <p className={ValueStyles.count}>{customerBasket.length}</p>
                <p className={ValueStyles.price}>${customerBasket.car.price}</p>
            </div>}
        </div>
    );
}

export default BasketValue;