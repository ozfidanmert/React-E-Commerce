import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, searchProducts } from '../redux/slices/productSlice'
import Product from './Product'
import { getCategoriesProduct } from '../redux/slices/productSlice';
import Paginate from './Paginate';

const ProductList = () => {

    const dispatch = useDispatch();
    const { products, searchProduct, selectedCategory, selectedSort } = useSelector(store => store.product);


    //* Ürünleri sıralama işlemi

    const sortedProducts = useMemo(() => {
        let sorted = [...products]

        if (selectedSort == 'asc') {
            sorted.sort((a, b) => a.price - b.price)
        }
        else if (selectedSort == 'desc') {
            sorted.sort((a, b) => b.price - a.price)
        }
        return sorted
    }, [products, selectedSort])


    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 8
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = sortedProducts.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(sortedProducts.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % sortedProducts.length;

        setItemOffset(newOffset);
    };


    useEffect(() => {
        if (selectedCategory) {
            dispatch(getCategoriesProduct(selectedCategory))
        } else {
            dispatch(getAllProducts());
        }
    }, [dispatch, selectedCategory]);


    useEffect(() => {
        dispatch(searchProducts());
    }, [dispatch]);

    
    //* Sıralama veya kategori değiştiğinde sayfayı sıfırlıyoruz
    useEffect(() => {
        setItemOffset(0)
    }, [sortedProducts]);

    return (
        <>
            <div className='flex flex-wrap py-10 justify-center gap-4'>
                {
                    (searchProduct.length > 0) ? (
                        searchProduct.map((product, id) => (
                            <Product key={id} product={product} />
                        ))
                    ) :
                        (currentItems.length > 0) ? (
                            currentItems.map((product, id) => (
                                <Product key={id} product={product} />
                            ))
                        ) :
                            <h1>ÜRÜN BULUNAMADI!</h1>
                }
            </div>

            <Paginate handlePageClick={handlePageClick} pageCount={pageCount} />
        </>
    )
};


export default ProductList