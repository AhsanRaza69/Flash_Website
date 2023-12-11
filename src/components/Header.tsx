"use client";
import React, { useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { FaOpencart } from "react-icons/fa";
import { ImSearch } from "react-icons/im";

import Image from "next/image";
import { FiMenu } from "react-icons/fi";

import { motion } from "framer-motion";

interface Links {
  name: string;
  link: string;
}

const Header = () => {
  const [SearchOn, setSearchOn] = useState(false);
  const [OverCart, setOverCart] = useState(false);
  const [OpenMenu, setOpenMenu] = useState(false);

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
  return (
    <div className=" bg-white   sticky top-0 z-50 lg:top-10  border px-4  lg:px-20 py-4 flex items-center justify-between">
      <Logo />
      <div className="flex items-center relative gap-x-8">
        <ul className=" hidden md:flex caret-transparent items-center gap-x-8">
          {navLinks.map((item: Links, index) => (
            <Link key={index} href={item.link}>
              <li
                className=" text-lg text-darkText capitalize hover:text-webBlue duration-200 "
                key={index}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
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
            className="cursor-pointer rounded-full relative  w-8 h-8 border-gray-400 text-gray-400 border-[1px] flex items-center  justify-center"
          >
            <FaOpencart />
            <span className="  absolute -top-1 -right-3 bg-webBlue w-5 h-5 flex items-center justify-center rounded-full   text-white cursor-pointer">
              1
            </span>

            {OverCart && (
              <motion.div
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }} className=" relative top-[180px] w-[200px] h-[300px] bg-red-600"></motion.div>
            )}
          </span>

          <span
            onClick={() => setSearchOn(!SearchOn)}
            className=" hidden md:flex hover:text-webBlue hover:border-webBlue duration-300 group cursor-pointer rounded-full relative w-8 h-8 border-gray-400 text-gray-400 border-[1px] te items-center  justify-center"
          >
            <ImSearch />
            {SearchOn && (
              <div
                className={` border duration-300 overflow-hidden  right-0 absolute top-12 px-4`}
              >
                <div className=" bg-white flex items-center my-2 px-4 py-2 ">
                  <input
                    type="text"
                    className=" placeholder:text-sm border-b-[1px] py-2 px-2 pb-1 "
                    placeholder="Search..."
                  />
                  <span className=" flex bg-webBlue w-10 h-8 text-white  items-center justify-center shadow-inherit shadow-2xl">
                    <ImSearch />
                  </span>
                </div>
              </div>
            )}
          </span>
        </div>
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
            {navLinks.map((item: Links, index) => (
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
    </div>
  );
};

export default Header;
