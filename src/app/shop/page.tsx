
import Container from '@/components/Container'
import ProductCart from '@/components/ProductCart'
import SlideBar from '@/components/SlideBar'
import Image from 'next/image'
import Link from 'next/link'
import { getProducts } from '@/helper'
import React, { useEffect } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Products } from '../../../type'


const shopPage = async() => {
  const Product = await getProducts()
 



  return (
    <div>
      <div className=" bg-darkText/5 ">
          <Container className='  py-2 flex mt-10  justify-between items-center '>
          <h2 className="  text-2xl">
          Shop
          </h2>
         <span className=' text-sm text-darkText flex gap-x-1 items-center'>
         < Link href="/" className="">
          home 
          </Link>
          <MdKeyboardArrowRight/>
           Shop
         </span>
          </Container>
        </div>
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6  ">
          <div className="  w-full col-span-2  ">  
          <div className=" flex  items-center justify-between w-full">
            <h3 className=' text-darkText'>Showing all 8 results
             </h3>
               <label htmlFor="">
                
                <select  className=' dark:hover:bg-webBlue border border-black  group  text-gray-500 w-[200px]'>
                  <option  className='' selected value="">Deafault sorting</option>
                  <option  value="">Sort by average rating</option>
                  <option  value="">Sort by latest</option>
                  <option  value="">Sort by price: low to high</option>
                  <option  value="">Sort by price: high to low</option>
                </select >
               </label>
          </div>
          <div className="  grid grid-cols-2 px-2   md:grid-cols-3 lg:grid-cols-4 gap-x-1 md:gap-x-4 items-center md:gap-6">
           {
           Product.map((item:Products)=>(
            <ProductCart item={item} key={item._id}/>
           ))
           }
           
          </div>
            </div>
          <SlideBar/>
        </Container>
    </div>
  )
}

export default shopPage

