"use client"

import Slider from "react-slick";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Image from "next/image";
import BannerText from "./BannerText";
// import bg from "/images/flash-slider1.jpg"
// import bg2 from "/images/slider-2.jpg"
// import bg3 from "/images/slider-3.jpg"


const Banner = () => {

  const NextArrow = (props:any) => {
    const {onClick} = props
      return( 
        <div className=" hidden p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-sm text-2xl lg:flex items-center justify-center z-20 absolute left-5 top-[40%]" onClick={onClick}>
      <PiCaretLeftLight/>
    </div>
      )
  }
  const PrevArrow = (props:any) =>{
    
      const {onClick} = props
      return(
        <div className="p-3 hidden bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-sm text-2xl lg:flex items-center justify-center z-20 absolute   right-5 top-[40%]" onClick={onClick}>
          <PiCaretRightLight/>
    </div>
      )
      
  }

  var settings = {
    dots: false,
    arrows:true,
    autoPlay:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 2,
    nextArrow:<NextArrow  />,
    prevArrow:<PrevArrow/>
  };
  return (
   <div>
     <div className=" relative  flex flex-col">
      <Slider {...settings}>
     {/* Slider#1 */}
      <div className=" w-full    relative">
        <Image  
         src="/images/flash-slider1.jpg"
          alt="bannerImage"
          width={1000}
          height={600}
          
           className=" w-full h-full relative" />
           <BannerText title="One Click Demo Importer" para=" Drag and drop builder makes it possible to create any kind of layout you wish for." linkName="download more" Linked="/"/>
      </div>
       {/* Slider#2 */}
      <div className=" w-full  relative">
        <Image  
         src='/images/slider-2.jpg'
          alt="bannerImage"
          width={1000}
          height={600}
          
           className=" w-full h-full relative" />
           <BannerText title="Awesome Multi-Purpose Theme" para="It looks perfect on any device and retina display" linkName="read more" Linked="/"/>
      </div>
       {/* Slider#3 */}
      <div className=" w-full  relative">
        <Image  
         src='/images/slider-3.jpg'
          alt="bannerImage"
          width={1000}
          height={600}
          
           className=" w-full h-full relative" />
           <BannerText title="Drag and Drop Page Builder" para="Drag and drop builder makes it possible to create any kind of layout you wish for." linkName="view feature" Linked="/"/>
      </div>
      
      
      
    </Slider>

    </div>
   </div>
  )
}

export default Banner