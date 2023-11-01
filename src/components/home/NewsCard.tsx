import Image from "next/image"
import { BiSolidUser } from "react-icons/bi";
 interface Props {
    title:string;
    image:string;
 }

const NewsCard = ({title,image}:Props) => {
  return (
    <div className=" flex flex-col lg:px-4  md  :px-2  justify-center gap-y-3">
        <div className=" w-full relative  ">
            <Image src={image} width={200} height={200} alt="CardImage" className=" w-full object-cover">

            </Image>
            <span className=" bg-webBlue px-2 py-3 absolute top-0 left-0 text-white text-xs  font-ligh">
                January 2,2023
            </span>
        </div>
        <h2 className=" font-medium text-lg ">{title}</h2>
        <p className=" text-darkText">
        Apple pie dessert jelly-o cotton candy soufflé toffee croissant candy canes. Cupcake chupa chups danish sugar plum candy canes marshmallow. Bear claw soufflé cheesecake toffee cake oat cake pastry. Cotton candy fruitcake jelly-o. Sesame snaps cake macaroon jelly candy sesame snaps. Bonbon powder sesame snaps toffee marshmallow halvah icing. Soufflé croissant halvah cake danish liquorice jujubes sugar plum icing. Pie lemon drops gummi bears ice cream tart chocolate cake candy canes.
        </p>
        <div className=" flex  bg-transparent/05 p-1  items-center  justify-between">
          <span className=" flex items-center hover:text-webBlue duration-200 cursor-pointer text-gray-500 text-sm ">
            <BiSolidUser />
            ThemeGrill Team
          </span>
          <a href="#" className=" text-webBlue text-sm">Read More</a>
        </div>
    </div>
  )
}

export default NewsCard