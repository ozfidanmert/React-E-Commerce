import React, { useState } from 'react'
import ProductList from '../components/ProductList'
import Sorting from '../components/Home/Sorting'
import Category from '../components/Home/Category'

const Products = () => {

    return (
        <div className='py-6'>
            <Category />

            <div className=''>
                <Sorting />
                <ProductList/>
            </div>
        </div>
    )
}

export default Products
