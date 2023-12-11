"use client"
import Image from 'next/image'

import { useDispatch } from 'react-redux/es/exports'
import { Products } from '../../type'
import { addToCart } from '@/redux/ShopingSlice'


interface Props{
  item:Products
}

const ProductCart = ({item}:Props) => {
  const dispatch = useDispatch()
  return (
    <div className=" flex flex-col  overflow-hidden py-4 gap-y-2">
       <div className="  relative  w-full ">
       <Image src={item.image}
       width={200} height={200} className=' object-cover  hover:scale-105 duration-200  w-full h-[200px] ' alt='ProductImage'/>
       {/* <span className=" bg-webBlue py-4 px-3 flex items-center justify-center text-sm rounded-full text-white  absolute -right-3 -top-2">Sale!</span> */}
       </div>
       <h2 className=' mt-2 font-normal'>{item.title}</h2>
       <p className=' text-webBlue text-sm'>$3:00</p>
       <div>
       <button
       onClick={()=>dispatch(addToCart("hbh"))}
       className=' bg-webBlue text-sm font-semibold border-white text-white px-4 py-1 rounded-md'>Add to Cart</button>
 
       </div>
    </div>
  )
}

export default ProductCart