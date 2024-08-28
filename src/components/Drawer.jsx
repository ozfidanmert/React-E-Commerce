import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import { IoCloseSharp } from "react-icons/io5";
import { BsTrash3Fill } from "react-icons/bs";
import { LuMinusCircle } from "react-icons/lu";
import { FiPlusCircle } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { deleteToBasket, allBasketDelete, decrement, increment, totalPrice } from '../redux/slices/basketSlice';

const DrawerComponents = ({ open, setBasket }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { products, totalAmount } = useSelector(store => store.basket);
    const { themes } = useSelector(store => store.theme)

    useEffect(() => {
        dispatch(totalPrice());
    }, [products, dispatch]);


    const handleProductClick = (basketProductId) => {
        setTimeout(() => window.location.href = `/product-details/${basketProductId}`, 0);
    };

    const deleteBasket = (id) => {
        const result = confirm("Ürünü sepetinden kaldırmak istediğine emin misin?");
        if (result) {
            dispatch(deleteToBasket(id));
        }
    };

    return (
        <Drawer
            onClose={() => setBasket(false)}
            anchor='right'
            open={open}
            PaperProps={{
                style: {
                    backgroundColor: themes ? 'white' : 'gray',
                    color: themes ? 'black' : 'white',
                },
                className: 'px-3'
            }}
        >
            <div className='flex items-center mt-5 mb-3 justify-center relative'>
                <h1 className='text-2xl text-red-500 font-medium'>SEPETİM</h1>
                <div className='flex items-center'>
                    <IoCloseSharp
                        className='cursor-pointer text-3xl text-red-500 right-0 absolute'
                        onClick={() => setBasket(false)}
                    />
                    {
                        products.length > 0 && <BsTrash3Fill onClick={() => dispatch(allBasketDelete())} className='absolute right-20 text-xl cursor-pointer text-red-500' />
                    }
                </div>
            </div>

            {
                (products.length > 0) ?
                    products.map((product, id) => (
                        <div className='flex items-center justify-between my-3 p-1' key={id}>
                            <img onClick={() => handleProductClick(product.id)} className='w-[50px] cursor-pointer' src={product.image} alt="" />
                            <p className='px-3 w-[205px] text-center'>
                                {product.title} <span className='font-bold text-gray-500'>({product.count})</span>
                            </p>

                            <div className='flex items-center gap-1 mx-3 justify-center'>
                                <LuMinusCircle
                                    className='text-xl cursor-pointer'
                                    onClick={() => dispatch(decrement({ id: product.id, count: 1 }))}
                                />
                                <span className='text-l items-center flex justify-center'>{product.count}</span>
                                <FiPlusCircle
                                    className='text-xl cursor-pointer'
                                    onClick={() => dispatch(increment({ id: product.id, count: 1 }))}
                                />
                            </div>

                            <p className='font-bold'>{(product.price * product.count).toFixed(2)} TL</p>
                            <MdDeleteOutline onClick={() => deleteBasket(product.id)} className='text-red-400 text-2xl cursor-pointer ms-3' />
                        </div>
                    )) 
                    : <h1 className='text-center text-red-700 my-10 font-bold'>Sepette Ürün Bulunamadı!</h1>
            }

            <div className='text-end me-3 my-5'>
                <p className='font-medium text-green-700'>
                    Ödenecek Tutar: <span>{totalAmount.toFixed(2)} TL</span>
                </p>

                {products.length > 0 && (
                    <div className='flex justify-end items-center'>
                        <button className='flex items-center justify-center mt-4 rounded-md px-5 py-3 outline-none border-1 bg-green-600 text-white'>
                            <MdPayment className='mr-2 text-xl' />
                            Sipariş Ver
                        </button>
                    </div>
                )}
            </div>

        </Drawer>
    );
};

export default DrawerComponents;
