import Link from 'next/link';
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
interface Props {
    title:string;
    Links:any

}

const BlogLink = ({title,Links}:Props) => {
  return (
    <div className='  flex flex-col gap-y-2'>
        <h2 className=' '>
            {title}
        </h2>
          <div className=" flex items-center">
            <hr className=" bg-webBlue w-8 rounded-md h-1 "  />
          <div className="border rounded-md  top-0 w-full">
          </div>
          </div>
        <div className='flex flex-col gap-3 mt-3'>

            {
               Links.map((item:any,ind:any)=>(
                <div key={ind} className=' '>

                  <Link href={item.Link} className=' flex text-[12px] font-medium text-darkText items-center'>
                     <IoIosArrowForward  className="mr-2  text-black" />
                     <span className=" capitalize  hover:text-webBlue duration-300 cursor-pointer">
                    
                     {item.name}   
                     </span>
                    
                    </Link>
                </div>
               ))
            }

        </div>
    </div>
  )
}

export default BlogLink