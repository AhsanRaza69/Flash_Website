
import Container from './Container'
import {motion} from 'framer-motion'
import Link from 'next/link'

interface props{
    title:String,
    para:string,
    linkName:string,
    Linked:string,
}

const BannerText = ({title,para,linkName,Linked}:props) => {
  return (
   <div className=' flex w-full h-full items-center justify-center'>
     <div className=' inline-block absolute top-0 left-0  w-full h-full'>
        <Container className=' flex h-full w-full items-center  text-center  flex-col  md:gap-y-6 justify-center'>
        <motion.h2
         initial={{y:30,opacity:0}} 
        whileInView={{y:0,opacity:1}} 
        transition={{duration:0.5}}
        className='  md:text-[30px] lg:text-6xl  font-medium text-slate-900 text-center '>{title}</motion.h2>
       <motion.p
       initial={{y:30,opacity:0}} 
       whileInView={{y:0,opacity:1}} 
       transition={{duration:0.5}}
        className=' hidden md:block md:text-3xl text-slate-900 text-center my-4 '>
          {para}
      
       </motion.p>
       <motion.div
             initial={{y:50,opacity:0}} 
             whileInView={{y:0,opacity:1}} 
             transition={{duration:0.7}}
             className=' flex w-full justify-center gap-x-4 mt-2 '
             >
            
         <Link href={Linked} >
         <button className=' px-4 py-1 text-xs md:py-3  md:px-6  bg-transparent border-darkText border-[3px] bg-slate-200 hover:bg-darkText hover:text-white duration-200 md:text-lg   uppercase font-normal' >{linkName}</button>
         </Link>
          
       </motion.div>
        </Container>
    </div>
   </div>
  )
}

export default BannerText