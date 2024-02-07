"use client"
import Image from 'next/image'

import { useDispatch } from 'react-redux/es/exports'
import { Products } from '../../type'
import { addToCart } from '@/redux/ShopingSlice'
import Link from 'next/link'
import FormatedPrice from './FormatPrice'
import AddToCartBtn from './AddToCartBtn'
import ConditionalBtn from './ConditionalBtn'



interface Props{
  item:Products
}

const ProductCart = ({item}:Props) => {
  const dispatch = useDispatch()
  return (
    
    <div className="   flex flex-col w-full h-[260px] items-center my-4   rounded-sm relative   ">

         
       <div className=" flex flex-col h-full w-full   ">
       <div className="  relative overflow-hidden w-full    md:w-[90%]  h-[150px]   ">
       <Image src={item.image}
       width={1000} height={1000} className=' object-cover   hover:scale-105 duration-200  w-full  h-full ' alt='ProductImage'/>
      {/* {
        item?.isNew && (
          <span className=" bg-webBlue py-4 px-3 flex items-center justify-center text-sm rounded-full text-white 
           absolute -right-3 -top-2">New!</span>
          )
        } */}
        </div>
       <div className=" flex flex-col ">
        <Link href={{pathname:"/singleProduct",query:{_id:item?._id}}}>
       <h2 className='  mt-2 font-normal'>{item.title}</h2>
       </Link>
       <span className='  text-sm flex  items-center gap-2'>
        
        <p className=' opacity-30 text-darkText line-through'>
      <FormatedPrice amount={item.oldPrice}/>
      
        </p>
       <p className=' text-webBlue'>
       
      <FormatedPrice amount={item.price}/>
      {/* {item.price} */}
       </p>
       </span>
       </div>
       <div className=' mt-5  flex flex-col  gap-1  '>
        
      <AddToCartBtn item={item}/>
      <ConditionalBtn item={item}/>
       
       </div>
       </div>
       
    </div>
  )
}

export default ProductCart