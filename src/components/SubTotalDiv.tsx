import React from 'react'

const SubTotalDiv = () => {
  return (
    <div className=" md:flex gap-3 py-8   w-full ">
         <div className="">
            <h2 className=' px-1 font-semibold  text-gray-500    text-3xl'>You may be interested in…</h2>
         </div>
        <div className=""></div>
    <div className=" px-4 md:w-[50%]">
      <h2 className=' text-[40px] text-gray-600'>Cart totals</h2>
      <div className=" flex  justify-center flex-col">
        <div className=" mt-2 border-[1.5px] rounded-t-md shadow-md  w-full flex gap-[20%] text-gray-500 font-medium  border-gray-500  px-3 py-2">
          <span>
            Subtotal
          </span>
          <span className=" text-webBlue">
          £18.00
          </span>
        </div>
        <div className=" border-[1.5px] border-t-transparent  rounded-b-md    w-full flex gap-[20%]  text-gray-500 font-medium  border-gray-500  px-3 py-2">
          <span>
          Total
          </span>
          <span className=" text-webBlue">
          £18.00
          </span>
        </div>

        <div className=" w-full">
            <button className=' w-full py-3 rounded-md mt-4 text-white  bg-webBlue flex justify-center '>Processed to Checkout</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SubTotalDiv