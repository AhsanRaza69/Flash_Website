import React from 'react'
import Container from '../Container'
import {VscSettingsGear} from 'react-icons/vsc'
import { BsArrowRight } from 'react-icons/bs'


const HomeCards_1 = () => {
    return (
        <Container className=''>
            <div className="grid my-8 grid-cols-1 lg:grid-cols-3 items-center gap-y-8 md:gap-x-14 px-4 py-2">
        <div className=' flex flex-col gap-y-3  justify-center'>
            <div className=' flex items-center gap-x-6'>
                <span className=' bg-webBlue p-4 flex items-center justify-center  relative text-white'><VscSettingsGear size={25}/>
                <span className=" w-4 h-4 bg-webBlue absolute -bottom-2 rotate-45"></span>
                </span>
                <h2 className='  text-gray-900 md:text-lg'>HIGHLY CUSTOMIZABLE</h2>
            </div>
            <p className=' text-sm text-gray-500'>Mirum est notare quam littera gothica, quam nunc putamus.parum claram, anteposuerit
               </p>
               <span >
                <a className=' flex items-center gap-4 text-webBlue font-medium' href="">Read more <BsArrowRight/></a> 
               </span>
        </div>
        <div className=' flex flex-col gap-y-3  justify-center'>
            <div className=' flex items-center gap-x-6'>
                <span className=' bg-webBlue p-4 flex items-center justify-center  relative text-white'><VscSettingsGear size={25}/>
                <span className=" w-4 h-4 bg-webBlue absolute -bottom-2 rotate-45"></span>
                </span>
                <h2 className='  text-gray-900 md:text-lg'>HIGHLY CUSTOMIZABLE</h2>
            </div>
            <p className=' text-sm text-gray-500'>Mirum est notare quam littera gothica, quam nunc putamus.parum claram, anteposuerit
               </p>
               <span >
                <a className=' flex items-center gap-4 text-webBlue font-medium' href="">Read more <BsArrowRight/></a> 
               </span>
        </div>
        <div className=' flex flex-col gap-y-3  justify-center'>
            <div className=' flex items-center gap-x-6'>
                <span className=' bg-webBlue p-4 flex items-center justify-center  relative text-white'><VscSettingsGear size={25}/>
                <span className=" w-4 h-4 bg-webBlue absolute -bottom-2 rotate-45"></span>
                </span>
                <h2 className='  text-gray-900 md:text-lg'>HIGHLY CUSTOMIZABLE</h2>
            </div>
            <p className=' text-xs px-2 text-gray-500'>Mirum est notare quam littera gothica, quam nunc putamus.parum claram, anteposuerit
               </p>
               <span >
                <a className=' flex items-center gap-4 text-webBlue font-medium' href="">Read more <BsArrowRight/></a> 
               </span>
        </div>
        </div>
    </Container>
  )
}

export default HomeCards_1