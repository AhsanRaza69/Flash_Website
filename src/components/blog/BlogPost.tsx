import React from 'react'
import { BlogData } from "@/BlogData/Data"
import { AiFillClockCircle, AiOutlineFolderOpen } from "react-icons/ai"
import { BiSolidUser } from "react-icons/bi"
import { FaFolderOpen } from "react-icons/fa"
const BlogPost = () => {
  return (
    <div className=" flex flex-col  col-span-2 ">
                {
                  BlogData.map((item)=>(
                    <div className=" flex flex-col  mb-10  md:gap-y-8">
                <div className=" w-full  object-cover">
                  <img src={item.image}/>
                
                </div>
                <div className=" w-full relative h-auto md:h-52 flex justify-center">
                        <div className=" bg-white w-[95%] flex flex-col gap-y-[6px] md:absolute -top-[75px]  md:px-5 md:py-4 py-2 ">
                  <h2 className=" text-md md:text-lg font-medium">
                  {item.title}
                  </h2>
                  
                  <div className=" flex gap-x-3 text-darkText items-center">
                    <p className=" hover:text-webBlue  duration-300 delay-100  flex items-center gap-x-1 text-xs"> <span className=" text-black    "><AiFillClockCircle/></span>January 2, 2017</p>
                    <p className=" hover:text-webBlue  duration-300 delay-100  flex items-center gap-x-1 text-xs"> <span className=" text-black    "><BiSolidUser/></span>ThemeGrill Team</p>
                  </div>

                  <p className=" text-xs md:text-sm leading-5 m-0 text-darkText">
                  {item.description}
                  </p>
                  <span className=" flex items-center mt-4 gap-1">
                    <FaFolderOpen /> <span className=" capitalize text-sm text-darkText ">blog</span>
                  </span>
                </div>
                </div>
                </div>
                  ))
                }
              </div>
  )
}

export default BlogPost