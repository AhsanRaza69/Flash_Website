import Link from 'next/link';
import React from 'react'


interface navLinks {
  navLinks:[]
}

const NavLink = ({navLinks}:any) => {
    

      interface Links {
        name: string;
        link: string;
      }
  return (
    <>
        <ul className=" hidden md:flex caret-transparent items-center gap-x-8">
          {navLinks.map((item: Links, index:number) => (
            <Link key={index} href={item.link}>
              <li
                className=" text-md  text-darkText capitalize hover:text-webBlue duration-200 "
                key={index}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
    </>
  )
}

export default NavLink