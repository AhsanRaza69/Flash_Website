import Container from '@/components/Container'
import SlideBar from '@/components/SlideBar'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { GiSevenPointedStar } from 'react-icons/gi'
import { useFormik } from 'formik';

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
          home 
          </Link>
          <MdKeyboardArrowRight/>
           Contact
         </span>
          </div>
        </div>
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-y-6  ">
          <div className="  w-full col-span-2 px-[15px]  h-screen"> 
          <form action="" className='  flex flex-col gap-y-5'>
           <label htmlFor=" userName" className=' w-full  flex flex-col gap-y-3  '>
             <span className=" flex capitalize  font-medium ">
             Name
             <span className=" text-red-500 pt-1 flex ">
            <GiSevenPointedStar size={7}/>
            </span>
            </span>
            <input 
            className=' border-[1px] border-gray-500 outline-none w-full py-[6px] px-3'
            type="text"
            name='userName'
            id='userName'
            // value={formik.values.userName}
            />
            
           </label>
           <label htmlFor=" email" className=' w-full  flex flex-col gap-y-3  '>
             <span className=" flex capitalize  font-medium ">
             Email
             <span className=" text-red-500 pt-1 flex ">
            <GiSevenPointedStar size={7}/>
            </span>
            </span>
            <input className=' border-[1px] border-gray-500 outline-none w-full py-[6px] px-3' type="email" name='email'/>
           </label>
           <label htmlFor=" subject" className=' w-full  flex flex-col gap-y-3  '>
             <span className=" flex capitalize  font-medium ">
             Subject 
             <span className=" text-red-500 pt-1 flex ">
            <GiSevenPointedStar size={7}/>
            </span>
            </span>
            <input className=' border-[1px] border-gray-500 outline-none w-full py-[6px] px-3' type="text" name='subject'/>
           </label>
           <label htmlFor=" message" className=' w-full  flex flex-col gap-y-3  '>
             <span className=" flex capitalize  font-medium ">
             Message
             <span className=" text-red-500 pt-1 flex ">
            <GiSevenPointedStar size={7}/>
            </span>
            </span>
            <textarea
             className=' border-[1px] h-28  border-gray-500 outline-none w-full py-[6px] px-3'
             name='message'/>
           </label>
             <div>
              <button className=' px-6 py-3 border rounded-md bg-gray-300 text-sm'>Submit</button>
             </div>
          </form>
             </div>
          <SlideBar/>
        </Container>
    </div>
  )
}

export default ContactPage

export function generateMetadata(){
  return{
    title:"Contact-Flash",
    description:"blog page description"
  }
}