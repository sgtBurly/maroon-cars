import styles from "../styles/EmptyBasketStyles.module.css"
import { Link } from "react-router-dom";


function EmptyBasket() {
    return(
        <div className={styles.emptyWrapper}>
            <div className={styles.empty}>
                <h2 className={styles.emptyHeader}>Oops! Your basket is empty!</h2>
                <Link to="/" className={styles.linkStyle}>
                    <button className={styles.findACar}>Find a car</button>
                </Link>
            </div>
        </div>
    )
}

export default EmptyBasket;