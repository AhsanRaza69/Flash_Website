import { getTrendingProducts } from '@/helper'
import React from 'react'
import ProductCart from './ProductCart'
import { Products } from '../../type'

const RelativeItem = async() => {
    const trendingItem = await getTrendingProducts()
  return (
    <div className=' my-6'>
      <h2 className=' text-2xl font-medium text-gray-500  '> Related products</h2>
       
       <div className=" grid grid-cols-1 justify-center md:grid-cols-4 items-center gap-3 ">
       {
           trendingItem.map((item:Products)=>(
            <ProductCart item={item} key={item._id}/>
           ))
           }
        
       </div>
        
    </div>
  )
}

export default RelativeItem