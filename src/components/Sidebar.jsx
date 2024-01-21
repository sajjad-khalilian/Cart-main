import styles from "./Sidebar.module.css"
import { MdFormatListBulleted } from "react-icons/md";
import { createQueryObject } from "../helper/helper";


function Sidebar({setQuery}) {
    const categoryHandler = (e) => {
        const {tagName} = e.target
        const category = e.target.innerText.toLowerCase()
        
        if(tagName !== "LI") return;
        setQuery(query => createQueryObject(query , {category}))
    }
    return (
        <div className={styles.sidebar}>
            <div>
                <MdFormatListBulleted/>
                Categories
            </div>
            <ul onClick={categoryHandler}>
                <li>All</li>
                <li>Electronics</li>
                <li>Jewelery</li>
                <li>Men's Clothing</li>
                <li>Women's Clothing</li>
            </ul>
        </div>
    )
}

export default Sidebar
