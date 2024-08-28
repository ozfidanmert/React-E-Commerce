import React from 'react'
import ProductList from '../components/ProductList'
import SliderComp from '../components/SliderComp'

const Home = () => {
  return (
    <div className='py-6'>
      <SliderComp/>
      <ProductList/>
    </div>
  )
}

export default Home