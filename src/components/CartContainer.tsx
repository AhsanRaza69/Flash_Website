import { motion } from "framer-motion";
import CartDev from "./CartDev";
import { useSelector } from "react-redux";
import { stateProps } from "../../type";
import Link from "next/link";

export const CartContainer = ({OverCart}:any) => {
    const {ProductData} = useSelector((state:stateProps )=>state?.shop)

  return (

           <motion.div
           initial={{  x: 5 }}
           animate={ { x: -10 }}
           transition={{ duration: 0.5}}
         className= {`relative hidden md:flex ${ OverCart ? " opacity-100 duration-200  " : "invisible opacity-0 "}   transition-all duration-300 ease-in-out  top-[50px]  h-auto  
         `} >
          
           <div className="  absolute -right-0 py-4     px-4   min-w-[250px] bg-white  border">
       
            <h2 className=" text-black text-[30px]">
              Cart 
              
          </h2>
         
          {
            ProductData.length > 0 ? (
                <div className="">
                    <div className=" ">
                    <CartDev/>
                    </div>
           <div className=" border-[1px] border-gray-200  h-[2px]"></div>
           <div className=" flex text-black my-2 items-center gap-1 w-full justify-center text-md font-normal">
               <h2> Subtotal: </h2> <span className=" text-webBlue">$123</span>
           </div>
           <div className=" flex w-full  justify-center my-4 items-center gap-1">
           <button className=" py-1 px-3 hover:bg-gray-500 duration-200   bg-gray-400 rounded-md text-white ">
               <Link href="/cart">

               View Cart
               </Link>
           </button>
           <button className=" py-1 px-3 hover:bg-gray-500 duration-200  bg-gray-400 rounded-md text-white ">
               Checkout
           </button>
           </div>
                </div>
            ) : (
                <div className=" text-md  text-darkText">No products in the cart.</div>
            )
          }
            </div>) 
          </motion.div>
  )
}
