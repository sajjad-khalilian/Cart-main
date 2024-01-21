import { useSelector } from 'react-redux'
import CheckoutCard from '../components/CheckoutCard';
import CheckoutSidebar from '../components/CheckoutSidebar';
import styles from "./CheckoutPage.module.css"


function CheckOutPage() {

    const state = useSelector(store => store.cart)
    console.log(state);

    
    return (
        <div className={styles.container}>
            <CheckoutSidebar state={state}/>
            <div className={styles.products}>
                {state.selectedItems.map(i => (<CheckoutCard key={i.id} data={i}/>))}
            </div>
        </div>
    )
}

export default CheckOutPage
