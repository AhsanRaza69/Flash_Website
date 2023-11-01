"use client"
import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

const Uparrow = () => {
    const [ShowButton, setShowButton] = useState(false)
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
    //   useEffect(()=>{
    //     const handleScroll = () => {
    //         if (window.scrollY > 500) {
    //           setShowButton(true);
    //         } else {
    //           setShowButton(false);
    //         }
    //   })
    
  return (
    <div onClick={scrollToTop} className=' bg-webBlue text-white p-4 right-3 bottom-3 rounded-md cursor-pointer text-xl opacity-50 fixed'>
        <IoIosArrowUp/>
    </div>
  )
}

export default Uparrow