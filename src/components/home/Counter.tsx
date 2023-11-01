"use client"
import { ReactNode } from 'react';
import { BiPlusMedical } from 'react-icons/bi';

import CountUp from 'react-countup'
interface Props {
   icon:ReactNode;
   from:number;
   to:number;
   title:string;

}

const Counter = ({icon,from,to,title}:Props) => {
  
  return (
    <div className="flex items-center flex-col gap-y-2">
           <div  className="text-webBlue text-5xl">
            {icon}
           </div>
          <h2 className=' font-medium  text-5xl  flex items-center'><CountUp  start={from} end={to}  duration={2} delay={0}/> <BiPlusMedical size={25} /> </h2>
          <p className=' text-sm'>{title}</p>
         </div>
  )
}

export default Counter