import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../redux/slices/productSlice'
import { FiPlusCircle } from "react-icons/fi";
import { LuMinusCircle } from "react-icons/lu";
import { addToBasket } from '../redux/slices/basketSlice';


const ProductDetails = () => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const { selectedProduct } = useSelector(store => store.product)

  const { title, image, description, price } = selectedProduct


  useEffect(() => {
    dispatch(getProductDetails(id))
  }, [])

  const [count, setCount] = useState(1)

  const addBasket = () => {
    const payload = {
      id,
      title,
      image,
      price,
      count
    }
    dispatch(addToBasket(payload))
  }


  return (

    <div className='mt-10'>
      {selectedProduct ? (

        <div className='flex items-center '>
          <img src={image} alt="product" className='w-[230px] me-10' />

          <div className='text-center'>
            <h1 className='text-2xl font-medium'>{title}</h1>
            <p className='mt-9'>{description}</p>
            <h2 className='text-2xl mt-10 text-orange-700 font-bold'>{price} TL</h2>

            <div className='text-2xl flex items-center justify-center gap-2 cursor-pointer mt-5'>
              <LuMinusCircle onClick={() => count > 1 ? setCount(count - 1) : count} />
              <span className='text-xl font-bold items-center flex justify-center'>{count}</span>
              <FiPlusCircle onClick={() => setCount(count + 1)} />
            </div>

            <div>
              <button onClick={addBasket} className='mt-6 border p-3 rounded-md bg-orange-300'>Sepete Ekle</button>
            </div>

          </div>

        </div>
      ) : (
        <h1>Not Product Found!!!</h1>
      )
      }

    </div>
  )
}

export default ProductDetails