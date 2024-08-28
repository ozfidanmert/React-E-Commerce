import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/slices/categorySlice'
import { selectedCategories } from '../../redux/slices/productSlice'

const Category = () => {

    const dispatch = useDispatch()
    const { categories } = useSelector(store => store.category)
    const { themes } = useSelector(store => store.theme)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])


    return (
        <div className='bg-gray-200 py-3 px-1'
            style={{
                backgroundColor: themes ? '' : 'black',
                color: themes ? 'black' : ''
            }
            }>
            <div className='font-bold text-2xl text-center'>KATEGORİ</div>
            <div className='flex justify-between items-center mt-5 mx-10'>
                {
                    categories?.map((category, i) => {
                        return <div
                            className='cursor-pointer mb-3 p-2 border-2 hover:border-b-indigo-400 hover:bg-gray-300 hover:rounded-md '
                            onClick={() => dispatch(selectedCategories(category))}
                            key={i}>{category}</div>
                    })
                }
            </div>
        </div >
    )
}

export default Category
