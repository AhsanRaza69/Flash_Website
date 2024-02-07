import React from 'react'
import { ImCross } from 'react-icons/im'
import FormatedPrice from './FormatPrice'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { decreaceQuantity } from '@/redux/ShopingSlice'

const CartSmallScreenItem = ({increaseQuantity,dispatch,delectCart,item}:any) => {
    
  return (
    <div className=" w-full text-gray-600 font-medium md:hidden  text-sm  grid grid-cols-1 grid-rows-5">
              {/* delect btn */}
              <div className=" border flex  px-3 py-2 border-gray-400">
             
                    <span
                      onClick={() => dispatch(delectCart(item._id))}
                      className=" text-xm   flex items-center justify-center   text-red-500 hover:bg-red-500
                w-5 hover:text-white duration-200  ease-in h-5 rounded-full "
                    >
                      <ImCross size={9} />
                    </span>
                  
              </div>
              {/* //item  name */}
              <div className="border flex  px-3 py-1 items-center justify-between   border-gray-400 border-t-transparent">
               <h2>
                Product: 
               </h2>
               <span className=" text-webBlue font-normal">{item?.title}</span>
              </div>
              {/* item price */}
              <div className="border flex  px-3 py-1 items-center justify-between   border-gray-400 border-t-transparent">
               <h2>
                Price: 
               </h2>
               <span className=" text-webBlue font-normal"><FormatedPrice amount={item?.price}/></span>
              </div>
              {/* item quaniity */}
              <div className="border flex  px-3 py-1 items-center justify-between   border-gray-400 border-t-transparent">
               <h2>
                Quantity: 
               </h2>
               <div className=" flex items-center gap-x-2">
                        <div className=" flex gap-1 items-center text-black  p-1  h-8 border border-black ">
                          {item?.quantity}
                          <div className=" cursor-pointer  text-black  ">
                            <span
                              className=" cursor-pointer"
                              onClick={() => dispatch(increaseQuantity(item))}
                            >
                              <IoIosArrowUp />
                            </span>
                            <span
                              onClick={() => dispatch(decreaceQuantity(item))}
                              className="  cursor-pointer "
                            >
                              <IoIosArrowDown />
                            </span>
                          </div>
                        </div>
                        </div>
              </div>
              
              {/* item total  */}
              <div className="border flex  px-3 py-1 items-center justify-between   border-gray-400 border-t-transparent">
               <h2>
                Subtotal: 
               </h2>
               <span className=" text-webBlue font-normal"><FormatedPrice amount={item.price * item.quantity}/></span>
              </div>
          
        
            </div>
  )
}

export default CartSmallScreenItem