import React from 'react'
import Container from '../Container'

const LearnMore = () => {
  return (
    <div className=' flex items-center py-8 w-full justify-center  bg-gray-800 text-white'>
        <Container >
           <div className="flex-col justify-center  w-full text-center  items-center">
           <h2 className=' text-xl md:text-3xl font-medium'>THE BEST CLEAN MULTIPURPOSE THEME WITH AMAZING FEATURE</h2>
            <button className=' my-4 hover:bg-webBlue duration-300 hover:border-webBlue text-center border-[1px] px-4 font-light  textmd lg:text-2xl border-white p-2 rounded-full'>
                   Learn More
            </button>
           </div>
        </Container>
    </div>
  )
}

export default LearnMore