"use client";
import { useDispatch, useSelector } from "react-redux";
import { Products, stateProps } from "../../../type";
import Container from "@/components/Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import SlideBar from "@/components/SlideBar";
import {
  clearCart,
  decreaceQuantity,
  delectCart,
  increaseQuantity,
} from "@/redux/ShopingSlice";
import { ImCross } from "react-icons/im";
import Image from "next/image";
import FormatedPrice from "@/components/FormatPrice";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AddToCartBtn from "@/components/AddToCartBtn";
import SubTotalDiv from "@/components/SubTotalDiv";
import CartSmallScreenItem from "@/components/CartSmallScreenItem";
import EmptyPop from "@/components/EmptyPop";

const CartContainer = () => {
  const { ProductData } = useSelector((state: stateProps) => state?.shop);
  const dispatch = useDispatch();
  return (
    <div>
      <div className=" bg-darkText/5 ">
        <Container className="  py-2 flex mt-10  justify-between items-center ">
          <h2 className="  text-2xl">Shop</h2>
          <span className=" text-sm text-darkText flex gap-x-1 items-center">
            <Link href="/" className="">
              home
            </Link>
            <MdKeyboardArrowRight />
            Shop
          </span>
        </Container>
      </div>
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6  ">
        <div className="  w-full col-span-2  ">
          {
            ProductData.length > 0 ? (
              <div className="">
                  { ProductData.map((item: Products) => (
            <div className="">
              <div className="h-[350px]  hidden md:flex   flex-col  ">
              <div className=" w-full h-full">
                {/* Delect button div */}
                <div className=" h-full flex">
                  <div className="border-[2px] border-gray-300 flex justify-center items-center cursor-pointer px-4">
                    <span
                      onClick={() => dispatch(delectCart(item._id))}
                      className=" text-xm   flex items-center justify-center   text-red-500 hover:bg-red-500
                w-5 hover:text-white duration-200  ease-in h-5 rounded-full "
                    >
                      <ImCross size={9} />
                    </span>
                  </div>

                  <div className=" relative text-webBlue font-medium   border-[1px] border-y-gray-300  w-full h-full
                     grid grid-cols-11  ">
                    {/* image div */}
                    <div className="border-r-[2px]  flex items-center justify-center  border-gray-300 px-2 col-span-5  ">
                      <div className=" w-[90%]  object-cover h-[70%] ">
                        <Image
                          src={item?.image}
                          alt="prudctimage"
                          width={500}
                          //  objectFit='cover'
                          height={500}
                          className="   w-full  object-cover h-full   "
                        />
                      </div>
                    </div>

                    {/* product name */}
                    <div className="border-r-[2px] px-1 text-center w-full flex items-center justify-center  border-gray-300 col-span-2">
                      {item.title}
                    </div>

                    {/* productPrice */}
                    <div className="border-r-[2px] flex items-center justify-center border-gray-300 col-span-1">
                      <FormatedPrice amount={item?.price} />
                    </div>
                    {/* productQuantity */}

                    <div className="border-r-[2px] flex items-center justify-center border-gray-300 col-span-1">
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
                    <div className="border-r-[2px] flex items-center justify-center border-gray-300 col-span-2">
                    <FormatedPrice amount={item.price * item.quantity}/>
                    </div>

                    <div className=" absolute top-0 left-0   text-gray-800   text-[14px] font-bold   border-gray-500 border-transparent border-b   w-full   grid grid-cols-11 ">
                      <div className="border-b-[2px] border-gray-300   px-2 py-2 col-span-5  "></div>
                      <div className="border-b-[2px] border-gray-300  px-2 py-2 col-span-2">
                        Product
                      </div>
                      <div className="border-b-[2px] border-gray-300  px-1 py-2 col-span-1">
                        Price
                      </div>
                      <div className="border-b-[2px] border-gray-300  px-1 py-2 col-span-1">
                        Quantity
                      </div>
                      <div className="border-b-[2px] border-gray-300  px-1 py-2 col-span-2">
                        Subtotal
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small screen cart */}
           <CartSmallScreenItem increaseQuantity={increaseQuantity} delectCart={delectCart} item={item}/>
            </div>
          ))}

          <div className="border-[2px] border-gray-300 hidden md:flex  justify-between py-2 border-t-transparent w-full px-4  ">
            <div className=" flex  gap-3">
              <div className=" w-[80px] border-[1px] border-gray-400">
                <input
                  type="text"
                  className=" w-full py-1"
                  placeholder="Coupon C"
                />
              </div>

              <button className=" bg-gray-200 hover:bg-gray-300 duration-200 rounded-md px-4 py-1">
                Apply Coupon
              </button>
            </div>
            <button
              onClick={() => dispatch(clearCart())}
              className={`bg-gray-200 ${
                ProductData.length > 1
                  ? "cursor-pointer opacity-100"
                  : " cursor-not-allowed opacity-60"
              } hover:bg-gray-300 duration-200   rounded-md px-4 py-1`}
            >
              Update Cart
            </button>
          </div>
         <SubTotalDiv/>
              </div>
            ) : (
              <div className="">
                 <EmptyPop/>
              </div>
            )
          }
        </div>
        <SlideBar />
      </Container>
    </div>
  );
}; 

export default CartContainer;
