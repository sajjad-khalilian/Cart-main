import { PiListPlusBold } from "react-icons/pi";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";
import styles from "./CheckoutSidebar.module.css"
import { Link } from "react-router-dom";

function CheckoutSidebar({state}) {


    const checkoutHandler = () => {}


    return (
        <div className={styles.card}>
            <div>
                <PiListPlusBold/>
                <p>Total:</p>
                <span>{state.total} $</span>
            </div>
            <div>
                <FaHashtag/>
                <p>Quantity: </p>
                <span>{state.itemsCounter}</span>
            </div>
            <div>
                <BsPatchCheck/>
                <p>Status:<span>Pending...</span></p>
                <span>{state.checkOut}</span>
            </div>
            <Link to="/success">
                <button onClick={checkoutHandler}>
                    Checkout
                </button>
            </Link>
        </div>
    )
}

export default CheckoutSidebar
