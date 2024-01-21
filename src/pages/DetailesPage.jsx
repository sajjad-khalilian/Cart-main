import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchProducts } from '../features/product/productSlice'
import { shorten } from '../helper/helper'
import { BiSolidCategory } from "react-icons/bi";
import { ImPriceTag } from "react-icons/im";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import styles from "./DetailesPage.module.css"


function DetailesPage() {


    const {id} = useParams()
    const dispatch = useDispatch()
    const productsDetailes = useSelector(store => store.product.products.find(i => i.id === +id))


    useEffect(() => {
        dispatch(fetchProducts())
    },[])


    return (
        <div className={styles.container}>
            <img src={productsDetailes.image}/>
            <div className={styles.info}>
                <h3>{shorten(productsDetailes.title)}</h3>
                <p className={styles.description}>{productsDetailes.description}</p>
                <p className={styles.category}>
                    <BiSolidCategory/>
                    {productsDetailes.category}
                </p>
                <div>
                    <span className={styles.price}>
                        <ImPriceTag/>
                        {productsDetailes.price} $
                    </span>
                    <Link to="/">
                        <MdOutlineKeyboardBackspace/>
                        Back
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DetailesPage
