
import { FcInfo } from "react-icons/fc"

const EmptyPop = () => {
  return (
    <div className=' border-t-webBlue border-[2px]   bg-transparent text-gray-600 px-3 py-4 w-full'>
        <h2 >
            <span className=" text-gray-600 flex gap-3 items-center text-[14px] ">
              <FcInfo size={25}/>
            Your cart is currently empty.
            </span>
        </h2>
    </div>
  )
}

export default EmptyPop