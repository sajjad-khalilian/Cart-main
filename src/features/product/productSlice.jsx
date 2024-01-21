import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/config";



const initialState = {
    loading: false,
    products: [],
    error: ""
}

const fetchProducts = createAsyncThunk("product/fetchProducts" , () => {
    return api.get("/products")
})

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending , (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled , (state , action) => {
            state.error = ""
            state.loading = false
            state.products = action.payload
        })
        builder.addCase(fetchProducts.rejected , (state , action) => {
            state.error = action.error.message
            state.products = []
            state.loading = false
        })
    }
})
export default productSlice.reducer
export {fetchProducts}