import styles from "./Header.module.css"
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Header() {
    const {itemsCounter} = useSelector(store => store.cart)
    return (
        <div className={styles.header}>
            <Link to="/">
                <h1>Shop</h1>
            </Link>
            <Link to="/checkout">
                <FiShoppingCart/>
                {!!itemsCounter && <span>{itemsCounter}</span>}
            </Link>
        </div>
    )
}

export default Header
