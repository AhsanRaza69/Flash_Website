import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

interface Props{
    Para:string,
    Name:string,
    Rank:string,
    image: string
}

const ReviewSlider = ({Para,Name,Rank,image}:Props) => {
  return (
    <div className=' flex flex-col gap-y-4 md:px-4'>
            <div className='bg-white text-sm px-4 py-6 gap-x-4 md:pr-12 leading-7 text-darkText flex justify-center '>
            <span className=' mt-1 text-webBlue text-2xl'>
                <FaQuoteLeft/>
            </span>
            {Para}
        </div>
        <div className=' flex  gap-x-3'>
            <Image src={image}  width={70} height={50}   alt="clientImage" />
            <div className=' flex flex-col gap-y-2'>
                <h2 className='  text-slate-800 md:font-[700] text-md'>{Name}</h2>
                <p className='  font-normal text-slate-800'>{Rank}</p>
            </div>
        </div>

    </div>
  )
}

export default ReviewSlider