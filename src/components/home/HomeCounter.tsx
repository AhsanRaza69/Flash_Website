
import React from 'react'
import Container from '../Container';
import Counter from './Counter';
import {IoSettingsSharp, IoSpeedometerSharp} from 'react-icons/io5'
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { BsBrowserFirefox } from 'react-icons/bs';



const HomeCounter = () => {
    const Style:any = {
        background: "url('https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2022/11/counterbackground.jpg')",
 
    };
  return (
    <div className=' mt-8  py-4 w-full md:h-[280px] text-white   ' style={Style}>
       <Container className=" h-full w-full flex items-center">
       <div className="  grid grid-cols-1 md:grid-cols-4 gap-y-4 w-full">
         
         {/* counter */}
         <Counter icon={<IoSettingsSharp/>} from={0} to={2500} title="Fast Support"/>
         <Counter icon={<FaCloudDownloadAlt/>} from={0} to={3800} title="Cloud Download"/>
         <Counter icon={<IoSpeedometerSharp/>} from={0} to={5500} title="Fast Loading"/>
         <Counter icon={<BsBrowserFirefox/>} from={0} to={110} title="Browser Compatible"/>

       </div>
       </Container>

    </div>
  )
}

export default HomeCounter