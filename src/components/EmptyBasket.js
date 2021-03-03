import styles from "../styles/EmptyBasketStyles.module.css"
import { Link } from "react-router-dom";

function EmptyBasket() {
    return(
        <div className={styles.emptyWrapper}>
            <div className={styles.empty}>
                <h1 className={styles.noMarginTop}>Oups your basket is empty!</h1>
                <p>Click <Link to="/" className={styles.linkStyle}>here</Link> to continue shopping.</p>
            </div>
        </div>
    )
}

export default EmptyBasket;