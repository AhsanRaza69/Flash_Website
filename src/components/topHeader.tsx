// "use client"
import React from 'react'
import Container from './Container'
import {MdLocationPin} from 'react-icons/md';
import {HiMail} from 'react-icons/hi';
import {AiFillPhone} from 'react-icons/ai';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {BiLogoFacebook,BiLogoInstagram,BiLogoTwitter,BiLogoLinkedin} from 'react-icons/bi';

export const TopHeader = () => {
  return (
    <div className=" hidden  fixed   z-50   top-0 left-0 bg-blue-50 w-full h-10 lg:flex items-center md:px-8 lg:px-20 ">
     
        <div className=' mx-auto flex items-center w-full justify-between'>
            <div className=' font-light text-gray-600 flex items-center md:gap-x-4 lg:gap-x-6'>
                <p className=' flex items-center'>
                    <MdLocationPin size={12}/> <span className=' text-xs'>New York, NY 928865, USA</span>
                </p>
                <p className=' flex items-center'>
                    <BsFillTelephoneFill size={12}/> <span className=' text-xs'>+987-265945868</span>
                </p>
                <p className=' flex items-center'>
                    <HiMail size={12}/> <span className=' text-xs'>nfo@themegrill.com</span>
                </p>
            </div>
       {/* social icons */}
       <div className=' flex items-center  lg:gap-x-2'>
        <span className=' bg-white  text-darkText hover:text-black cursor-pointer rounded-full p-2 opacity-50 hover:opacity-100  duration-200 '><BiLogoFacebook size="15"/></span>
        <span className=' bg-white text-darkText hover:text-black cursor-pointer rounded-full p-2 opacity-50 hover:opacity-100  duration-200 '><BiLogoTwitter size="15"/></span>
        <span className=' bg-white text-darkText hover:text-black cursor-pointer rounded-full p-2 opacity-50 hover:opacity-100  duration-200 '><BiLogoInstagram size="15"/></span>
        <span className=' bg-white text-darkText hover:text-black cursor-pointer rounded-full p-2 opacity-50 hover:opacity-100  duration-200 '><BiLogoLinkedin size="15"/></span>
       </div>
        </div>
    
    </div>
  )
}

export default TopHeader
