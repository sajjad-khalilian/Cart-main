import styles from "./Search.module.css"
import { BsSearch } from "react-icons/bs";
import { createQueryObject } from "../helper/helper";

function Search({search , setSearch , setQuery}) {
    
    const searchHandler = () => {
        setQuery(query => createQueryObject(query , {search}))
    }


    return (
        <>
            <div className={styles.search}>
                <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value.toLowerCase().trim())}/>
                <button onClick={searchHandler}>
                    <BsSearch />
                </button>
            </div>
        </>
    )
}

export default Search
