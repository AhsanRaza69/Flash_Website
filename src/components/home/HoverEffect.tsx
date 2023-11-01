import React from 'react'
import { FaPlus } from 'react-icons/fa'

interface Props {
    title:string
    image:string
}
const HoverEffect = ({title,image}:Props) => {
  return (
    <div className=' group relative '>
    <img src={image} className=' w-full h-full object-cover' alt="ProductImage" />
    <div className=' h-[90%] w-[90%] m-4 top-0 overflow-hidden bg-slate-800/70 duration-500 scale-0  group-hover:scale-100 flex items-center justify-center absolute'>
         <h2 className=' text-white font-medium text-lg cursor-pointer '> {title}</h2>
         <div className=" w-16 h-16 bg-webBlue absolute -top-8 rotate-45 -right-8">
         
         </div>
         <span className=' absolute top-2 right-1 text-white cursor-pointer'>
         <FaPlus/>
         </span>
    </div>
    </div>
  )
}

export default HoverEffect