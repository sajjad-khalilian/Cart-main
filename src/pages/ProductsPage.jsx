import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {fetchProducts} from "../features/product/productSlice"
import Card from "../components/Card";
import styles from "./ProductPage.module.css"
import { filterProducts, searchProducts } from "../helper/helper";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar"
import { useSearchParams } from "react-router-dom";


function ProductsPage() {

    const dispatch = useDispatch()
    const {products} = useSelector(store => store.product)
    const [displayed , setDisplayed] = useState([])
    const [query , setQuery] = useState({})
    const [search , setSearch] = useState("")
    const [searchParams , setSearchParams] = useSearchParams()
    
    
    useEffect(() => {
        dispatch(fetchProducts())
    } , [])

    useEffect(() => {
        setDisplayed(products);
        const category = searchParams.get("category")
        const search = searchParams.get("search")
        if(category) query.category = category
        if(search) query.search = search
    } , [products])
    
    useEffect(() => {
        setSearchParams(query)
        setSearch(query.search || "")
        let finalProducts = searchProducts(products , query.search)
        finalProducts = filterProducts(finalProducts , query.category)
        setDisplayed(finalProducts)
    } , [query])
    
    
    return (
        <>
            <Search setQuery={setQuery} search={search} setSearch={setSearch}/>
            <div className={styles.container}>
                <div className={styles.products}>
                    {displayed.map(p => (<Card key={p.id} data={p}/>))}
                </div>
                <Sidebar setQuery={setQuery}/>
            </div>
        </>
    )
}

export default ProductsPage
