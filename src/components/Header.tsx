"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FaOpencart } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import {useSelector } from "react-redux";
import CartDev from "./CartDev";
import { stateProps } from "../../type";
import NavLink from "./NavLink";
import Container from "./Container";
import { CartContainer } from "./CartContainer";
import { useRouter } from "next/router";



const Header = () => {
  // const router = useRouter();
  const [SearchOn, setSearchOn] = useState(false);
  const [OverCart, setOverCart] = useState(false);
  const [OpenMenu, setOpenMenu] = useState(false);
  
  const {ProductData} = useSelector((state:stateProps)=>state?.shop)
  
  const navLinks = [
        {
          name: "home",
          link: "/",
        },
        {
          name: "Download Flash",
          link: "",
        },
        {
          name: "Blog",
          link: "/blog",
        },
        {
          name: "Shop",
          link: "/shop",
        },
        {
          name: "contact",
          link: "/contact",
        },
      ];


      // Function to update the state when the component mounts (on page render)
      // useEffect(() => {
      //   // Check if the current route is "/shop"
      //   if (router.pathname === '/shop') {
      //     setOverCart(true);
      //     // You can perform additional logic here if needed
      //   } else {
      //     setOverCart(false);
      //   }
      // }, [router.pathname]); 
 
      useEffect(() => {
        // Delay the state function for 3 seconds
        const delayInSeconds = 2;
        
        const delayStateFunction = setTimeout(() => {
         
          setOverCart(true)
        }, delayInSeconds * 1000); // Convert seconds to milliseconds
    
        return () => clearTimeout(delayStateFunction);
      }, []);
  
  return (
    <Container className=" bg-white    sticky top-0 z-50 lg:top-10  border px-4  lg:px-20  flex items-center justify-between">
      <Logo />
      <div className="flex items-center relaive gap-x-8">
         <NavLink navLinks={navLinks}/>
        <div className=" caret-transparent flex items-center gap-x-2  md:gap-x-8 ">
          {/* MenuBAr */}
          <span
            onClick={() => setOpenMenu(!OpenMenu)}
            className=" text-2xl md:hidden flex justify-center items-center"
          >
            <FiMenu />
          </span>

          <span
            onMouseEnter={() => setOverCart(true)}
            onMouseLeave={() => setOverCart(false)}
            className="cursor-pointer rounded-full relative    w-8 h-8 border-gray-400 text-gray-400 border-[1px] flex items-center justify-center"
          >

          
            <FaOpencart />
            <span className="  absolute -top-1 -right-3 bg-webBlue w-5 h-5 flex items-center justify-center rounded-full   text-white cursor-pointer">
              {ProductData.length}
            </span>
          

           
           <CartContainer OverCart={OverCart}/>
          </span>

          <span
            onClick={() => setSearchOn(!SearchOn)}
            className=" hidden md:flex hover:text-webBlue hover:border-webBlue duration-300 group cursor-pointer rounded-full relative w-8 h-8 border-gray-400 text-gray-400 border-[1px] te items-center  justify-center"
          >
            <ImSearch />
          </span>
      </div>
            {SearchOn && (
              <div
                className={` border duration-300 overflow-hidden  right-8 absolute top-[80px] px-4`}
              >
                <div className=" bg-white flex items-center my-2 px-4 py-2 ">
                  <input
                    type="text"
                    className=" placeholder:text-sm border-b-[1px] py-2 px-2 pb-1 "
                    placeholder="Search..."
                  />
                  <span
                  onClick={() => setSearchOn(!SearchOn)}
                   className=" flex bg-webBlue w-10 h-8 text-white  items-center justify-center shadow-inherit shadow-2xl">
                    <ImSearch />
                  </span>
                </div>
              </div>
            )}
        </div>
      {/* small screen menu */}
      {OpenMenu && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className={`   absolute top-14  right-0 z-10  w-full  bg-white`}
        >
          <ul className=" flex flex-col justify-center mt-6  leading-tight w-full caret-transparent ">
            {navLinks.map((item:any, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={() => setOpenMenu(!OpenMenu)}
              >
                <hr className=" w-[90%] mx-auto" />
                <li
                  className=" px-6 text-sm uppercase  w-full py-3  text-darkText  hover:text-webBlue duration-200 "
                  key={index}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </motion.div>
      )}
    </Container>
  );
};

export default Header;
