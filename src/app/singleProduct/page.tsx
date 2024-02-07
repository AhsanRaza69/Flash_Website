"use client"
import AddToCartBtn from "@/components/AddToCartBtn"
import Container from "@/components/Container"
import FormatedPrice from "@/components/FormatPrice"
import SlideBar from "@/components/SlideBar"
import { GetSingleProduct, getTrendingProducts } from "@/helper"
import { decreaceQuantity, increaseQuantity } from "@/redux/ShopingSlice"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { MdKeyboardArrowRight } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { Products, stateProps } from "../../../type"
import RelativeItem from "@/components/RelativeItem"


type Props = { 
    searchParams:{[key:string]:string | string[] | undefined }
}

const page = async({searchParams}:Props) => {

  // const {ProductData} = useSelector((state:stateProps)=>state.shop)

  // const [totalAmount, settotalAmount] = useState(0)

  // useEffect(()=>{
  //     // let amt = 0;
  //     // ProductData.map((item:Products)=>{
  //     //     amt += item.quantity
  //     //     return; 
  //     // })
  //     // settotalAmount(amt)
  //   },[ProductData])

  const dispatch = useDispatch()
    const IdString = searchParams?._id
    const _id = Number(IdString)
    const item = await GetSingleProduct(_id)
   



  return (
    <div className=" ">
        
        
        <div className=' bg-darkText/5  lg:px-20 py-4 flex mt-10  justify-between items-center '>
          <h2 className="  text-2xl">
          Shop
          </h2>
         <span className=' text-sm text-darkText flex gap-x-1 items-center'>
         <Link  href="/" className="">
          home 
          </Link>
          <MdKeyboardArrowRight/>
           Shop
         </span>
          </div>
        <Container className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
          <div className=" w-full col-span-2 py-3  ">
          <div className=" md:flex  w-full ">
            <div className="  overflow-hidden  h-[300px]">
              <Image className=" object-cover hover:scale-105 duration-300 delay-200  w-full h-full"
              objectFit="cover"
               src={item?.image} width={600} height={600} alt="ProductI"/>

            </div>
            <div className="md:w-1/2 px-5 flex flex-col gap-y-6">
              <div>
              <h2 className=" text-[34px] text-darkText">
                {item?.title}
              </h2>
              <p className=" text-webBlue text-lg  font-medium ">
                <FormatedPrice amount={item?.price}/>
              </p>
              </div>
              <p className=" text-gray-500 leading-7">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
              </p>
              <div className=" flex items-center gap-x-2">
                <div className=" flex gap-1 items-center  p-1  h-8 border border-black ">
                  {"1"}
                <div className=" cursor-pointer ">
                <span className=" cursor-pointer"
                onClick={()=>dispatch(increaseQuantity(item))}
                >
                <IoIosArrowUp />
                </span>
                <span
                onClick={()=>dispatch(decreaceQuantity(item))}
                className="  cursor-pointer ">
                <IoIosArrowDown />

                </span>
                </div>
                </div>
                <AddToCartBtn item={item}/>
              </div>

              <span className=" text-gray-500 mb-8 md:mb-0">
              SKU: N/A Categories: <span className=" text-black">  Clothing, T-shirts  </span>
              </span>

            </div>
          </div>
          <div className=" w-full border-[1px] relative border-gray-300 h-[1px] my-8">
            <div className=" border-[1px]  border-gray-300 border-b-transparent absolute -bottom-[2px] left-4 bg-white 
             py-2 rounded-md  font-medium px-3 ">Description</div>
          </div>

          <div className=" text-gray-500 ">
            <h2 className=" text-gray-600 text-3xl mb-4 font-medium ">Description</h2>
           <p className="leading-6">
           Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
           </p>
          </div>
          <RelativeItem/>
          </div>
          <SlideBar/>

        </Container>
    </div>
  )
}

export default page