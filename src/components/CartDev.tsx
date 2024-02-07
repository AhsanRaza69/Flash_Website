
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Products, stateProps } from '../../type'
import { ImCross } from 'react-icons/im'
import Image from 'next/image'
import FormatedPrice from './FormatPrice'
import { delectCart } from '@/redux/ShopingSlice'

const CartDev = () => {
  const {ProductData} = useSelector((state:stateProps)=>state?.shop)
  const dispatch = useDispatch()
  return (
   
  
        <span className=' w-full flex-col  overflow-auto  gap-y-3'>
          {ProductData.map((item:Products)=>(
            <div key={item._id} className=' flex   my-2  justify-between'>
              <span
              onClick={()=>dispatch(delectCart(item._id))}
               className=' text-xm   flex items-center justify-center   text-red-500 hover:bg-red-500
                w-5 hover:text-white duration-200  ease-in h-5 rounded-full '>
              <ImCross size={9}  />
              </span>
              <div className='  font-[600] text-black flex-col flex   '>
                   <h2 className='  font-medium'>
                    {item.title.substring(0,10)}
                   </h2>
                   <p className=' font-thin  text-sm'>
                   {item.quantity} X <span className=' text-webBlue'><FormatedPrice amount={item?.price}/></span>
                    
                   </p>
              </div>
            <div className=" ">
            <Image src={item?.image} 
              alt='prudctimage'
              width={200}
            //  objectFit='cover'
              height={200}
              className='  h-[50px]  w-[35px]  object-cover '
              />  
            </div>
              
            </div>
          ))}
        </span>
       
    
  )
}

export default CartDev