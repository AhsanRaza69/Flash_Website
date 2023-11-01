import { title } from 'process'
import React from 'react'

interface Props{
    title:string
}

const SameHeading = ({title,para}:any) => {
  return (
    <div className=' w-full flex flex-col gap-1 items-center justify-center'>
        <h2 className=' text-2xl font-medium uppercase'>{title}</h2>
        <div className="w-20 h-[1px] rounded-md bg-gray-200 flex justify-center">
            <div className=' bg-webBlue h-[2px] w-5'></div>
        </div>
        <p className=' text-sm text-darkText text-center my-4'>{para}</p>
    </div>
  )
}

export default SameHeading