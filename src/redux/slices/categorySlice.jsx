import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    categories: [],
}

const BASE_URL = "https://fakestoreapi.com"

export const getCategories = createAsyncThunk('category', async () => {
    const repsonse = await axios.get(`${BASE_URL}/products/categories`)
    return repsonse.data
})


export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload
        })
    }
})

export const { } = categorySlice.actions
export default categorySlice.reducer