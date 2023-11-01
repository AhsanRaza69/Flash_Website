"use client"
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Slider from "react-slick";
import bg from '@/images/flash-slider1.jpg'
import Image from "next/image";
import SameHeading from "./SameHeading";
import Container from "../Container";
import ReviewSlider from "./ReviewSlider";
// import image1 from '@/images/client_images/testimonial-1.jpg'
// import image_2 from '@/images/client_images/tetimonial-2.jpg'
// import image_3 from '@/images/client_images/testimonial-3.jpg'
const OtherReviews = () => {
    
    
      var settings = {
        dots: false,
        arrows:false,
        autoPlay:false,
        infinite: true,
        slidesToShow: 2,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            } ,
            
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        slidesToScroll: 1,

      };
      return (
        <div className=" bg-darkText/5 relative  py-12 flex flex-col">
            <SameHeading title="WHAT OTHERS SAY"/>
     <Container className="">
     <Slider {...settings}>
     {/* slider_1 */}
     <div className=" w-full flex  ">
       <ReviewSlider Para="Aenean nonummy hendrerit mau phasellu porta. Fusce suscipit varius mi sed. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio morbi. Ut viverra mauris justo, quis auctor nisi. Suspendisse sit amet diam diam, eget volutpat lacus. Vestibulum faucibus scelerisque nisl vitae…" 
       Name="Mr. John Anderson"
       Rank="CEO"
       image='/images/client_images/testimonial-1.jpg'
       />
     </div>
     {/* slider_2 */}
     <div className=" w-full flex  ">
       <ReviewSlider Para="Aenean nonummy hendrerit mau phasellu porta. Fusce suscipit varius mi sed. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio morbi. Ut viverra mauris justo, quis auctor nisi. Suspendisse sit amet diam diam, eget volutpat lacus. Vestibulum faucibus scelerisque nisl vitae…" 
       Name="Martina Cliton"
       Rank="Designer"
       image='/images/client_images/testimonial-3.jpg'
       />
     </div>
     {/* slider_3 */}
     <div className=" w-full flex  ">
       <ReviewSlider Para="Aenean nonummy hendrerit mau phasellu porta. Fusce suscipit varius mi sed. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio morbi. Ut viverra mauris justo, quis auctor nisi. Suspendisse sit amet diam diam, eget volutpat lacus. Vestibulum faucibus scelerisque nisl vitae…" 
       Name="Selina Roy"
       Rank="CEO"
       image='/images/client_images/testimonial-3.jpg'
       />
     </div>
     
  
     
     
     
     
   </Slider>
     </Container>
    {/* <div className=" absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10"/> */}
    </div>
      );
}

export default OtherReviews