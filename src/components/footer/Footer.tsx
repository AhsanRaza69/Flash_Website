    import React from 'react'
import Container from '../Container'
import FooterHeading from './FooterHeading'
import {IoIosArrowForward} from 'react-icons/io'
import Link from 'next/link'
    
    const Footer = () => {
      return (
        <div className=' pt-8  w-full bg-darkcolor'>
            <Container >
            <div className=' grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-y-0 caret-transparent py-4'>
                {/* d1 */}
                <div className=' text-left flex flex-col  justify-start'>
                <FooterHeading title="Categories"/>
                <ul className=" flex flex-col gap-y-2 text-sm mt-6 justify-center">
                  <li className="">
                    <Link href="" className=' flex    text-white items-center'>
                     <IoIosArrowForward  className="mr-2 " />
                     <span className=" capitalize  hover:text-webBlue duration-300 cursor-pointer">
                     blog
                     </span>
                    
                    </Link>
                  
                  </li>
                  <li className="">
                    <Link href="" className=' flex    text-white items-center'>
                     <IoIosArrowForward  className="mr-2 " />
                     <span className=" capitalize  hover:text-webBlue duration-300 cursor-pointer">
                     food
                     </span>
                    
                    </Link>
                  
                  </li>
                </ul>
                </div>
              {/* d2 */}
                <div className=' text-left flex flex-col  justify-start'>
                <FooterHeading title="Meta"/>
                <ul className=" flex flex-col gap-y-2 text-sm mt-6 justify-center">
                  <li className="">
                    <Link href="" className=' flex    text-white items-center'>
                     <IoIosArrowForward  className="mr-2 " />
                     <span className=" capitalize  hover:text-webBlue duration-300 cursor-pointer">
                     Log in
                     </span>
                    
                    </Link>
                  
                  </li>
                  <li className="">
                    <Link href="" className=' flex    text-white items-center'>
                     <IoIosArrowForward  className="mr-2 " />
                     <span className=" capitalize  hover:text-webBlue duration-300 cursor-pointer">
                     Entries feed
                     </span>
                    
                    </Link>
                  
                  </li>
                  <li className="">
                    <Link href="" className=' flex    text-white items-center'>
                     <IoIosArrowForward  className="mr-2 " />
                     <span className=" capitalize  hover:text-webBlue duration-300 cursor-pointer">
                     Comments feed
                     </span>
                    
                    </Link>
                  
                  </li>
                  <li className="">
                    <Link href="" className=' flex    text-white items-center'>
                     <IoIosArrowForward  className="mr-2 " />
                     <span className=" capitalize  hover:text-webBlue duration-300 cursor-pointer">
                     WordPress.org
                     </span>
                    
                    </Link>
                  
                  </li>
                </ul>
                </div>
              {/* d3 */}
                <div className=' text-left flex flex-col  justify-start'>
                <FooterHeading title="Categories"/>
                <ul className=" flex flex-col gap-y-2 text-sm mt-6 justify-center">
                  <li className="">
                    <Link href="" className=' flex    text-white items-center'>
                     <IoIosArrowForward  className="mr-2 " />
                     <span className=" capitalize  hover:text-webBlue duration-300 cursor-pointer">
                     About
                     </span>
                    
                    </Link>
                  
                  </li>
                  <li className="">
                    <Link href="/" className=' flex    text-white items-center'>
                     <IoIosArrowForward  className="mr-2 " />
                     <span className=" capitalize  hover:text-webBlue duration-300 cursor-pointer">
                     Home
                     </span>
                    
                    </Link>
                  
                  </li>
                  <li className="">
                    <Link href="/blog" className=' flex    text-white items-center'>
                     <IoIosArrowForward  className="mr-2 " />
                     <span className=" capitalize  hover:text-webBlue duration-300 cursor-pointer">
                     Blog
                     </span>
                    
                    </Link>
                  
                  </li>
                  <li className="">
                    <Link href="/" className=' flex    text-white items-center'>
                     <IoIosArrowForward  className="mr-2 " />
                     <span className=" capitalize  hover:text-webBlue duration-300 cursor-pointer">
                     Work with Us
                     </span>
                    
                    </Link>
                  
                  </li>
                </ul>
                </div>
              {/* d1 */}
                <div className=' text-left flex flex-col  justify-start'>
                <FooterHeading title="Categories"/>
                <ul className=" flex flex-col gap-y-2 text-sm mt-6 justify-center">
                  <li className="">
                    <Link href="" className=' flex    text-white items-center'>
                     <IoIosArrowForward  className="mr-2 " />
                     <span className=" capitalize  hover:text-webBlue duration-300 cursor-pointer">
                     RECEIPE FOR FOOD LOVER
                     </span>
                    
                    </Link>
                  
                  </li>
                  <li className="">
                    <Link href="" className=' flex    text-white items-center'>
                     <IoIosArrowForward  className="mr-2 " />
                     <span className=" capitalize  hover:text-webBlue duration-300 cursor-pointer">
                
                     Artistic Drawing Of Girl Has Gone Away
                     </span>
                    
                    </Link>
                  
                  </li>
                  <li className="">
                    <Link href="" className=' flex    text-white items-center'>
                     <IoIosArrowForward  className="mr-2 " />
                     <span className=" capitalize  hover:text-webBlue duration-300 cursor-pointer">
                
                     Photography Tips For Photographer
                     </span>
                    
                    </Link>
                  
                  </li>
                </ul>
                </div>
            </div>
            </Container>
            <div className=" w-full bg-gray-800/50 py-4 px-6   md:px-16 text-sm ">
              <p className=' text-white'>
              Copyright © 2023 Flash All rights reserved. Theme: Flash by ThemeGrill. Powered by WordPress
              </p>
            </div>
        </div>
      )
    }
    
    export default Footer