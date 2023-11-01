"use client"
import React from 'react'
import Container from '../Container'
import Slider from 'react-slick'
import Image from 'next/image';

const Sponsers = () => {
    var settings = {
        dots: false,
        arrows:false,
        speed: 500,

        autoPlay:true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,

      };
  return (
    <Container className="">
            <Slider {...settings}>
      
     {/* Slider#1 */}
      <div className=" w-full outline-none cursor-pointer">
        <Image  
         src="https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2017/01/logo-4.jpg"
          alt="bannerImage"
          width={500}
          height={300}
          className=''
          />
      </div>
     {/* Slider#1 */}
      <div className=" w-full relative outline-none cursor-pointer">
        <Image  
         src="https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2017/01/logo-2.jpg"
          alt="bannerImage"
          width={500}
          height={500}
          className=''
          />
      </div>
     {/* Slider#1 */}
      <div className=" w-full relative outline-none cursor-pointer">
        <Image  
         src="https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2017/01/logo-3-1.jpg"
          alt="bannerImage"
          width={500}
          height={500}
          className=''
          />
      </div>
     {/* Slider#1 */}
      <div className=" w-full relative outline-none cursor-pointer">
        <Image  
         src="https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2017/01/logo-5.jpg"
          alt="bannerImage"
          width={500}
          height={500}
          className=''
          />
      </div>
      <div className=" w-full cursor-pointer outline-none">
        <Image  
         src="https://themegrilldemos.com/flash/wp-content/uploads/sites/6/2017/01/logo-1.jpg"
          alt="bannerImage"
          width={500}
          height={500}
          className=''
          />
      </div>
      
    </Slider>   
    </Container>
  )
}

export default Sponsers