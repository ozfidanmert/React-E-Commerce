import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Product = ({ product }) => {

    const { id, title, image, price } = product

    const navigate = useNavigate()


    return (
        <div onClick={() => navigate('/product-details/' + id)} className='flex flex-col justify-center text-center items-center w-[260px] h-[380px] border rounded-md p-2 cursor-pointer shadow-md  hover:scale-105 duration-300'>

            <img className='h-[200px] items-center p-1' src={image} alt="" />

            <div className='flex flex-col mt-3'>
                <h2 className='h-[90px]'>{title}</h2>
                <label className=''>{price} TL</label>
            </div>

        </div>


    )
}

export default Product