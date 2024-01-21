import { Link } from "react-router-dom"
import { productQuantity, shorten } from "../helper/helper"
import styles from "./Card.module.css"
import { BiDetail } from "react-icons/bi";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decrease, increase, removeItem } from "../features/cart/cartSlice";

function Card({data}) {
    const {image , title , price , id} = data


    const state = useSelector(store => store.cart)

    
    const dispatch = useDispatch()
    const quantity = productQuantity(state , id)


    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <h3>{shorten(title)}</h3>
            <p>{price} $</p>
            <div className={styles.actions}>
                <Link to={`/products/${id}`}>
                    <BiDetail/>
                </Link>
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

export default Card
