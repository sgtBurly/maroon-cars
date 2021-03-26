import ValueStyles from "../styles/BasketValueStyles.module.css";
import { BasketContext } from "../contexts/BasketContext";
import { useContext } from "react";

function BasketValue() {
  const { customerBasket, calcBasket } = useContext(BasketContext);
  let totalPrice = calcBasket(customerBasket);

  return (
    <div>
      {/*Only displaying BasketValue if the costumer have added a car to basket */}
      {customerBasket.length > 0 && (
        <div className={ValueStyles.valueWrapper}>
          <p className={ValueStyles.count}>{customerBasket.length}</p>
          <p className={ValueStyles.price}>${totalPrice}</p>
        </div>
      )}
    </div>
  );
}

export default BasketValue;
