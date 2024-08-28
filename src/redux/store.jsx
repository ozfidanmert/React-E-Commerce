import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/productSlice'
import basketSlice from './slices/basketSlice'
import categorySlice  from './slices/categorySlice'
import themeSlice from './slices/themeSlice'

export const store = configureStore({
  reducer: {
    product: productSlice,
    basket: basketSlice,
    category: categorySlice,
    theme: themeSlice
  },
})