import { addToCart } from '@/redux/ShopingSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Products } from '../../type'

interface Props {
    item:Products
}

const AddToCartBtn = ({item}:Props) => {
    const dispatch = useDispatch()
  return (
   <div className="">
     <button
    onClick={()=>dispatch(addToCart(item))}
    className=' bg-webBlue/90 hover:bg-webBlue w-[120px]  duration-200  text-sm font-semibold border-white text-white px-4 
    py-[5px] rounded-md'>Add to Cart</button>
   </div>

  )
}

export default AddToCartBtn