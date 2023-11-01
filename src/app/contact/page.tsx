import Container from '@/components/Container'
import SlideBar from '@/components/SlideBar'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const ContactPage = () => {
  return (
    <div>
      <div className=" bg-darkText/5 ">
          <div className=' px-2   lg:px-20 py-2 flex mt-10  justify-between items-center '>
          <h2 className="  text-2xl">
          Contact
          </h2>
         <span className=' text-sm text-darkText flex gap-x-1 items-center'>
         < Link href="/" className="">
          home asdasd
          </Link>
          <MdKeyboardArrowRight/>
           Contact
         </span>
          </div>
        </div>
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-y-6  ">
          <div className=" bg-red-500 w-full col-span-2  h-screen">    </div>
          <SlideBar/>
        </Container>
    </div>
  )
}

export default ContactPage