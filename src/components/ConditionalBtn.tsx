import Link from 'next/link'
import React from 'react'
import { Products, stateProps } from '../../type'
import { useSelector } from 'react-redux'

const ConditionalBtn = ({item}:any) => {
    const {ProductData} = useSelector((state:stateProps )=>state?.shop)

    const filterdata =  ProductData?.filter((prod:Products)=>prod._id===item._id)
  return (
    
        <Link href={"/cart"}>
        <button
   
   className=' bg-webBlue/90 w-[120px]  hover:bg-webBlue duration-200  text-sm font-semibold border-white text-white px-4 
   py-[5px] rounded-md'>View Cart</button>
        </Link>
    
  )
}

export default ConditionalBtn