import React from 'react'
import Container from '../Container'


const Style:any = {
    background: "url('https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2017/01/CALL-TO-ACTION.jpg')",
};


const HomeDownSec = () => {
  return (
    <div className=' mt-8  w-full h-[280px] text-white bg-contain      ' style={Style}>
        <Container className='px-8 py-12 flex items-center h-full w-full border flex-col gap-y-4 justify-center '>
           <h2 className=' font-medium text-xl px-2 md:text-3xl text-center' >THE BEST CLEAN MULTIPURPOSE THEME WITH AMAZING FEATURE</h2>
           <div className="flex flex-col md:flex-row w-full justify-center items-center gap-x-4">
             <button className=' w-[200px] md:w-auto  border-[1px] hover:bg-webBlue hover:text-white bg-transparent duration-300 px-6 py-2 rounded-full border-white md:text-lg '>
                Learn More
             </button>
             <button className=' w-[200px] md:w-auto md:mt-0 mt-4  border-[1px] hover:bg-webBlue hover:text-white bg-transparent duration-300 px-6 py-2 rounded-full border-white md:text-lg '>
                Download Now
             </button>
           </div>
        </Container>
    </div>
  )
}

export default HomeDownSec