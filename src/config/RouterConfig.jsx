import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetails from '../components/ProductDetails'
import NotFound from '../components/NotFound'
import Products from '../pages/Products'

const RouterConfig = () => {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product-details/:id' element={<ProductDetails />} />
            <Route path='/products' element={<Products />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default RouterConfig