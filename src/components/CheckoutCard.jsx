import { FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa"
import { LuShoppingBag } from "react-icons/lu"
import { useDispatch } from "react-redux"
import { addItem, decrease, increase, removeItem } from "../features/cart/cartSlice"
import { shorten } from "../helper/helper"
import styles from "./CheckoutCard.module.css"


function CheckoutCard({data}) {
    const {image , title , quantity} = data
    const dispatch = useDispatch()

    return (
        <div className={styles.card}>
            <img src={image} alt={title}/>
            <div>
                <p>{shorten(title)}</p>
            </div>
            <div className={styles.actions}>
                <div>
                {quantity === 0 ? (
                            <button onClick={() => dispatch(addItem(data))}>
                                <LuShoppingBag/>
                            </button>

                        ) : (
                            <button onClick={() => dispatch(increase(data))}>
                                <FaPlus/>
                            </button>
                        )}
                        {!!quantity && <span>{quantity}</span>}
                        {quantity === 1 && (
                            <button onClick={() => dispatch(removeItem(data))}>
                                <FaRegTrashAlt/>
                            </button>
                        )}

                        {quantity > 1 && (
                            <button onClick={() => dispatch(decrease(data))}>
                                <FaMinus/>
                            </button>
                        )}
                </div>
            </div>
        </div>
    )
}

export default CheckoutCard
