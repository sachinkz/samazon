import React from 'react'
import ItemsCategory from '../../components/user/ItemsCategory'
import Banner from '../../components/user/Banner'
import ProductSection from '../../components/user/ProductSection'
import { products } from '../../utils/DUMMY_DATA'

const HomePage = () => {
  return (
    <div className='w-full min-h-screen pt-[60px]'>
       <ItemsCategory/> 
       <Banner/>
       <ProductSection products={products} />
       <ProductSection products={products} />
       <ProductSection products={products} />
    </div>
  )
}

export default HomePage