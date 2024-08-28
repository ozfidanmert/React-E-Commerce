import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedSorties } from '../../redux/slices/productSlice'

const Sorting = () => {

    const dispatch = useDispatch()
    const { themes } = useSelector(store => store.theme)

    return (
        <div className='bg-gray-100 my-4 p-3 flex items-center justify-end'
            style={{
                background: themes ? 'white' : 'black',
                color: themes ? 'black' : 'white'
            }}>
            <select
                style={{
                    background: themes ? 'white' : 'black',
                    color: themes ? 'black' : 'white'
                }}
                onChange={(e) => dispatch(selectedSorties(e.target.value))}
                className='bg-gray-200 text-center px-5 py-3 rounded-md cursor-pointer' name="" id="">

                <option value="" >Seçiniz</option>
                <option value="asc">Artan</option>
                <option value="desc">Azalan</option>
            </select>
        </div>
    )
}

export default Sorting
