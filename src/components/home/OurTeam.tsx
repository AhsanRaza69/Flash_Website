import React from 'react'
import Container from '../Container'
import SameHeading from './SameHeading'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'

const OurTeam = () => {
  return (
    <div className='my-12'>
      <Container className=''>
      <SameHeading title ="our team" para="Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procras tinate users.Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procras tinate users."/>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 md:gap-x-8 w-full items-center ">
        {/* TeamCard #1 */}
        <div className=" flex flex-col  w-full items-center justify-center">
          <div  className=' w-full'>
            <img src="https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2017/01/team.jpg" className=' h-full w-full' alt="" />
          </div>
          <div className=' relative w-full'>
            <div className=" flex items-center absolute -top-4  left-0   justify-center w-full  ">
            <div className=' flex-col  bg-white  w-[90%]     flex justify-center items-center gap-x-4'>
              <div className='flex items-center gap-x-4 w-full justify-center my-4'>
                <span className=' text-xl hover:text-webBlue duration-200 cursor-pointer'>
                  <FaFacebookF/>
                </span>
                <span className=' text-xl hover:text-webBlue duration-200 cursor-pointer'>
                  <BsTwitter/>
                </span>
                <span className=' text-xl hover:text-webBlue duration-200 cursor-pointer'>
                  <FaLinkedinIn/>
                </span>
              </div>
             <div className=' flex flex-col  items-center justify-center'>
             <h2 className=' capitalize text-lg  text-darkTex font-medium'>Amanda Hayes</h2>
              <p className=' uppercase text-darkText text-md mb-1 font-normal'>ceo</p>
              <hr className=' bg-webBlue h-[2px] w-8 rounded-md'  />
             </div>
            </div>
            </div>
          </div>
          <p className=" text-darkText text-sm mt-28 text-center">
          Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procras tinate users.
          </p>
        </div>
        {/* TeamCard #2 */}
        <div className=" flex flex-col  w-full items-center justify-center">
          <div  className=' w-full'>
            <img src="https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2017/01/team-2.jpg" className=' h-full w-full' alt="" />
          </div>
          <div className=' relative w-full'>
            <div className=" flex items-center absolute -top-4  left-0   justify-center w-full  ">
            <div className=' flex-col  bg-white  w-[90%]     flex justify-center items-center gap-x-4'>
              <div className='flex items-center gap-x-4 w-full justify-center my-4'>
                <span className=' text-xl hover:text-webBlue duration-200 cursor-pointer'>
                  <FaFacebookF/>
                </span>
                <span className=' text-xl hover:text-webBlue duration-200 cursor-pointer'>
                  <BsTwitter/>
                </span>
                <span className=' text-xl hover:text-webBlue duration-200 cursor-pointer'>
                  <FaLinkedinIn/>
                </span>
              </div>
             <div className=' flex flex-col  items-center justify-center'>
             <h2 className=' capitalize text-lg  text-darkTex font-medium'>Shirley King</h2>
              <p className='  text-darkText mb-1 font-normal'>Director</p>
              <hr className=' bg-webBlue h-[2px] w-8 rounded-md'  />
             </div>
            </div>
            </div>
          </div>
          <p className=" text-darkText text-sm mt-28 text-center">
          Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procras tinate users.
          </p>
        </div>
        {/* TeamCard #3 */}
        <div className=" flex flex-col  w-full items-center justify-center">
          <div  className=' w-full'>
            <img src="https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2017/01/team-3.jpg" className=' h-full w-full' alt="" />
          </div>
          <div className=' relative w-full'>
            <div className=" flex items-center absolute -top-4  left-0   justify-center w-full  ">
            <div className=' flex-col  bg-white  w-[90%]     flex justify-center items-center gap-x-4'>
              <div className='flex items-center gap-x-4 w-full justify-center my-4'>
                <span className=' text-xl hover:text-webBlue duration-200 cursor-pointer'>
                  <FaFacebookF/>
                </span>
                <span className=' text-xl hover:text-webBlue duration-200 cursor-pointer'>
                  <BsTwitter/>
                </span>
                <span className=' text-xl hover:text-webBlue duration-200 cursor-pointer'>
                  <FaLinkedinIn/>
                </span>
              </div>
             <div className=' flex flex-col  items-center justify-center'>
             <h2 className=' capitalize text-lg  text-darkTex font-medium'>Braden pitt</h2>
              <p className='  text-darkText text-md mb-1 font-normal'>Designer</p>
              <hr className=' bg-webBlue h-[2px] w-8 rounded-md'  />
             </div>
            </div>
            </div>
          </div>
          <p className=" text-darkText text-sm mt-28 text-center">
          Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procras tinate users.
          </p>
        </div>
      </div>

      </Container>
      
    </div>
  )
}

export default OurTeam