import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    products: [],
    selectedProduct: {},
    loading: false,
    searchProduct: [],
    categoriesProduct: [],
    selectedCategory: '',
    selectedSort: ''
}

const BASE_URL = "https://fakestoreapi.com"

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    const response = await axios.get(`${BASE_URL}/products`)
    return response.data
})

export const getProductDetails = createAsyncThunk("getProductDetails", async (id) => {
    const response = await axios.get(`${BASE_URL}/products/${id}`)
    return response.data
})

//* Categori
export const getCategoriesProduct = createAsyncThunk('getCategoriesProduct', async (category) => {
    const response = await axios.get(`${BASE_URL}/products/category/${category}`)
    return response.data
})



export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        //* ÜRÜN ARAMA
        searchProducts: (state, action) => {
            const searchTerm = action.payload?.toLowerCase();
            state.searchProduct = state.products.filter(product => 
                product.title?.toLowerCase().includes(searchTerm) 
            );
        },
        //* SEÇİLEN KATEGORİ VERİSİNİ TUTAR
        selectedCategories: (state, action) => {
            state.selectedCategory = action.payload
        },
        //* Seçilen Sort verisini tutar
        selectedSorties : (state, action) => {
            state.selectedSort = action.payload
        }
        
    },
    extraReducers: (builder) => {
        //* Server den cevap bekliyor
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getProductDetails.pending, (state) => {
            state.loading = true
        })

        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
        builder.addCase(getProductDetails.fulfilled, (state, action) => {
            state.loading = false
            state.selectedProduct = action.payload
        })

        //categori
        //getCategoriesProduct
        builder.addCase(getCategoriesProduct.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoriesProduct.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
    }
})

export const { searchProducts, selectedCategories, selectedSorties } = productSlice.actions
export default productSlice.reducer